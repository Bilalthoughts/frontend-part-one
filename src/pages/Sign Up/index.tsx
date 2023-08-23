import React, { useState } from "react";
import { FlexChild1, FlexChild2, ParentFlex, StyledButton } from "./style";
import banner from "../../assets/signIn.png";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import divider from "../../assets/divider.png";
import buy from "../../assets/Get.png";
import sell from "../../assets/Shop.png";
import { TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import { auth } from "../../utils/firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";




const SignUp = () => {

  const navigate = useNavigate()
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

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

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
          <h1>Sign Up  </h1>
          <p>Sign up for free to buy or sell on our website</p>
          
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
            <p>Register as</p>
              <span style={{display:'flex', gap:'10px', marginTop:'-15px'}}><button className="shadow "><img src={buy} alt="buy" />  Buyer</button>
              <button className="custombutton"><img style={{color: 'white'}} src={sell} alt="sell" /> Seller</button></span>

              <p>   <Checkbox
        
        
        sx={{
          color: '#FFBA3F',
          '&.Mui-checked': {
            color: '#FFBA3F',
          },
        }}
      />  Agree to our Terms of use and Privacy Policy </p>
            <StyledButton
              type="submit"
              disabled={!isEmailValid || !isPasswordValid}
              style={{backgroundColor:'#FFBA3F'}}
            >
              Sign Up
            </StyledButton>
            <p>Already have an account? <b>Sign In</b> </p>
          </form>
        </FlexChild2>
      </ParentFlex>
    </>
  );
};

export default SignUp;
