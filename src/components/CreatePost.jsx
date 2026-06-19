import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { BsImage, BsCalendarEvent } from "react-icons/bs"
import { HiOutlineDocumentText } from "react-icons/hi"
import { MdOutlineVideoLibrary } from "react-icons/md"

export default function CreatePost({ onPost }) {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("")

  function handlePost() {
    if (!text.trim()) return
    onPost(text)
    setText("")
    setShowModal(false)
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
        <div className="flex items-center gap-3">
          <img src={user?.avatar} alt="me" className="w-12 h-12 rounded-full object-cover border border-gray-300" />
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 text-left text-sm text-gray-500 border border-gray-300 rounded-full px-4 py-3 hover:bg-gray-100 transition-colors"
          >
            Start a post, try writing with AI
          </button>
        </div>
        <div className="flex items-center justify-around mt-3 pt-2">
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 px-3 py-2 rounded transition-colors">
            <BsImage className="text-[#378fe9]" size={20} />
            <span className="hidden sm:inline">Media</span>
          </button>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 px-3 py-2 rounded transition-colors">
            <BsCalendarEvent className="text-[#c37d16]" size={18} />
            <span className="hidden sm:inline">Event</span>
          </button>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 px-3 py-2 rounded transition-colors">
            <HiOutlineDocumentText className="text-[#e06847]" size={20} />
            <span className="hidden sm:inline">Write article</span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <img src={user?.avatar} alt="me" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm">{user?.name}</p>
                  <button className="text-xs border border-gray-400 rounded-full px-2 py-0.5 flex items-center gap-1 hover:bg-gray-100">🌐 Anyone</button>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-black text-2xl leading-none">&times;</button>
            </div>
            <div className="p-4">
              <textarea
                autoFocus
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="What do you want to talk about?"
                className="w-full h-40 text-sm resize-none outline-none placeholder-gray-400"
              />
            </div>
            <div className="flex items-center justify-between p-4 border-t">
              <div className="flex items-center gap-3 text-gray-500">
                <BsImage size={22} className="cursor-pointer hover:text-[#0a66c2]" />
                <MdOutlineVideoLibrary size={22} className="cursor-pointer hover:text-[#0a66c2]" />
                <HiOutlineDocumentText size={22} className="cursor-pointer hover:text-[#0a66c2]" />
              </div>
              <button
                onClick={handlePost}
                disabled={!text.trim()}
                className="bg-[#0a66c2] disabled:opacity-40 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#004182] transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
