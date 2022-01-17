import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  SingleItem,
  Write,
  Loading,
  Register,
  Forget,
  ChangePassword,
  UserRoute,
  Resetpassword,
  AllPost,
  WriteEdit,
  NotFound,
  UserRoutes,
} from "./Imports/Index";
import { Home, Setting, Login } from "./Imports/LazyRouter";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
          <Route
            path="/login"
            element={
              <UserRoutes>
                <Login />
              </UserRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <UserRoutes>
                <Register />
              </UserRoutes>
            }
          />
          <Route
            path="/forget"
            element={
              <UserRoutes>
                <Forget />
              </UserRoutes>
            }
          />
          <Route path="/password/reset/:token" element={<Resetpassword />} />
          <Route
            path="/"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route
            path="/allPost"
            element={
              <UserRoute>
                <AllPost />
              </UserRoute>
            }
          />
          <Route
            path="/single/:id"
            element={
              <UserRoute>
                <SingleItem />
              </UserRoute>
            }
          />
          <Route
            path="/write"
            element={
              <UserRoute>
                <Write />
              </UserRoute>
            }
          />
          <Route
            path="/writeEdit/:id"
            element={
              <UserRoute>
                <WriteEdit />
              </UserRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <UserRoute>
                <Setting />
              </UserRoute>
            }
          />
          <Route
            path="/changPassword"
            element={
              <UserRoute>
                <ChangePassword />
              </UserRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
