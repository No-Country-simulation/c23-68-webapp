import { LoadingModal } from '../common/Loading'
import { Login } from './Login'
import { LoginContra } from './LoginContra'
import { Register } from './Register'

export function MainModals() {
  return (
    <>
      <LoadingModal />
      <Login /> 
      <LoginContra/>
      <Register/>
    </>
  )
}
