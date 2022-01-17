import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPostInitiate } from "../redux/Action/ActionPost";
const ProductApi = (callback) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllPostInitiate());
  }, [callback]);

  return {};
};

export default ProductApi;
