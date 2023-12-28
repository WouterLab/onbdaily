import { Button } from "#components/Button";
import { Heading } from "#components/Heading";
import { Input } from "#components/Input";
import { SubHeading } from "#components/SubHeading";
import { useNavigate } from "react-router";
import { Actions, Wrapper, ErrorTag, Inputs } from "./styled";
import { ChangeEvent, useState } from "react";
import axios from "#services/axios";

export function Reg() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [reqError, setReqError] = useState("");

  const changeRegData = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setReqError("");
    setRegData({ ...regData, [field]: e.target.value });
  };

  const regUser = () => {
    axios
      .post("/reg", regData)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
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

  return (
    <Wrapper>
      <Heading>Registration</Heading>
      <Inputs>
        <SubHeading>Имя</SubHeading>
        <Input
          placeholder='Name'
          value={regData.name}
          onChange={(e) => changeRegData(e, "name")}
        />
        <SubHeading>Логин</SubHeading>
        <Input
          placeholder='Login'
          value={regData.login}
          onChange={(e) => changeRegData(e, "login")}
        />
        <SubHeading>Пароль</SubHeading>
        <Input
          placeholder='********'
          value={regData.password}
          onChange={(e) => changeRegData(e, "password")}
          type='password'
        />
        {reqError && <ErrorTag>{reqError}</ErrorTag>}
      </Inputs>
      <Actions>
        <Button onClick={regUser}>Зарегистрироваться</Button>
        <Button ghost onClick={() => navigate("/")}>
          Вход
        </Button>
      </Actions>
    </Wrapper>
  );
}
