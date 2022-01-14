import React, { useState, useRef, useEffect, useContext } from "react";
import { LoginStyle } from "../../Styles/Authentication/LoginStyle";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoadingSmall } from "../../Imports/Index";
import {
  clearErrors,
  loginGoogleInitiate,
  loginInitiate,
} from "../../redux/Action/ActionAuth";
import { toast } from "react-toastify";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const passwords = useRef({});
  passwords.current = watch("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, loading } = useSelector((state) => state.auth);
  const Auth = auth;
  const HandleGoogle = (response) => {
    dispatch(loginGoogleInitiate(response));
  };
  const handleSubmitForm = async (data) => {
    const { email, password } = data;
    dispatch(loginInitiate(email, password));
  };
  useEffect(() => {
    if (auth.success === true) {
      window.location.href = "/";
      localStorage.setItem("firstLogin", true);
      dispatch(clearErrors());
    }
    if (auth.success === false) {
      toast.error(`${auth.msg}`);
      dispatch(clearErrors());
    }
  }, [Auth]);

  return (
    <>
      <LoginStyle />
      <div className="login">
        <span className="loginTitle">Login</span>
        <br />
        <GoogleLogin
          clientId="1083950083676-fr9m6jsgig4aalf6mj81t8rlgl9v45bd.apps.googleusercontent.com"
          buttonText="Login Google +"
          // render={(renderProps) => (
          //   <div className="loginGoogleFb">
          //     <div className="login_google">
          //       <button
          //         onClick={renderProps.onClick}
          //         style={{
          //           width: 50,
          //           height: 50,
          //         }}
          //       >
          //         Login Google +
          //       </button>
          //     </div>
          //   </div>
          // )}
          onSuccess={HandleGoogle}
          onFailure={HandleGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <form className="loginForm" onSubmit={handleSubmit(handleSubmitForm)}>
          <label>Email</label>
          <input
            className="loginInput"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
            {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
          </span>
          <label>Password</label>
          <input
            className="loginInput"
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.password?.type === "required" &&
              "Mời bạn nhập đầy đủ mật khẩu. "}
          </span>
          {loading ? (
            <button className="loginButton">Submit</button>
          ) : (
            <span className="loginButton1">
              <LoadingSmall />
            </span>
          )}

          <span
            className="loginButton"
            onClick={() => navigate("/forget")}
            style={{ backgroundColor: "gray" }}
          >
            Forget
          </span>
        </form>

        <button
          className="loginRegisterButton"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default Login;
