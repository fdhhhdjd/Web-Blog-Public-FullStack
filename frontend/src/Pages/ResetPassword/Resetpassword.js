import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, ResetPassInitiate } from "../../redux/Action/ActionAuth";
import { RegisterStyle } from "../../Styles/Authentication/RegisterStyle";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
const initialState = {
  password: "",
  confirmPassword: "",
};
const Resetpassword = () => {
  const [state, setState] = useState(initialState);
  const { resetPassword } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { password, confirmPassword } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(ResetPassInitiate(token, password, confirmPassword));
  };
  useEffect(() => {
    if (resetPassword.success === true) {
      swal(`${resetPassword.msg}`, {
        icon: "success",
      });
      dispatch(clearErrors());
    } else if (resetPassword.success === false) {
      swal(`${resetPassword.msg}`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [resetPassword]);
  return (
    <>
      <RegisterStyle />

      <div className="register">
        <span className="registerTitle">Reset</span>
        {resetPassword && resetPassword.success === true ? (
          <button className="registerButton" onClick={() => navigate("/login")}>
            Thank Please Login Account 🥰
          </button>
        ) : (
          <form className="registerForm" onSubmit={handleReset}>
            <label>Password</label>
            <input
              className="registerInput"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChangeInput}
            />
            <br />
            <label>Confirm Password</label>
            <input
              className="registerInput"
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeInput}
            />

            <button className="registerButton">Submit</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Resetpassword;
