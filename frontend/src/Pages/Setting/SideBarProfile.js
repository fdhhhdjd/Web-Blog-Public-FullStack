import React from "react";
import { SideBarProfileStyle } from "../../Styles/SettingStyle/SideBarProfileStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const SideBarProfile = () => {
  const { profile } = useSelector((state) => state.auth);
  return (
    <>
      <SideBarProfileStyle />
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">
            ABOUT MY {profile.name.toUpperCase()}
          </span>
          <img src={profile.image.url} alt="" />
          <p style={{ fontWeight: "bold" }}>
            Cảm ơn {profile.name} đã ghé thăm trang web blog của tôi chúc
            {profile.name} một ngày vui vẻ hạnh phúc, Nếu bạn cần hộ trợ liên hệ
            cho mình nha !
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Life">
                Life
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Sport">
                Sport
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Style">
                Style
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Tech">
                Tech
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Cinema">
                Cinema
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <a
              href="https://www.facebook.com/profile.php?id=100006139249437"
              target="_blank"
            >
              <i
                className="sidebarIcon fab fa-facebook-square"
                style={{ color: "#3B5998" }}
              ></i>
            </a>
            <a
              href="https://www.instagram.com/nguyentientai10/"
              target="_blank"
            >
              <i
                className="sidebarIcon fab fa-instagram-square"
                style={{ color: "#BC2A8D" }}
              ></i>
            </a>
            <a
              href="https://github.com/fdhhhdjd?tab=repositories"
              target="_blank"
            >
              <i
                className="sidebarIcon fab fa-github-square"
                style={{ color: "black" }}
              ></i>
            </a>
            <a href="mailto:nguyentientai10@gmail.com" target="_blank">
              <i
                className="sidebarIcon fas fa-envelope-square"
                style={{ color: "red" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarProfile;
