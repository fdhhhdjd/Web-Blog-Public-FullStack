import React, { useEffect, useState } from "react";
import { SingleItemStyle } from "../../Styles/SingleItemStyle/SingleItemStyle";

import { SideBar, SinglePost, TopBar } from "../../Imports/Index";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, GetIdPostInitiate } from "../../redux/Action/ActionPost";
const SingleItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(GetIdPostInitiate(id));
    }
    return () => {
      dispatch(clearErrors());
    };
  }, [id]);
  return (
    <>
      <SingleItemStyle />
      <TopBar />
      <div className="single">
        <SinglePost />
        <SideBar />
      </div>
    </>
  );
};

export default SingleItem;
