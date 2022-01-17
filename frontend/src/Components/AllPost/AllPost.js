import React from "react";

import { AllPosts, Footer, TopBar } from "../../Imports/Index";
import { HomeStyle } from "../../Styles/HomeStyle/HomeStyle";
const AllPost = () => {
  return (
    <>
      <HomeStyle />
      <TopBar />
      <div className="home">
        <AllPosts />
      </div>
      <Footer />
    </>
  );
};

export default AllPost;
