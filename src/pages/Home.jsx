import { useState } from "react"
import { posts as initialPosts } from "../data/dummyData"
import { useAuth } from "../context/AuthContext"
import PostCard from "../components/PostCard"
import CreatePost from "../components/CreatePost"
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"

export default function Home() {
  const { addPost, posts: newPosts } = useAuth()
  const [feedPosts, setFeedPosts] = useState(initialPosts)

  const allPosts = [...newPosts, ...feedPosts]

  function handleLike(id) {
    setFeedPosts(prev =>
      prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p)
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-5">
      <div className="flex gap-5 items-start">
        <div className="hidden lg:block w-64 flex-shrink-0 sticky top-20">
          <LeftSidebar />
        </div>

        <div className="flex-1 min-w-0">
          <CreatePost onPost={addPost} />
          {allPosts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onLike={() => handleLike(post.id)}
            />
          ))}
        </div>

        <div className="hidden xl:block w-72 flex-shrink-0 sticky top-20">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}
