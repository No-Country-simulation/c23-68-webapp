import { LoadingModal } from '../common/Loading'
import DataForm from '../common/DataForm'
import SavingsForm from '../common/SavingsForm'
import { Login } from './Login'
import { LoginContra } from './LoginContra'
import { Register } from './Register'
import DataSavedModal from '../common/DataSavedModal'


export function MainModals() {
  return (
    <>
      <LoadingModal />
      <Login />
      <LoginContra/>
      <Register/>
      <DataForm />
      <DataSavedModal />
      <SavingsForm />
    </>
  )
}
