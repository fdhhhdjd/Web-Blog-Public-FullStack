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
} from "./Imports/Index";
import { Home, Setting, Login } from "./Imports/LazyRouter";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/password/reset/:token" element={<Resetpassword />} />
          <Route
            path="/"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route path="/single/:id" element={<SingleItem />} />
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/changPassword" element={<ChangePassword />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
