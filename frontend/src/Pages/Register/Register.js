import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { RegisterStyle } from "../../Styles/Authentication/RegisterStyle";
import { clearErrors, RegisterInitiate } from "../../redux/Action/ActionAuth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoadingSmall } from "../../Imports/Index";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    reset,
  } = useForm();
  const passwords = useRef({});
  passwords.current = watch("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authRegister, loading } = useSelector((state) => state.auth);
  const handleSubmitForm = async (data) => {
    const { email, name, password } = data;
    dispatch(RegisterInitiate(name, email, password));
  };
  useEffect(() => {
    if (authRegister.success === true) {
      reset();
      toast.success(`${authRegister.msg}`);
      window.location.href = "/login";
      dispatch(clearErrors());
    } else if (authRegister.success === false) {
      toast.error(`${authRegister.msg}`);
    }
  }, [authRegister]);
  return (
    <>
      <RegisterStyle />
      <div className="register">
        <span className="registerTitle">Register</span>
        <form
          className="registerForm"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <label>Username</label>
          <input
            className="registerInput"
            {...register("name", { required: true, maxLength: 20 })}
            type="text"
            placeholder="name"
            name="name"
            id="name"
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.name?.type === "required" && "Mời bạn nhập đầy đủ tên vào!"}
            {errors?.name?.type === "maxLength" &&
              "Tên của bạn không được quá 20 kí tự"}
          </span>
          <label>Email</label>
          <input
            className="registerInput"
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
            className="registerInput"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
              },
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
            })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.password?.type === "required" &&
              "Mời bạn nhập đầy đủ mật khẩu. "}
            {errors?.password?.type === "minLength" &&
              "Mật khẩu của bạn phải 6 kí tự trở lên !!"}
            {errors?.password?.type === "pattern" &&
              "Mật khẩu có kí tự in hoa,số và kí tự đặt biệt !"}
          </span>
          <label>Confirm Password</label>
          <input
            className="registerInput"
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === getValues("password") || "The passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.passwordConfirm?.type === "required" &&
              "Mời bạn nhập lại mật khẩu."}
            {errors.passwordConfirm?.type === "validate" &&
              "Mật khẩu nhập lại không khớp!   "}
          </span>
          {loading ? (
            <span className="registerButton1">
              <button className="registerButton">Submit</button>
            </span>
          ) : (
            <LoadingSmall />
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

export default Register;
