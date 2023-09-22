import React, { useRef } from "react";

// libs
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setLoggedIn } from "../../store/itemsSlice";

// components
import { LoginWrapper, LoginForm } from "./Login.styles";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const Login = (props) => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(usernameRef.current.value, passwordRef.current.value);

    const user = await axios({
      method: "post",
      url: "http://localhost:4000/signin",
      data: {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      },
      withCredentials: true,
    });

    console.log(user);
    dispatch(setUser(user.data));
    dispatch(setLoggedIn());
  };
  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Welcome back! </h1>

        <Input type="text" label={"username"} ref={usernameRef} />
        <Input type="password" label={"password"} ref={passwordRef} />
        <SubmitButton>submit</SubmitButton>
      </LoginForm>
      <img src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"></img>
    </LoginWrapper>
  );
};

export default Login;
