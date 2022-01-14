import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { LoadingSmall } from "../../Imports/Index";
import {
  clearErrors,
  ForgetAdminInitiate,
} from "../../redux/Action/ActionAuth";
import { RegisterStyle } from "../../Styles/Authentication/RegisterStyle";
const initialState = {
  email: "",
};
const Forget = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { forgetPassword, loading } = useSelector((state) => state.auth);
  const emailEL = useRef();
  const { email } = state;
  const handleForget = (e) => {
    e.preventDefault();
    dispatch(ForgetAdminInitiate(email));
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    emailEL.current.focus();
  }, []);
  useEffect(() => {
    if (forgetPassword.success === true) {
      swal(`${forgetPassword.msg}`, {
        icon: "success",
      });
      dispatch(clearErrors());
    } else if (forgetPassword.success === false) {
      swal(`${forgetPassword.msg}`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [forgetPassword]);
  return (
    <>
      <RegisterStyle />
      <div className="register">
        <span className="registerTitle">Forget</span>
        <form className="registerForm" onSubmit={handleForget}>
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
            name="email"
            value={email}
            ref={emailEL}
            onChange={handleChangeInput}
          />

          {loading ? (
            <LoadingSmall />
          ) : (
            <button className="registerButton">Submit</button>
          )}
        </form>
        <button
          className="registerLoginButton"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Forget;
