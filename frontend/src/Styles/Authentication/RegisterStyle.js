import { createGlobalStyle } from "styled-components";

export const RegisterStyle = createGlobalStyle`
.register {
    height: calc(106.5vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  .registerTitle {
    font-size: 50px;
  }
  
  .registerForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .registerForm > label {
    margin: 10px 0;
  }
  
  .registerInput {
    padding: 10px;
    width:18rem;
    background-color: white;
    border: none;
    border-radius: 10px;
  }
  
  .registerInput:focus {
    outline: none;
  }
  
  .registerButton {
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }
  .registerButton1{
    margin-top: 20px;
    padding: 10px;
    text-align: center;
  }
  
  .registerLoginButton {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
  }
`;
