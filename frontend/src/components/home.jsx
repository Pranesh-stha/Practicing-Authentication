import React from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="content">
      <h1>WELCOME TO THE PORTAL</h1>
      <p style={{ marginBottom: "30px" }}>Enter your credentials to access the secrets</p>
      <div className="button-group">
        <button onClick={() => navigate("/login")}>LOGIN</button>
        <button onClick={() => navigate("/register")}>REGISTER</button>
      </div>
    </div>
  )
}

export default Home;
