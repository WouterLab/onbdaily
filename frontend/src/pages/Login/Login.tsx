import { Button } from "#components/Button";
import { Heading } from "#components/Heading";
import { Input } from "#components/Input";
import { SubHeading } from "#components/SubHeading";
import { useNavigate } from "react-router";
import { Wrapper, Actions } from "./styled";
import { ChangeEvent, useState } from "react";

export function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const authUser = () => {};

  const changeLoginData = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setLoginData({ ...loginData, [field]: e.target.value });
  };

  return (
    <Wrapper>
      <Heading>Authorization</Heading>
      <SubHeading>Логин</SubHeading>
      <Input
        value={loginData.login}
        onChange={(e) => changeLoginData(e, "login")}
        placeholder='Login'
      />
      <SubHeading>Пароль</SubHeading>
      <Input
        value={loginData.password}
        onChange={(e) => changeLoginData(e, "password")}
        placeholder='********'
        type='password'
      />
      <Actions>
        <Button onClick={authUser}>Войти</Button>
        <Button ghost onClick={() => navigate("/reg")}>
          Регистрация
        </Button>
      </Actions>
    </Wrapper>
  );
}
