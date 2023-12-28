import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.button`
  border-radius: 30px;
  background-color: #ffa8a8;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  padding: 20px 30px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  max-height: 100px;
  user-select: none;

  &:hover {
    background-color: #fff;
    color: #353535;
  }
`;

export const Ghost = css`
  background-color: transparent;
  color: #353535;
  padding: 5px 0;

  &:hover {
    background-color: transparent;
    color: #35353575;
  }

  &:active {
    color: #d0d0d0;
  }
`;
