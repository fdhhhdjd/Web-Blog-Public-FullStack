import React from "react";
import { Link } from "react-router-dom";
import { SidebarStyle } from "../../Styles/SidebarStyle/SidebarStyle";
const SideBar = () => {
  return (
    <>
      <SidebarStyle />
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME ADMIN</span>
          <img
            src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/138806742_2946553968892549_4687379380423818078_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=HMRfMJM2MGsAX9CKpjc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-BXhvgt63or--I69CZBZzfsLYLMLB4NNQK0ZcJ0I3G0w&oe=6200F4E6"
            alt=""
          />
          <p>
            Tôi là Tiến Tài,Tôi tạo web blog để các bạn trao đổi và cũng như
            giúp đỡ nhau trong việc làm về IT cũng như Fix Bug,Tôi là Dev viết
            web React bạn có cần hộ trợ liên hệ cho tôi nha !
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

export default SideBar;
