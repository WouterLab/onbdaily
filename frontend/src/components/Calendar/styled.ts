import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px 45px;
  border-radius: 30px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const DateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  color: #353535a1;
  font-size: 16px;
  font-weight: 500;
`;
