import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="parent">
        <div className="child">
          <div>
          <img style="height: 100px;
          width: 100%;
          text-align: center;" src="data:image/png;base64,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"/>
          <h1>Create Account</h1>
          </div>
          <div className="form">
             
              <input className="name" placeholder="enter your name" type="text" required/>
              <br></br>
              <input className="number" placeholder="Enter Your Mobile Number" type="number"/>
              <br></br>
              <input className="email" placeholder="Enter Your Email className" type="email"/>
              <br></br>
              <input className="password" placeholder="Enter Your Password"  type="email"/>
              <br></br>
              <button className="submit">Continue</button>
          </div>
          <div>
<h2>Already Have an account <a href="#">signin</a></h2>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Signup