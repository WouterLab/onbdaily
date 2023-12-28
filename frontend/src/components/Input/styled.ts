import { styled } from "@linaria/react";

export const Wrapper = styled.input`
  border-radius: 30px;
  background-color: #fff;
  color: #353535;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  transition: all 0.5s;
  user-select: none;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #d0d0d0;
  }

  &:focus {
    outline: none;
  }
`;
