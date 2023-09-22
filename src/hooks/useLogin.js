// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setLoggedIn } from "../store/itemsSlice";
// import axios from "axios";

// import { getCookie } from "../utils/cookies";

// export const useLogin = (username, password) => {
//   const { isLoggedIn, user } = useSelector((store) => store.messages);
//   console.log(username, password);
//   const dispatch = useDispatch();

//   const cookie = getCookie("isLogged");

//   const logIn = () => {
//     if (
//       cookie !== null &&
//       Object.keys(user).length !== 0 &&
//       user.constructor === Object
//     ) {
//       return;
//     }

//     try {
//       const user = axios({
//         method: "post",
//         url: "xyz/signin",
//         data: {
//           username: username,
//           password: password,
//         },
//       });
//       console.log(user);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return [logIn];
// };
