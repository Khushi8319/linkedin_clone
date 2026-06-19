# LinkedIn Clone 🔵

A frontend clone of LinkedIn built with React + Vite. Made this as a portfolio/practice project — no backend, no database, just pure frontend with dummy data.

## 🛠 Tech Stack

- **React 18** with Vite (fast dev server)
- **React Router DOM v6** — routing between pages
- **Tailwind CSS** — utility-first styling
- **React Icons** — icon library
- **Context API** — global state for auth/user

## 📁 Project Structure

```
linkedin-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── PostCard.jsx        # Individual feed post
│   │   ├── CreatePost.jsx      # Post creation modal
│   │   ├── LeftSidebar.jsx     # Profile summary sidebar
│   │   └── RightSidebar.jsx    # Suggested connections sidebar
│   ├── context/
│   │   └── AuthContext.jsx     # Login state + user context
│   ├── data/
│   │   └── dummyData.js        # Fake users, posts, connections
│   ├── pages/
│   │   ├── Login.jsx           # Login page
│   │   ├── Home.jsx            # Feed page
│   │   ├── Profile.jsx         # User profile page
│   │   └── Network.jsx         # My Network page
│   ├── App.jsx                 # Routes setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## ✨ Features

- **Login Page** — any email + password (6+ chars) works
- **Protected Routes** — can't access feed without login
- **Home Feed** — posts with like, comment, repost actions
- **Create Post** — write and post to your feed
- **Profile Page** — experience, education, skills, edit bio
- **My Network** — connect/dismiss people, pending invites
- **Navbar** — search bar, nav icons, profile dropdown, logout
- **Responsive** — works on mobile, tablet, desktop

## 🚀 How to Run Locally

Make sure you have **Node.js 18+** installed.

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/linkedin-clone.git

# 2. Go into the folder
cd linkedin-clone

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Login credentials:** any email + any password (minimum 6 characters)

## 🏗 Build for Production

```bash
npm run build
```

This creates a `dist/` folder. You can preview it with:

```bash
npm run preview
```

## 🌐 Deploy on Netlify (Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

> The `netlify.toml` file is already included so routing works correctly on refresh.

## 🌐 Deploy on Vercel (Alternative)

```bash
npm install -g vercel
vercel
```

Follow the prompts — it auto-detects Vite config.

## 📸 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | Sign in page |
| Home | `/` | Main feed with posts |
| Profile | `/profile` | Your profile page |
| Network | `/network` | People you may know |

## 🧠 Things I Learned / Practiced

- React Router v6 with protected routes using `<Navigate>`
- Context API for global state without Redux
- Tailwind CSS utility classes for rapid UI
- Component-based architecture
- Conditional rendering and state management
- useState, useContext hooks

## ⚠️ Known Limitations

- No real backend — all data is hardcoded in `dummyData.js`
- No persistence — refreshing clears any new posts/likes
- No real authentication — any email/password combo works
- Images are from public APIs (pravatar.cc, picsum.photos)

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

Made with ❤️ | [LinkedIn](https://linkedin.com) clone for learning purposes
