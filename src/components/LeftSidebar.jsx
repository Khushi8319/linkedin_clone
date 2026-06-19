import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function LeftSidebar() {
  const { user } = useAuth()

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="relative">
          <img src={user?.cover} alt="cover" className="w-full h-16 object-cover" />
          <Link to="/profile">
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-white absolute -bottom-8 left-4"
            />
          </Link>
        </div>
        <div className="pt-10 pb-3 px-4">
          <Link to="/profile" className="font-semibold text-sm hover:underline block">{user?.name}</Link>
          <p className="text-xs text-gray-500 mt-0.5 leading-tight">{user?.headline}</p>
        </div>
        <div className="px-4 pb-3 border-t border-gray-200 pt-2">
          <div className="flex justify-between text-xs py-1 hover:bg-gray-100 px-1 rounded cursor-pointer">
            <span className="text-gray-500">Profile viewers</span>
            <span className="text-[#0a66c2] font-semibold">243</span>
          </div>
          <div className="flex justify-between text-xs py-1 hover:bg-gray-100 px-1 rounded cursor-pointer">
            <span className="text-gray-500">Post impressions</span>
            <span className="text-[#0a66c2] font-semibold">1,847</span>
          </div>
        </div>
        <div className="px-4 pb-3 border-t border-gray-200 pt-2">
          <p className="text-xs text-gray-500 font-semibold">Connections</p>
          <p className="text-xs text-gray-600">{user?.connections} connections</p>
        </div>
        <div className="px-4 pb-3 border-t border-gray-200 pt-2">
          <div className="flex items-center gap-2 text-xs hover:bg-gray-100 px-1 py-1 rounded cursor-pointer">
            <span>🔖</span>
            <span className="font-semibold text-gray-700">My Items</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mt-2">
        <p className="text-xs font-semibold text-gray-600 mb-3">Recent</p>
        {["#reactjs", "#javascript", "#webdev", "#100daysofcode"].map(tag => (
          <div key={tag} className="text-xs text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">{tag}</div>
        ))}
        <div className="mt-3 border-t pt-3">
          <p className="text-xs font-semibold text-gray-600 mb-2">Groups</p>
          <div className="text-xs text-gray-600 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">React Developers India</div>
          <div className="text-xs text-gray-600 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">DSA & Placement Prep</div>
        </div>
      </div>
    </div>
  )
}
