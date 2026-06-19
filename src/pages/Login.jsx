import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)
    setTimeout(() => {
      const success = login(email, password)
      if (success) {
        navigate("/")
      } else {
        setError("Password must be at least 6 characters.")
      }
      setLoading(false)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-[#f3f2ef] flex flex-col">
      <header className="bg-white px-6 py-3 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="bg-[#0a66c2] rounded p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-9 h-9">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-gray-700 hover:text-[#0a66c2] transition-colors">Join now</button>
            <button
              onClick={() => { setEmail("demo@gmail.com"); setPassword("demo123") }}
              className="text-sm font-semibold border border-[#0a66c2] text-[#0a66c2] px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Sign in</h1>
            <p className="text-sm text-gray-500 mb-6">Stay updated on your professional world</p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-3 py-2 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Email or phone</label>
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-400 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-400 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]"
                />
                <p className="text-xs text-[#0a66c2] font-semibold mt-1 hover:underline cursor-pointer">Forgot password?</p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0a66c2] text-white font-semibold py-3 rounded-full hover:bg-[#004182] transition-colors disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <button
              onClick={() => { setEmail("demo@gmail.com"); setPassword("demo123"); }}
              className="w-full border border-gray-400 text-gray-700 text-sm font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <img src="https://www.google.com/favicon.ico" alt="google" className="w-4 h-4" />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              New to LinkedIn?{" "}
              <span className="text-[#0a66c2] font-semibold hover:underline cursor-pointer">Join now</span>
            </p>

            <p className="text-center text-xs text-gray-400 mt-4">
              Hint: Use any email + any password (6+ chars)
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
