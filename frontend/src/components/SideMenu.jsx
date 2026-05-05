
import React, { useEffect, useState } from "react"
import axiosInstance from "../utils/axioInstance"
import { useDispatch, useSelector } from "react-redux"
import { signOutSuccess } from "../redux/slice/userSlice"
import { useNavigate } from "react-router-dom"
import { SIDE_MENU_DATA, USER_SIDE_MENU_DATA } from "../utils/data"

const SideMenu = ({ activeMenu }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [SideMenuData, setSideMenuData] = useState([])
  const { currentUser } = useSelector((state) => state.user)

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout()
      return
    }

    navigate(route)
  }

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/auth/sign-out")

      if (response.data) {
        dispatch(signOutSuccess())
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (currentUser) {
      setSideMenuData(
        currentUser?.role === "admin"
          ? SIDE_MENU_DATA
          : USER_SIDE_MENU_DATA
      )
    }
  }, [currentUser])

  return (
    <div className="w-full lg:w-64 p-6 h-full flex flex-col bg-gray-800 border-r border-zinc-800 mt-0.5">

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl mb-4 border-4 border-zinc-800 overflow-hidden">

          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser?.profileImageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            currentUser?.name?.charAt(0)?.toUpperCase()
          )}
        </div>

        {/* Role Badge */}
        {currentUser?.role === "admin" && (
          <div className="bg-violet-600/20 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-violet-500/20">
            Admin
          </div>
        )}

        {/* Name */}
        <h5 className="text-xl font-semibold text-white">
          {currentUser?.name || ""}
        </h5>

        {/* Email */}
        <p className="text-sm text-zinc-400 mt-1 text-center break-all">
          {currentUser?.email || ""}
        </p>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto">

        {SideMenuData.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] font-medium rounded-2xl transition-all duration-300 py-4 px-5 mb-3 cursor-pointer ${
              activeMenu === item.label
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-2xl" />

            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideMenu

