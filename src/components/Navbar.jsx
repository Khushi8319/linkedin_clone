import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import {
  AiOutlineHome, AiFillHome,
  AiOutlineSearch,
  AiOutlineBell, AiFillBell
} from "react-icons/ai"
import {
  HiOutlineUserGroup, HiUserGroup
} from "react-icons/hi"
import {
  BsBriefcase, BsBriefcaseFill,
  BsChatDots, BsChatDotsFill,
  BsGrid3X3GapFill
} from "react-icons/bs"
import { MdLogout } from "react-icons/md"

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchVal, setSearchVal] = useState("")

  const path = location.pathname

  function handleLogout() {
    logout()
    navigate("/login")
  }

  const navItems = [
    { to: "/", label: "Home", icon: <AiOutlineHome size={22} />, activeIcon: <AiFillHome size={22} /> },
    { to: "/network", label: "Network", icon: <HiOutlineUserGroup size={22} />, activeIcon: <HiUserGroup size={22} /> },
    { to: "/jobs", label: "Jobs", icon: <BsBriefcase size={20} />, activeIcon: <BsBriefcaseFill size={20} /> },
    { to: "/messages", label: "Messaging", icon: <BsChatDots size={20} />, activeIcon: <BsChatDotsFill size={20} /> },
    { to: "/notifications", label: "Notifications", icon: <AiOutlineBell size={22} />, activeIcon: <AiFillBell size={22} /> },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to="/">
            <div className="bg-[#0a66c2] rounded p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          </Link>
          <div className="relative hidden sm:flex items-center">
            <AiOutlineSearch className="absolute left-3 text-gray-400" size={16} />
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="Search"
              className="bg-[#eef3f8] text-sm rounded-md pl-9 pr-4 py-2 w-52 outline-none focus:ring-1 focus:ring-[#0a66c2]"
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          {navItems.map(item => {
            const active = path === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center px-3 py-1 text-xs rounded hover:bg-gray-100 transition-colors min-w-[56px] ${active ? "text-black border-b-2 border-black" : "text-gray-500"}`}
              >
                <span>{active ? item.activeIcon : item.icon}</span>
                <span className="hidden sm:block mt-0.5 font-medium">{item.label}</span>
              </Link>
            )
          })}

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex flex-col items-center px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded transition-colors min-w-[56px]"
            >
              <img src={user?.avatar} alt="me" className="w-6 h-6 rounded-full object-cover" />
              <span className="hidden sm:block mt-0.5 font-medium">Me ▾</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 top-14 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                <div className="p-4 flex flex-col items-center border-b">
                  <img src={user?.avatar} alt="profile" className="w-16 h-16 rounded-full object-cover mb-2" />
                  <p className="font-semibold text-sm text-center">{user?.name}</p>
                  <p className="text-xs text-gray-500 text-center mt-1">{user?.headline}</p>
                  <Link
                    to="/profile"
                    onClick={() => setShowDropdown(false)}
                    className="mt-3 w-full text-center border border-[#0a66c2] text-[#0a66c2] text-sm font-semibold rounded-full py-1 hover:bg-blue-50 transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    <MdLogout size={18} /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex flex-col items-center px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded cursor-pointer min-w-[56px]">
            <BsGrid3X3GapFill size={20} />
            <span className="mt-0.5 font-medium">Work ▾</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
