import React from "react";
import { SingleItemStyle } from "../../Styles/SingleItemStyle/SingleItemStyle";

import { SideBar, SinglePost } from "../../Imports/Index";
const SingleItem = () => {
  return (
    <>
      <SingleItemStyle />
      <div className="single">
        <SinglePost />
        <SideBar />
      </div>
    </>
  );
};

export default SingleItem;
