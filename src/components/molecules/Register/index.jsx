import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../core/services/api/user.service";
import { register } from "../../../store/auth.slice";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Loading from "../../atoms/Loading";
import Toast from "../Toast";

const Register = () => {
  const dispacth = useDispatch();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [fullName, setFullName] = useState(""),
    [loading, setLoading] = useState(false),
    [toast, setToast] = useState(false),
    [failedToast, setFailedToast] = useState(false);

  const addUser = async () => {
    const user = {
      email: email,
      password: password,
      fullName: fullName,
    };

    if (email === "" || password === "") {
      setFailedToast(true);
    } else {
      setLoading(true);
      const newUser = await setUser(user);

      newUser && dispacth(register(newUser)), setLoading(false);
      setToast(true);
    }
  };

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setFullName("");
  };

  const toastClosed = () => {
    setToast(false);
    setFailedToast(false);
    clearInput();
  };

  return (
    <>
      <Input
        label={"user.fullName"}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
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
        type="secondary"
        label={"general.register"}
        onClick={() => addUser()}
      />
      {loading && <Loading type={"secondary"} />}
      {toast && (
        <Toast
          message={"general.message.toaster.register.success"}
          type="success"
          toastClosed={toastClosed}
        />
      )}
      {failedToast && (
        <Toast
          message={"general.message.toaster.register.error"}
          type="error"
          toastClosed={toastClosed}
        />
      )}
    </>
  );
};

export default Register;
