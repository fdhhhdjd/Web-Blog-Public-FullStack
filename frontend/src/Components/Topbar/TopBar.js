import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LogoutInitiate } from "../../redux/Action/ActionAuth";
import { TopBarStyle } from "../../Styles/TopbarStyle/TopBarStyle";
const TopBar = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [images, setImages] = useState();
  const handleLogout = () => {
    dispatch(LogoutInitiate());
    toast.success("Logout Success Thank You!");
  };

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
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
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
            <img className="topImg" src={profile.image.url} />
          </Link>

          <i className="topSearchIcon fas">{profile.name}</i>
        </div>
      </div>
    </>
  );
};

export default TopBar;
