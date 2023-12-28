import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectWrapper = styled.div`
  border-radius: 30px;
  background-color: #fff;
  color: #353535;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  margin-bottom: 10px;
  transition: all 0.5s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: show 0.5s ease-in;
  transition: all 0.5s;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Option = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 15px 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
