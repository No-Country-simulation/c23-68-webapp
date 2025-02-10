import { LoadingModal } from '../common/Loading'
import DatosForm from '../common/DatosForm'
import AhorrosForm from '../common/AhorrosForm'
import DatosIngresosForm from '../common/DatosIngresosForm'

import { Login } from './Login'
import { LoginContra } from './LoginContra'
import { Register } from './Register'
import DataSavedModal from '../common/DataSavedModal'
import DatosEditadosModal from '../common/DatosEditadosModal'
import DatosEliminadosModal from '../common/DatosEliminadosModal'
import AhorrosEditForm from '../common/AhorrosEditForm'
import DatosIngresosEditForm from '../common/DatosIngresosEditForm'
import DatosGastosForm from '../common/DatosGastosForm'
import DatosGastosEditForm from '../common/DatosGastosEditForm'
import { LogoutModal } from './Logout'
import { CambioContra } from './CambioContra'
import { ContraCambiada } from './ContraCambiada'

export function MainModals() {
  return (
    <>
      <LoadingModal />
      <Login />
      <CambioContra/>
      <ContraCambiada/>
      <LoginContra />
      <Register />
      <DatosForm />
      <AhorrosForm />
      <DatosIngresosForm />
      <DataSavedModal />
      <DatosEditadosModal />
      <DatosEliminadosModal />
      <DatosGastosForm />
      <AhorrosEditForm />
      <DatosIngresosEditForm />
      <DatosGastosEditForm />
      <LogoutModal />
    </>
  )
}
