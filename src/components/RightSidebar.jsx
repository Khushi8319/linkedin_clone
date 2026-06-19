import { useState } from "react"
import { suggestedConnections } from "../data/dummyData"

export default function RightSidebar() {
  const [connected, setConnected] = useState([])

  function toggleConnect(id) {
    setConnected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-800">People you may know</p>
        </div>
        {suggestedConnections.map(person => (
          <div key={person.id} className="flex items-start gap-3 mb-4">
            <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate hover:underline cursor-pointer">{person.name}</p>
              <p className="text-xs text-gray-500 truncate">{person.headline}</p>
              <p className="text-xs text-gray-400 mt-0.5">{person.mutualConnections} mutual connections</p>
              <button
                onClick={() => toggleConnect(person.id)}
                className={`mt-2 text-xs font-semibold border rounded-full px-4 py-1 transition-colors ${connected.includes(person.id) ? "bg-[#0a66c2] text-white border-[#0a66c2]" : "border-gray-400 text-gray-700 hover:bg-gray-100"}`}
              >
                {connected.includes(person.id) ? "✓ Connected" : "+ Connect"}
              </button>
            </div>
          </div>
        ))}
        <button className="text-sm text-gray-500 hover:text-black font-semibold w-full text-center mt-1 hover:bg-gray-100 py-2 rounded transition-colors">
          Show all →
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm font-semibold text-gray-800 mb-3">LinkedIn News</p>
        {[
          { title: "AI boom drives record IT hiring", time: "2h ago · 3,241 readers" },
          { title: "Remote work debate continues in 2025", time: "5h ago · 8,102 readers" },
          { title: "India startup ecosystem reaches $300B", time: "1d ago · 12,844 readers" },
          { title: "Top skills employers want in 2025", time: "2d ago · 21,331 readers" },
        ].map((news, i) => (
          <div key={i} className="mb-3 cursor-pointer group">
            <p className="text-xs font-semibold text-gray-800 group-hover:underline leading-snug">{news.title}</p>
            <p className="text-xs text-gray-400 mt-0.5">{news.time}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-center mt-4 px-2">
        Made with ❤️ · LinkedIn Clone
      </p>
    </div>
  )
}
