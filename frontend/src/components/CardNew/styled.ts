import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  max-height: 250px;
  border: 5px solid #f0f0f0;
  border-radius: 30px;
  padding: 30px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    border-color: #ffa8a8;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
