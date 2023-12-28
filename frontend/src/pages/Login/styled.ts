import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px 0;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorTag = styled.div`
  font-size: 14px;
  color: red;
`;
