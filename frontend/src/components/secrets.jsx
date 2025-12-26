import React from "react"
import { useNavigate } from "react-router-dom"

function Secrets() {
  const navigate = useNavigate()

  return (
    <div className="content">
      <h1>ACCESS GRANTED</h1>
      <p style={{ marginBottom: "20px", fontSize: "18px" }}>You have accessed the secret chamber.</p>
      <p style={{ marginBottom: "30px", opacity: 0.7 }}>The knowledge within is now yours.</p>
      <button onClick={() => navigate("/")}>LOGOUT</button>
    </div>
  )
}

export default Secrets;
