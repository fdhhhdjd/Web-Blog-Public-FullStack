import React from "react";
import { HeaderStyle } from "../../Styles/HeaderStyle/HeaderStyle";
const Header = () => {
  return (
    <>
      <HeaderStyle />
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Life & Talk</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
