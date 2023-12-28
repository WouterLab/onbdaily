import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const Tab = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #e2e2e2;
  }
`;

export const Chosen = css`
  background-color: #98b9f9;
  color: #fff;

  &:hover {
    background-color: #98b9f9;
    color: #fff;
  }
`;
