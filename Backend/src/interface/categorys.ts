export const TransactionIncome = 'Ingreso'
export const TransactionExpense = 'Gasto'

export type PriorityType = 'Alta' | 'Media' | 'Baja'
export type TransactionType =
  | typeof TransactionIncome
  | typeof TransactionExpense
