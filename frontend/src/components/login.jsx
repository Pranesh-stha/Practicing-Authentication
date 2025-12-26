import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const navigate = useNavigate();
  const [cred, setCred] = React.useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = React.useState("")

  function handleChange(event) {
    const { name, value } = event.target;
    setCred((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleClick(){
    console.log(cred);
    const response = await axios.post("http://localhost:5000/login", cred)
    if(response.data.state === true){
      navigate("/secrets");
      console.log(response.data.msg)
    } else{
      setStatus(response.data.msg)
    }

    
  }

  return (
    <div className="content">
      <h2>LOGIN PANEL</h2>
      <form>
        <input
          type="text"
          placeholder="USERNAME"
          name="username"
          value={cred.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          name="password"
          value={cred.password}
          onChange={handleChange}
        />

        <p>{status}</p>
        <div className="button-group">
          <button type="button" onClick={handleClick}>
            LOGIN
          </button>
          <button type="button" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
