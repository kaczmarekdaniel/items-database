import React, { useState } from "react";

// libs
import { useSelector, useDispatch } from "react-redux";
// components
import Login from "../pages/Login/Login";
import Landing from "../pages/Landing/Landing";
import { setLoggedIn } from "../store/itemsSlice";

import { getCookie } from "../utils/cookies";

const Router = (props) => {
  const { isLoggedIn } = useSelector((store) => store.messages);

  const cookie = getCookie("logged_in");
  if (cookie === "true") console.log(isLoggedIn);

  return <>{isLoggedIn ? <Landing /> : <Login />}</>;
};

export default Router;
