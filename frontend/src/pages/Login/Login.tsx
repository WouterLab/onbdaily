import { Button } from "#components/Button";
import { Heading } from "#components/Heading";
import { Input } from "#components/Input";
import { SubHeading } from "#components/SubHeading";
import { Wrapper, Actions, Inputs, ErrorTag } from "./styled";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import axios from "#services/axios";

export function Login({
  setLogin,
}: {
  setLogin: Dispatch<SetStateAction<boolean>>;
}) {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const [reqError, setReqError] = useState("");

  const authUser = () => {
    axios
      .post("/login", loginData)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
        }
        return res;
      })
      .then((res) => {
        const token = localStorage.getItem("token");
        axios.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res;
      })
      .then((res) => {
        if (res.status === 200) {
          setLogin(true);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (typeof err.response.data === "object") {
            setReqError(err.response.data.msg);
          }
          if (Array.isArray(err.response.data)) {
            setReqError(err.response.data[0].msg);
          }
        } else setReqError(err.message);
      });
  };

  const changeLoginData = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setLoginData({ ...loginData, [field]: e.target.value });
  };

  return (
    <Wrapper>
      <Heading>Authorization</Heading>
      <Inputs>
        <SubHeading>Логин</SubHeading>
        <Input
          value={loginData.login}
          onChange={(e) => changeLoginData(e, "login")}
          placeholder='Login'
          onKeyDown={(e) => {
            if (e.key === "Enter") authUser();
          }}
        />
        <SubHeading>Пароль</SubHeading>
        <Input
          value={loginData.password}
          onChange={(e) => changeLoginData(e, "password")}
          placeholder='********'
          type='password'
          onKeyDown={(e) => {
            if (e.key === "Enter") authUser();
          }}
        />
        {reqError && <ErrorTag>{reqError}</ErrorTag>}
      </Inputs>
      <Actions>
        <Button onClick={authUser}>Войти</Button>
        {/* <Button ghost onClick={() => navigate("/reg")}>
          Регистрация
        </Button> */}
      </Actions>
    </Wrapper>
  );
}
