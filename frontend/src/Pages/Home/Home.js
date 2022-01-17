import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Header, Posts, SideBar, Footer, TopBar } from "../../Imports/Index";
import { ProfileInitiate } from "../../redux/Action/ActionAuth";
import { HomeStyle } from "../../Styles/HomeStyle/HomeStyle";
const Home = () => {
  return (
    <>
      <HomeStyle />
      <TopBar />
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
      <Footer />
    </>
  );
};

export default Home;
