import React from "react"
import { Routes, Route } from "react-router-dom"
import LetterGlitch from "./LetterGlitch.jsx"
import Home from "./home.jsx"
import Login from "./login.jsx"
import Register from "./register.jsx"
import Secrets from "./secrets.jsx"

function App() {
  return (
    <div className="container">
      <LetterGlitch glitchSpeed={100} centerVignette={true} outerVignette={true} smooth={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/secrets" element={<Secrets />} />
      </Routes>
    </div>
  )
}

export default App
