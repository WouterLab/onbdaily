import { ReactNode } from "react";
import { Wrapper, Ghost } from "./styled";

export function Button({
  children,
  ghost,
  onClick,
}: {
  children: ReactNode;
  ghost?: boolean;
  onClick: () => void;
}) {
  return (
    <Wrapper className={ghost ? Ghost : ""} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
