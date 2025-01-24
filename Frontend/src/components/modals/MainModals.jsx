import { LoadingModal } from '../common/Loading'
import DataForm from '../common/DataForm'
import SavingsForm from '../common/SavingsForm'
import { Login } from './Login'
import DataSavedModal from '../common/DataSavedModal'


export function MainModals() {
  return (
    <>
      <LoadingModal />
      <Login />
      <DataForm />
      <DataSavedModal />
      <SavingsForm />
    </>
  )
}
