export const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    headline: "Software Engineer at TCS | React | Node.js | Open to opportunities",
    location: "Bengaluru, Karnataka",
    avatar: "https://i.pravatar.cc/150?img=11",
    cover: "https://picsum.photos/seed/cover1/800/200",
    connections: 847,
    about: "Passionate full-stack developer with 4 years of experience building scalable web applications. I love clean code and great UI.",
    experience: [
      { id: 1, company: "TCS", role: "Software Engineer", duration: "2022 - Present", logo: "https://i.pravatar.cc/40?img=1" },
      { id: 2, company: "Infosys", role: "Junior Developer", duration: "2020 - 2022", logo: "https://i.pravatar.cc/40?img=2" }
    ],
    education: [
      { id: 1, school: "NIT Jabalpur", degree: "B.Tech in Computer Science", year: "2016 - 2020" }
    ],
    skills: ["React.js", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker"]
  },
  {
    id: 2,
    name: "Priya Verma",
    headline: "Product Manager at Flipkart | Building products people love",
    location: "Mumbai, Maharashtra",
    avatar: "https://i.pravatar.cc/150?img=47",
    cover: "https://picsum.photos/seed/cover2/800/200",
    connections: 1243,
    about: "Product thinker with a knack for user research and data-driven decisions. Previously at Swiggy and Ola.",
    experience: [
      { id: 1, company: "Flipkart", role: "Product Manager", duration: "2021 - Present", logo: "https://i.pravatar.cc/40?img=3" }
    ],
    education: [
      { id: 1, school: "IIM Ahmedabad", degree: "MBA", year: "2019 - 2021" }
    ],
    skills: ["Product Strategy", "User Research", "Agile", "SQL", "Figma"]
  }
]

export const currentUser = {
  id: 1,
  name: "Rahul Sharma",
  headline: "Software Engineer at TCS | React | Node.js",
  location: "Bengaluru, Karnataka",
  avatar: "https://i.pravatar.cc/150?img=11",
  cover: "https://picsum.photos/seed/cover1/800/200",
  connections: 847
}

export const posts = [
  {
    id: 1,
    user: {
      name: "Priya Verma",
      headline: "Product Manager at Flipkart",
      avatar: "https://i.pravatar.cc/150?img=47",
      time: "2h"
    },
    content: "Just wrapped up an amazing product sprint! We shipped a feature that reduced checkout time by 40%. The team was incredible — shoutout to every engineer who stayed late debugging edge cases. Proud moment 🚀\n\nReminder: great products come from great collaboration, not just great ideas.",
    image: "https://picsum.photos/seed/post1/600/300",
    likes: 312,
    comments: 47,
    shares: 18,
    liked: false
  },
  {
    id: 2,
    user: {
      name: "Arjun Mehta",
      headline: "SDE-2 at Google | System Design | DSA",
      avatar: "https://i.pravatar.cc/150?img=33",
      time: "5h"
    },
    content: "Hot take: You don't need 500+ DSA problems to crack FAANG interviews. Focus on patterns, not quantity.\n\n✅ Two Pointers\n✅ Sliding Window\n✅ BFS/DFS\n✅ Dynamic Programming patterns\n✅ Heap problems\n\nMaster these and you're 80% there. Quality > Quantity always.",
    image: null,
    likes: 2841,
    comments: 394,
    shares: 671,
    liked: true
  },
  {
    id: 3,
    user: {
      name: "Sneha Iyer",
      headline: "UI/UX Designer at Zomato | Making food look delicious",
      avatar: "https://i.pravatar.cc/150?img=26",
      time: "1d"
    },
    content: "Design lesson I learned the hard way: your users don't care about your animations. They care about getting what they came for, fast.\n\nSpeed > Fancy. Always.\n\nStop adding loaders and start removing them. 🎯",
    image: "https://picsum.photos/seed/post3/600/300",
    likes: 987,
    comments: 123,
    shares: 89,
    liked: false
  },
  {
    id: 4,
    user: {
      name: "Vikram Nair",
      headline: "Startup Founder | Ex-Amazon | Building something new",
      avatar: "https://i.pravatar.cc/150?img=15",
      time: "2d"
    },
    content: "Left my ₹50LPA job 6 months ago to start something. Here's what I've learned so far:\n\n1. Money runs out faster than you think\n2. Your network is everything\n3. The market doesn't care about your vision, it cares about your solution\n4. Hire slowly, fire fast\n5. Sleep is a superpower, not a luxury\n\nStill building. Still learning. No regrets.",
    image: null,
    likes: 4521,
    comments: 682,
    shares: 1203,
    liked: false
  },
  {
    id: 5,
    user: {
      name: "Kavya Reddy",
      headline: "Data Scientist at Microsoft | ML | Python | Making AI work",
      avatar: "https://i.pravatar.cc/150?img=44",
      time: "3d"
    },
    content: "ChatGPT is not going to replace you. But someone who knows how to use ChatGPT will.\n\nI've been using AI tools for 2 years now and my productivity has 3x'd. Not because I rely on it — but because I know where it helps and where it doesn't.\n\nLearn the tools. Keep the thinking.",
    image: "https://picsum.photos/seed/post5/600/300",
    likes: 6782,
    comments: 891,
    shares: 2341,
    liked: false
  }
]

export const suggestedConnections = [
  { id: 3, name: "Arjun Mehta", headline: "SDE-2 at Google", avatar: "https://i.pravatar.cc/150?img=33", mutualConnections: 12 },
  { id: 4, name: "Kavya Reddy", headline: "Data Scientist at Microsoft", avatar: "https://i.pravatar.cc/150?img=44", mutualConnections: 7 },
  { id: 5, name: "Vikram Nair", headline: "Startup Founder | Ex-Amazon", avatar: "https://i.pravatar.cc/150?img=15", mutualConnections: 3 },
  { id: 6, name: "Sneha Iyer", headline: "UI/UX Designer at Zomato", avatar: "https://i.pravatar.cc/150?img=26", mutualConnections: 9 }
]

export const notifications = [
  { id: 1, text: "Priya Verma liked your post", time: "1h", avatar: "https://i.pravatar.cc/40?img=47", read: false },
  { id: 2, text: "Arjun Mehta sent you a connection request", time: "3h", avatar: "https://i.pravatar.cc/40?img=33", read: false },
  { id: 3, text: "Your profile appeared in 23 searches this week", time: "1d", avatar: null, read: true },
  { id: 4, text: "Vikram Nair commented on your post", time: "2d", avatar: "https://i.pravatar.cc/40?img=15", read: true }
]
