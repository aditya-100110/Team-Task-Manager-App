import React from "react"
import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"

const DashboardLayout = ({ children, activeMenu }) => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar activeMenu={activeMenu} />

      {currentUser && (
        <div className="flex h-screen overflow-hidden ">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="flex-1 w-full px-3 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">{children}</div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout
