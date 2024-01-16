import React from "react";

const Login = () => {



  return(
  <div>
    <div className="registration">
      <h1>Registration</h1>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="text" />
      <button>Register</button>
    </div>
    <div className="login">
      <h1>Log in</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  </div>
)

}

export default Login; 