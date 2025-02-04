import SideBar from "../components/layout/SideBar"
import MainData from "../components/common/MainData"

function Savings() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full">
      <MainData />
      </div>
    </div>
  )
}

export default Savings
