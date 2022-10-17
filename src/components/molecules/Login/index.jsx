import React from "react";
import { useState } from "react";
import { getAllUser } from "../../../core/services/api/user.service";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Loading from "../../atoms/Loading";
import { login } from "../../../store/auth.slice";
import Toast from "../Toast";

const Login = () => {
  const dispacth = useDispatch();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [loading, setLoading] = useState(false),
    [toast, setToast] = useState(false),
    [failedToast, setFailedToast] = useState(false);

  const getUser = async () => {
    if (email === "" || password === "") {
      setFailedToast(true);
    } else {
      setLoading(true);

      const allUsers = await getAllUser();

      const userCheck = allUsers.find((user) => {
        return user.data.email === email && user.data.password === password;
      });

      userCheck && dispacth(login(userCheck.data)),
        setLoading(false);
      setToast(true);

      userCheck == undefined && setFailedToast(true);
    }
  };

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const toastClosed = () => {
    setToast(false);
    setFailedToast(false);
    clearInput();
  };

  return (
    <>
      <Input
        label={"user.email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label={"user.password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="primary"
        label={"general.login"}
        onClick={() => getUser()}
      />
      {loading && <Loading type={"primary"} />}
      {toast && (
        <Toast
          message={"general.message.toaster.login.success"}
          type="success"
          toastClosed={toastClosed}
        />
      )}
      {failedToast && (
        <Toast
          message={"general.message.toaster.login.error"}
          type="error"
          toastClosed={toastClosed}
        />
      )}
    </>
  );
};

export default Login;
