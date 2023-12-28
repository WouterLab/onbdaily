import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  max-width: 250px;
  margin: 0 auto;
`;

export const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  border: 5px solid;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: #fff;
  transition: all 0.5s;
  opacity: 0;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  padding: 30px 15px 0 15px;
  position: relative;

  &:hover {
    .${DeleteButton.__linaria.className} {
      opacity: 1;
    }
  }
`;

export const DeleteIcon = styled.img`
  object-fit: cover;
  width: 20px;
  height: 20px;
`;

export const FemaleBorder = css`
  border-color: #98b9f9;
`;

export const MaleBorder = css`
  border-color: #ffa8a8;
`;

export const FemaleBg = css`
  background-color: #ffa8a8;
`;

export const MaleBg = css`
  background-color: #98b9f9;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  font-family: "Montserrat Alternates", sans-serif;
  color: #353535;
  outline: none;
  border: none;
  background-color: transparent;
  transition: all 0.5s;
  border-bottom: 1px solid transparent;
  padding-bottom: 3px;
  width: 90%;

  &:focus {
    border-bottom: 1px solid #353535;
  }
`;
