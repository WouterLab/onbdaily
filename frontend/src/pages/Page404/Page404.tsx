import { useEffect } from "react";
import { Wrapper } from "./styled";
import { useNavigate } from "react-router";

export function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return <Wrapper>Page not found</Wrapper>;
}
