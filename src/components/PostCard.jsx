import { useState } from "react"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { BiComment, BiShare, BiSend } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"

export default function PostCard({ post, onLike }) {
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [expanded, setExpanded] = useState(false)

  const isLong = post.content.length > 200

  function submitComment() {
    if (!comment.trim()) return
    setComments(prev => [...prev, { id: Date.now(), text: comment }])
    setComment("")
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-3 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-sm hover:underline cursor-pointer">{post.user.name}</p>
              <p className="text-xs text-gray-500 max-w-xs">{post.user.headline}</p>
              <p className="text-xs text-gray-400 mt-0.5">{post.user.time} · 🌐</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[#0a66c2] text-sm font-semibold hover:bg-blue-50 px-3 py-1 rounded-full transition-colors">+ Follow</button>
            <BsThreeDots className="text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-800 leading-relaxed whitespace-pre-line">
          {isLong && !expanded
            ? <>{post.content.slice(0, 200)}... <button onClick={() => setExpanded(true)} className="text-gray-500 font-semibold hover:underline">see more</button></>
            : post.content
          }
        </div>
      </div>

      {post.image && (
        <img src={post.image} alt="post" className="w-full object-cover max-h-80" />
      )}

      <div className="px-4 py-2">
        <div className="flex items-center justify-between text-xs text-gray-500 pb-2 border-b border-gray-200">
          <span className="flex items-center gap-1 hover:underline cursor-pointer">
            <span className="bg-[#0a66c2] rounded-full p-0.5 inline-flex">
              <AiFillLike size={10} color="white" />
            </span>
            {post.likes}
          </span>
          <span className="hover:underline cursor-pointer">{post.comments} comments · {post.shares} reposts</span>
        </div>

        <div className="flex items-center justify-around pt-1">
          <button
            onClick={onLike}
            className={`flex items-center gap-1.5 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-semibold ${post.liked ? "text-[#0a66c2]" : "text-gray-500"}`}
          >
            {post.liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
            <span className="hidden sm:inline">Like</span>
          </button>
          <button
            onClick={() => setShowCommentBox(!showCommentBox)}
            className="flex items-center gap-1.5 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-500"
          >
            <BiComment size={20} />
            <span className="hidden sm:inline">Comment</span>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-500">
            <BiShare size={20} />
            <span className="hidden sm:inline">Repost</span>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-500">
            <BiSend size={20} />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>

        {showCommentBox && (
          <div className="mt-3 flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <img src="https://i.pravatar.cc/40?img=11" alt="me" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex items-center border border-gray-300 rounded-full overflow-hidden px-3">
              <input
                value={comment}
                onChange={e => setComment(e.target.value)}
                onKeyDown={e => e.key === "Enter" && submitComment()}
                placeholder="Add a comment…"
                className="flex-1 text-sm py-2 outline-none"
              />
              <button onClick={submitComment} className="text-[#0a66c2] ml-2">
                <BiSend size={18} />
              </button>
            </div>
          </div>
        )}

        {comments.map(c => (
          <div key={c.id} className="mt-2 ml-10 text-sm bg-gray-100 rounded-2xl px-3 py-2">
            <span className="font-semibold text-xs">You: </span>{c.text}
          </div>
        ))}
      </div>
    </div>
  )
}
