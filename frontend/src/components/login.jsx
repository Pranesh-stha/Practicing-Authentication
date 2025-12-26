import React from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  return (
    <div className="content">
      <h2>LOGIN PANEL</h2>
      <form>
        <input type="text" placeholder="USERNAME" />
        <input type="password" placeholder="PASSWORD" />
        <div className="button-group">
          <button type="button" onClick={() => navigate("/secrets")}>
            LOGIN
          </button>
          <button type="button" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
