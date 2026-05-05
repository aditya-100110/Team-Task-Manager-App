
import React, { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { FiActivity } from "react-icons/fi"
import SideMenu from "./SideMenu"

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-lg ">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all duration-300"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          >
            {openSideMenu ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>

          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-violet-600 p-2 rounded-xl shadow-lg">
              <FiActivity className="text-white text-xl" />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Team Task Manager
              </h2>

              <p className="text-xs text-zinc-100 hidden md:block">
                Smart Productivity Platform
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          
        </div>
      </div>

      {/* Mobile Sidebar */}
      {openSideMenu && (
        <div className="fixed inset-0 z-40 flex lg:hidden">

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenSideMenu(false)}
          />

          {/* Sidebar */}
          <div className="relative z-50 w-72 h-full bg-zinc-950 border-r border-zinc-800 shadow-2xl">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all duration-300"
              onClick={() => setOpenSideMenu(false)}
            >
              <MdClose className="text-2xl" />
            </button>

            {/* Sidebar Content */}
            <div className="pt-20 px-4">
              <SideMenu activeMenu={activeMenu} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

