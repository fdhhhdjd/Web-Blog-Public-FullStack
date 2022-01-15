import React, { useState, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBarProfile, MetaData, TopBar } from "../../Imports/Index";
import {
  ChangeAdminInitiate,
  clearErrors,
} from "../../redux/Action/ActionAuth";
import { SettingStyle } from "../../Styles/SettingStyle/SettingStyle";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const initialState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const [state, setState] = useState(initialState);
  const passwordEl = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changePassword, refreshTokens } = useSelector((state) => state.auth);
  const { password, confirmPassword, oldPassword } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ChangeAdminInitiate(refreshTokens, { ...state }));
  };
  useEffect(() => {
    if (changePassword.success === true) {
      swal(`${changePassword.msg}`, {
        icon: "success",
      });
      setState({ password: "", confirmPassword: "", oldPassword: "" });
      dispatch(clearErrors());
    } else if (changePassword.success === false) {
      swal(`${changePassword.msg}`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [changePassword]);
  return (
    <>
      {/* <TopBar /> */}
      <SettingStyle />
      <MetaData title="ChangePass-blog" />
      <div className="settings1">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Change Password</span>
            <button
              className="settingsTitleDelete settingsSubmitButton1"
              onClick={() => navigate("/settings")}
            >
              Back Profile
            </button>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>ChangePassWord</label>
            <br />
            <label>Old PassWord</label>
            <input
              type="password"
              placeholder="oldPassword"
              name="oldPassword"
              value={oldPassword}
              ref={passwordEl}
              onChange={handleChangeInput}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeInput}
            />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        {/* <SideBarProfile /> */}
      </div>
    </>
  );
};

export default ChangePassword;
