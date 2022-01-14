import React, { useState, useContext, useEffect, useRef } from "react";
import {
  SideBarProfile,
  MetaData,
  TopBar,
  LoadingSmall,
} from "../../Imports/Index";
import { SettingStyle } from "../../Styles/SettingStyle/SettingStyle";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import swal from "sweetalert";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
};
const Setting = () => {
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const state = useContext(GlobalState);
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  useEffect(() => {
    if (profile) {
      setUser({ ...profile });
      if (profile.url === "") {
        setImages(profile.image.url);
      } else {
        setImages(profile.image);
      }
    }
  }, [profile]);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `${refreshTokens}`,
        },
      });

      setLoading(false);
      setImages(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images)
      return swal("No Image Upload 😅.", {
        icon: "error",
      });
    try {
      await axios.patch(
        `/api/auth/profile/${user._id}`,
        { ...user, image: images },
        {
          headers: {
            Authorization: `${refreshTokens}`,
          },
        }
      );
      swal("Edit profile Successfully", {
        icon: "success",
      });
      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: {
            Authorization: ` ${refreshTokens}`,
          },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <TopBar />
      <SettingStyle />
      <MetaData title={`Profile-${profile.name}`} />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <button
              className="settingsTitleDelete settingsSubmitButton1"
              onClick={() => navigate("/changPassword")}
            >
              Change PassWord
            </button>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              {loading ? (
                <LoadingSmall />
              ) : (
                <img
                  src={images ? images.url : images}
                  alt=""
                  style={styleUpload}
                />
              )}

              {images ? (
                <>
                  <label htmlFor="fileInput" style={styleUpload}>
                    <i
                      className="settingsPPIcon fa fa-times"
                      onClick={handleDestroy}
                    ></i>
                  </label>
                </>
              ) : (
                <>
                  <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                    onChange={handleUpload}
                  />
                </>
              )}
            </div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Safak"
              name="name"
              value={user.name}
              onChange={handleChangeInput}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="safak@gmail.com"
              name="email"
              value={profile.email}
              disabled
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={profile.password}
              disabled
            />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        <SideBarProfile />
      </div>
    </>
  );
};

export default Setting;
