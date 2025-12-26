import React from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  return (
    <div className="content">
      <h2>REGISTER PANEL</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="PASSWORD" />
        <div className="button-group">
          <button type="button" onClick={() => navigate("/secrets")}>
            REGISTER
          </button>
          <button type="button" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register;
