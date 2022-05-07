import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

function App() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
    ? "solid 2px #1059FF"
    : "solid 0px transparent", //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      
      ? "solid 0px transparent"
      : "solid 2px #1059FF",
      //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(false);
  }
  function loginClicked() {
    setRegistartionFormStatus(true);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
      <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      {/* <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">Forgot your password</a>
      </animated.div> */}
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">ADMISSION NUMBER</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="password" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="fullname">Name</label>
      <input type="text" id="fullname" />
      <label for="birth">Date of Birth</label>
      <input type="date" id="dob" />




      <label for="class">Class</label>
      <input type="dropdown" id="cls" />
      <label for="divs">Division</label>
      <input type="text" id="div" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default App;
