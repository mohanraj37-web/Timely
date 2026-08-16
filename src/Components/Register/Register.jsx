import React from "react";
import './Register.css'

const Register = () => {
  return (
    <div className="registerCointainer">
      <form className="register">
        <div className="reg">Register</div>
      <div className="inputname">
        <input type="text" placeholder="Name"></input>
      </div>
      <div className="inputname">
        <input type="text" placeholder="Email"></input>
      </div>
      <div className="inputname">
        <input type="password" placeholder="Password"></input>
      </div>
      <button>Submit</button>


      </form>

    </div>
  )
}

export default Register;
