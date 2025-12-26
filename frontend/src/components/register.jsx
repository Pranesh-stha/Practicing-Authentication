import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Register() {
  const navigate = useNavigate()
  const [newCred, setNewCred] = React.useState({
    newUser: "",
    newPw: ""
  })
  const [status, setStatus] = React.useState("")
  

  function handleChange(event){
    const {name, value} = event.target;
    setNewCred((prev) => {
      return{
        ...prev,
        [name]:value
      }
    })
  }

  async function handleClick(){
    
    console.log(newCred);

    const feedback = await axios.post("http://localhost:5000/register", newCred)
    if(feedback.data.state === true){
      navigate("/login");
      console.log(feedback.data.message)
    } else{
      setStatus(feedback.data.message)
    }

    
  }

  return (
    <div className="content">
      <h2>REGISTER PANEL</h2>
      <form>
        <input type="text" placeholder="Username" name="newUser" value={newCred.newUser} onChange={handleChange}/>
        <input type="password" placeholder="PASSWORD" name="newPw" value={newCred.newPw} onChange={handleChange}/>
        <p>{status}</p>
        <div className="button-group">
          <button type="button" onClick={handleClick}>
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
