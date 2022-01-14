import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RefreshTokenInitiate,
  ProfileInitiate,
} from "../redux/Action/ActionAuth";
import UserApi from "./UserApi";

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const { auth, refreshTokens } = useSelector((state) => state.auth);
  // console.log(refreshToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        dispatch(RefreshTokenInitiate(auth.accessToken));
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, [callback]);

  const data = {
    callback: [callback, setCallback],
    UserApi: UserApi(refreshTokens),
    // AdminApi: AdminApi(token.accessToken, callback),
    // ProductApi: ProductApi(callback),
    // InfoAllUserApi: InfoAllUserApi(token, callback),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
