import React, { lazy } from "react";
export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Home/Home")), 2000);
  });
});
export const Setting = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Setting/Setting")), 2000);
  });
});
export const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Login/Login")), 2000);
  });
});
