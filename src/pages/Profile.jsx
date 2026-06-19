import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { users } from "../data/dummyData"
import { HiPencil } from "react-icons/hi"
import { BsPlus, BsGlobe } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"

export default function Profile() {
  const { user } = useAuth()
  const profileData = users.find(u => u.id === user?.id) || users[0]

  const [showEditBio, setShowEditBio] = useState(false)
  const [bio, setBio] = useState(profileData.about)
  const [savedBio, setSavedBio] = useState(profileData.about)
  const [openToWork, setOpenToWork] = useState(false)

  return (
    <div className="max-w-3xl mx-auto px-4 py-5">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
        <div className="relative">
          <img src={profileData.cover} alt="cover" className="w-full h-36 object-cover" />
          <div className="absolute -bottom-16 left-6">
            <div className="relative">
              <img
                src={profileData.avatar}
                alt="profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              {openToWork && (
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">#OPEN TO WORK</span>
                </div>
              )}
            </div>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
              <HiPencil className="inline mr-1" />Edit cover
            </button>
          </div>
        </div>

        <div className="pt-20 pb-4 px-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{profileData.name}</h1>
              <p className="text-gray-700 mt-0.5">{profileData.headline}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MdLocationOn size={16} />
                <span>{profileData.location}</span>
                <span className="mx-1">·</span>
                <span className="text-[#0a66c2] font-semibold hover:underline cursor-pointer">{profileData.connections} connections</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={profileData.experience[0]?.logo} alt="company" className="w-12 h-12 rounded object-cover" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <button className="bg-[#0a66c2] text-white text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-[#004182] transition-colors">
              Open to
            </button>
            <button className="border border-[#0a66c2] text-[#0a66c2] text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
              Add profile section
            </button>
            <button className="border border-gray-400 text-gray-700 text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
              More
            </button>
          </div>

          <div className="mt-4 p-3 bg-[#f3f9ff] border border-blue-100 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-800">Open to work</p>
                <p className="text-xs text-gray-500">React Developer, Full Stack, SDE roles</p>
              </div>
              <button
                onClick={() => setOpenToWork(!openToWork)}
                className={`text-xs font-semibold border rounded-full px-3 py-1 transition-colors ${openToWork ? "bg-green-600 text-white border-green-600" : "border-green-600 text-green-700 hover:bg-green-50"}`}
              >
                {openToWork ? "Active" : "Show recruiters"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">About</h2>
          <button onClick={() => setShowEditBio(!showEditBio)} className="text-gray-500 hover:text-black">
            <HiPencil size={20} />
          </button>
        </div>
        {showEditBio ? (
          <div>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none h-32 outline-none focus:border-[#0a66c2]"
            />
            <div className="flex gap-2 mt-2 justify-end">
              <button onClick={() => { setShowEditBio(false); setBio(savedBio) }} className="text-sm border border-gray-400 px-4 py-1.5 rounded-full hover:bg-gray-100">Cancel</button>
              <button onClick={() => { setSavedBio(bio); setShowEditBio(false) }} className="text-sm bg-[#0a66c2] text-white px-4 py-1.5 rounded-full hover:bg-[#004182]">Save</button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-700 leading-relaxed">{savedBio}</p>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="flex gap-2">
            <BsPlus size={22} className="text-gray-500 hover:text-black cursor-pointer" />
            <HiPencil size={18} className="text-gray-500 hover:text-black cursor-pointer" />
          </div>
        </div>
        {profileData.experience.map((exp, i) => (
          <div key={exp.id} className={`flex gap-4 ${i !== 0 ? "mt-5 pt-5 border-t border-gray-100" : ""}`}>
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded object-cover flex-shrink-0 border border-gray-200" />
            <div>
              <p className="font-semibold text-sm">{exp.role}</p>
              <p className="text-sm text-gray-600">{exp.company} · Full-time</p>
              <p className="text-xs text-gray-400 mt-0.5">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="flex gap-2">
            <BsPlus size={22} className="text-gray-500 hover:text-black cursor-pointer" />
            <HiPencil size={18} className="text-gray-500 hover:text-black cursor-pointer" />
          </div>
        </div>
        {profileData.education.map(edu => (
          <div key={edu.id} className="flex gap-4">
            <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 text-xl">🎓</div>
            <div>
              <p className="font-semibold text-sm">{edu.school}</p>
              <p className="text-sm text-gray-600">{edu.degree}</p>
              <p className="text-xs text-gray-400 mt-0.5">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="flex gap-2">
            <BsPlus size={22} className="text-gray-500 hover:text-black cursor-pointer" />
            <HiPencil size={18} className="text-gray-500 hover:text-black cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map(skill => (
            <span key={skill} className="bg-[#eef3f8] text-[#0a66c2] text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
