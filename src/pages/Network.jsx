import { useState } from "react"
import { suggestedConnections, users } from "../data/dummyData"
import { notifications } from "../data/dummyData"

const allPeople = [
  ...suggestedConnections,
  { id: 7, name: "Rohit Kumar", headline: "Backend Engineer at Razorpay", avatar: "https://i.pravatar.cc/150?img=51", mutualConnections: 5 },
  { id: 8, name: "Anjali Singh", headline: "HR Manager at Wipro", avatar: "https://i.pravatar.cc/150?img=54", mutualConnections: 2 },
  { id: 9, name: "Deepak Patel", headline: "DevOps Engineer at HCL", avatar: "https://i.pravatar.cc/150?img=60", mutualConnections: 8 },
  { id: 10, name: "Meera Joshi", headline: "Frontend Developer at Paytm", avatar: "https://i.pravatar.cc/150?img=57", mutualConnections: 14 },
]

export default function Network() {
  const [connected, setConnected] = useState([])
  const [dismissed, setDismissed] = useState([])

  function toggleConnect(id) {
    setConnected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function dismiss(id) {
    setDismissed(prev => [...prev, id])
  }

  const visible = allPeople.filter(p => !dismissed.includes(p.id))

  return (
    <div className="max-w-5xl mx-auto px-4 py-5">
      <div className="flex gap-5 items-start">
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="font-semibold text-sm text-gray-800 mb-4">Manage my network</p>
            {[
              { label: "Connections", count: 847, icon: "🤝" },
              { label: "Following", count: 23, icon: "👥" },
              { label: "Groups", count: 5, icon: "👥" },
              { label: "Events", count: 2, icon: "📅" },
              { label: "Pages", count: 12, icon: "📄" },
              { label: "Newsletters", count: 7, icon: "📰" },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-2.5 hover:bg-gray-100 px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2 text-sm">
                  <span>{item.icon}</span>
                  <span className="text-gray-700">{item.label}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">{item.count}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 mt-3">
            <p className="font-semibold text-sm text-gray-800 mb-3">Pending invitations</p>
            <div className="flex items-start gap-3 mb-3">
              <img src="https://i.pravatar.cc/40?img=33" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Arjun Mehta</p>
                <p className="text-xs text-gray-500">SDE-2 at Google</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs border border-[#0a66c2] text-[#0a66c2] px-3 py-1 rounded-full hover:bg-blue-50">Accept</button>
                  <button className="text-xs border border-gray-400 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-100">Ignore</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="text-base font-semibold text-gray-800 mb-4">People you may know</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map(person => (
                <div key={person.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-14 bg-gradient-to-r from-blue-100 to-indigo-100 relative">
                    <button
                      onClick={() => dismiss(person.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl leading-none"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="-mt-8 mb-2">
                      <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-full object-cover border-2 border-white" />
                    </div>
                    <p className="font-semibold text-sm hover:underline cursor-pointer">{person.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5 h-8 overflow-hidden">{person.headline}</p>
                    <p className="text-xs text-gray-400 mt-1">{person.mutualConnections} mutual connections</p>
                    <button
                      onClick={() => toggleConnect(person.id)}
                      className={`w-full mt-3 text-sm font-semibold border rounded-full py-1.5 transition-colors ${connected.includes(person.id) ? "bg-[#0a66c2] text-white border-[#0a66c2]" : "border-gray-400 text-gray-700 hover:bg-gray-100"}`}
                    >
                      {connected.includes(person.id) ? "✓ Connected" : "+ Connect"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 mt-4">
            <h2 className="text-base font-semibold mb-4">Recent activity</h2>
            {notifications.map(n => (
              <div key={n.id} className={`flex items-start gap-3 py-3 ${!n.read ? "bg-blue-50 -mx-2 px-2 rounded-lg" : ""}`}>
                {n.avatar ? (
                  <img src={n.avatar} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">📊</div>
                )}
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{n.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                </div>
                {!n.read && <div className="w-2 h-2 rounded-full bg-[#0a66c2] mt-1.5 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
