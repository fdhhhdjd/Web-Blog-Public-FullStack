import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Header, Posts, SideBar, Footer, TopBar } from "../../Imports/Index";
import { ProfileInitiate } from "../../redux/Action/ActionAuth";
import { HomeStyle } from "../../Styles/HomeStyle/HomeStyle";
const Home = () => {
  const { refreshToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (refreshToken.success === true) {
  //     toast.success(`${refreshToken.msg}`);
  //     dispatch(ProfileInitiate(refreshToken.refreshtoken));
  //   }
  // }, [refreshToken.success]);
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
