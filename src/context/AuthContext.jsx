import { createContext, useContext, useState } from "react"
import { currentUser } from "../data/dummyData"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  function login(email, password) {
    if (email && password.length >= 6) {
      setUser(currentUser)
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  function addPost(content) {
    const newPost = {
      id: Date.now(),
      user: {
        name: user.name,
        headline: user.headline,
        avatar: user.avatar,
        time: "Just now"
      },
      content,
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false
    }
    setPosts(prev => [newPost, ...prev])
  }

  function toggleLike(postId, allPosts, setAllPosts) {
    setAllPosts(prev =>
      prev.map(p =>
        p.id === postId
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    )
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, addPost, posts, toggleLike }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
