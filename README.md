# 🚀 QuickMeet

QuickMeet is a **React-based video meeting application** using **ZegoCloud UIKit Prebuilt**, enabling users to create or join virtual meeting rooms seamlessly.  
It’s built with **Vite** for fast development and optimized build performance.

---

## ✨ Features

- 🎥 Create or join meeting rooms  
- 🔊 Audio and video toggle  
- 🖥️ Screen sharing  
- 💬 Text chat  
- 👥 Max 50 participants per room  

---

## 🛠 Tech Stack

- **React**  
- **React Router**  
- **ZegoCloud UIKit Prebuilt**  
- **Vite** (build tool)  
- **ESLint** for code quality  

---

## ⚡ Vite + React Template Info

This project uses a **minimal React + Vite setup** with HMR (Hot Module Replacement) and ESLint rules for cleaner code.  

### 🔌 Available Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – Uses **Babel** (or **oxc** with Rollup-Vite) for fast refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) – Uses **SWC** for fast refresh and faster builds  

### 🧩 React Compiler

The React Compiler is **not enabled by default** for performance reasons.  
To enable it, see [React Compiler Installation](https://react.dev/learn/react-compiler/installation).  

### 📝 ESLint Configuration

For production apps, consider using **TypeScript** with type-aware lint rules via [`typescript-eslint`](https://typescript-eslint.io).  
Check out the [Vite React TypeScript Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for guidance.

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed  
- A ZegoCloud account with `appID` and `serverSecret`  

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RautDayanand/QuickMeet.git
cd QuickMeet

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a `.env` file in the root directory and add:
# REACT_APP_ZEGO_APP_ID=<your_app_id>
# REACT_APP_ZEGO_SERVER_SECRET=<your_server_secret>

# 4. Start the development server
npm run dev

# ⚠️ Important: Do NOT expose your serverSecret publicly.
# Generate Zego tokens on a backend server in production.

# Your app should now be running at http://localhost:5173
