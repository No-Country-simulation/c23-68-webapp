import { LoadingModal } from '../common/Loading'
import DatosForm from '../common/DatosForm'
import AhorrosForm from '../common/AhorrosForm'
import DatosIngresosForm from '../common/DatosIngresosForm'
import SavingsForm from '../common/SavingsForm'
import { Login } from './Login'
import { LoginContra } from './LoginContra'
import { Register } from './Register'
import DataSavedModal from '../common/DataSavedModal'
import DatosEditadosModal from '../common/DatosEditadosModal'
import DatosEliminadosModal from '../common/DatosEliminadosModal'
import AhorrosEditForm from '../common/AhorrosEditForm'


export function MainModals() {
  return (
    <>
      <LoadingModal />
      <Login />
      <LoginContra/>
      <Register/>
      <DatosForm />
      <AhorrosForm />
      <DatosIngresosForm />
      <DataSavedModal />
      <DatosEditadosModal />
      <DatosEliminadosModal />
      <SavingsForm />
      <AhorrosEditForm />
    </>
  )
}
