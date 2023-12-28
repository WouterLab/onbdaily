import { Dispatch, ReactNode, SetStateAction } from "react";
import { Wrapper, Blur, Content } from "./styled";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

export function Modal({ children, opened, setOpened }: ModalProps) {
  const body = document.querySelector("body");

  if (!body || !opened) return null;

  return createPortal(
    <Wrapper>
      <Blur onClick={() => setOpened(false)} />
      <Content>{children}</Content>
    </Wrapper>,
    body,
  );
}
