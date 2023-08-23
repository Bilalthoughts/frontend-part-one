import React, { FormEvent, useContext, useState } from "react";
import { FlexChild1, FlexChild2, ParentFlex, StyledButton } from "./style";
import banner from "../../assets/signIn.png";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import divider from "../../assets/divider.png";
import { TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../utils/auth/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/auth";




const SignIn = () => {

  const {authenticated, setAuthenticated} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthenticated(true)
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = password.length >= 6;

  return (
    <>
      <ParentFlex>
        <FlexChild1>
          <img src={banner} alt="banner" />
        </FlexChild1>
        <FlexChild2>
          <h1>Sign In Using</h1>
          <button>
            {" "}
            <img src={google} alt="google" /> Sign In With Google
          </button>
          <button>
            <img src={fb} alt="fb" /> Sign In With Google
          </button>
          <br />
          <span>
            <img src={divider} alt="divider" />
          </span>
          <br />

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input value={email} onChange={handleEmailChange} required />
            {email && !isEmailValid && (
              <p className="validation-message">Invalid email format</p>
            )}

            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "-14px",
              }}
            >
              Password{" "}
              <p
                onClick={handleShowPasswordToggle}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </p>
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            {password && !isPasswordValid && (
              <p className="validation-message">
                Password should be at least 6 characters
              </p>
            )}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "-15px",
                fontSize: 'medium',
                color:'#FFBA3F'
              }}
            >
              <p></p> <p>Forget your password</p>
            </label>

            <StyledButton
              type="submit"
              onClick={(e) => handleLogin(e)}
              disabled={!isEmailValid || !isPasswordValid}
              style={{backgroundColor:'#FFBA3F'}}
            >
              Log In
            </StyledButton>
            <p>Don’t have an account? <b>Sign up</b> </p>
          </form>
        </FlexChild2>
      </ParentFlex>
    </>
  );
};

export default SignIn;
