import { Request, Response } from 'express';
import { TransactionModel } from '../models/Transaction';
import { IResponse } from '../interface/reponse';

function errorMessage(message: string): IResponse<typeof undefined> {
    return {
        status: false,
        message: message
    }
}

export async function getAllTransactions(req: Request, res: Response){
    try {
        console.log("hola");
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const transactions = await TransactionModel.find()
            .populate('user')
            .populate('category')
            .skip(skip)
            .limit(limit);

        const response: IResponse<typeof transactions> = {
            status: true,
            message: 'Lista de transacciones',
            data: transactions
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(errorMessage('Ocurrió un error al obtener las transacciones'));
    }
};

export async function createTransaction(req: Request, res: Response):Promise<any>{
    const { user, amount, type, category, description, date } = req.body;

    if (!user || !amount || !type || !category) {
        return res.status(400).json(errorMessage('Faltan campos obligatorios'));
    }

    try {
        const newTransaction = await TransactionModel.create({
            user,
            amount,
            type,
            category,
            description,
            date,
        });

        const response: IResponse<typeof newTransaction> = {
            status: true,
            message: 'Transaccion creada',
            data: newTransaction
        }

        res.status(201).json(response);
    } catch (err) {
        res.status(400).json(errorMessage('Error al crear la transacción'));
    }
};

export async function updateTransaction(req: Request, res: Response):Promise<any>{
    const { id } = req.params; 
    const { user, amount, type, category, description, date } = req.body;

    if (!id) {
        return res.status(400).json(errorMessage('ID de transacción requerido'));
    }
  
    try {
        const existingTransaction = await TransactionModel.findById(id);

        if (!existingTransaction) {
            return res.status(404).json(errorMessage('Transaccion no encontrada'));
        }

        const updatedTransaction = await TransactionModel.findByIdAndUpdate(
            id,
            { user, amount, type, category, description, date },
            { new: true, runValidators: true }
        );

        const response: IResponse<typeof updatedTransaction> = {
            status: true,
            message: 'Transaccion actualizada',
            data: updatedTransaction
        }
    
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(errorMessage('Error al actualizar la transacción'));
    }
};

export async function deleteTransaction(req: Request, res: Response):Promise<any>{
    const { id } = req.params; 

    if (!id) {
        return res.status(400).json(errorMessage('ID de transacción requerido'));
    }

    try {
        const deletedTransaction = await TransactionModel.findByIdAndDelete(id);

        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transaccion no encontrada' });
        }

        const response: IResponse<typeof undefined> = {
            status: true,
            message: 'Transaccion eliminada',
        };

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(errorMessage('Error al eliminar la transacción'));
    }
};
