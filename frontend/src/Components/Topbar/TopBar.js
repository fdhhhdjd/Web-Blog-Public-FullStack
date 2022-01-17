import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LogoutInitiate } from "../../redux/Action/ActionAuth";
import { TopBarStyle } from "../../Styles/TopbarStyle/TopBarStyle";
import { Link, useLocation } from "react-router-dom";
const TopBar = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const [images, setImages] = useState();
  const handleLogout = () => {
    dispatch(LogoutInitiate());
    toast.success("Logout Success Thank You!");
  };
  useEffect(() => {
    if (location.pathname === "/admin") {
      setActiveTab("Home");
    } else if (location.pathname === "/allPost") {
      setActiveTab("AllPost");
    } else if (location.pathname === "/write") {
      setActiveTab("Write");
    } else if (location.pathname === "/products") {
      setActiveTab("Products");
    }
  }, [location]);
  return (
    <>
      <TopBarStyle />
      <div className="top">
        <div className="topLeft">
          <img
            src="https://profile-forme.surge.sh/static/media/avatar.0870128b.jpg"
            alt=""
            className="topImg1"
          />
          <i className="topIcon fab ">Blog DevWeb</i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li
              className={`topListItem  ${activeTab === "Home" ? "active" : ""}`}
            >
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li
              className={`topListItem  ${
                activeTab === "AllPost" ? "active" : ""
              }`}
            >
              <Link className="link" to="/allPost">
                AllPOST
              </Link>
            </li>
            <li className="topListItem">CONTACT</li>
            <li
              className={`topListItem  ${
                activeTab === "Write" ? "active" : ""
              }`}
            >
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>

            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          </ul>
        </div>
        <div className="topRight">
          <Link className="link" to="/settings">
            {profile.image && (
              <img className="topImg" src={profile.image.url} />
            )}
          </Link>

          <i className="topSearchIcon fas">{profile.name}</i>
        </div>
      </div>
    </>
  );
};

export default TopBar;
