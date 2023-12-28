import { User, UserSex } from "#types/types";
import {
  Wrapper,
  MaleBg,
  FemaleBg,
  Container,
  Image,
  Input,
  DeleteButton,
  DeleteIcon,
  MaleBorder,
  FemaleBorder,
} from "./styled";
import MalePng from "#assets/male.png";
import FemalePng from "#assets/female.png";
import DeletePng from "#assets/close-cross.png";
import { ChangeEvent, useContext, useState } from "react";
import axios from "#services/axios";
import { RefetchContext } from "#contexts/refetchContext";

export function Card({ sex, name, _id }: User) {
  const [userName, setUserName] = useState(name);
  const updateObject = useContext(RefetchContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target?.value);
  };

  const deleteUser = () => {
    const token = localStorage.getItem("token");

    axios
      .delete(`/daily/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateObject?.setUpdated(!updateObject.updated);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete presenter.");
      });
  };

  const handleUpdate = () => {
    const token = localStorage.getItem("token");

    axios
      .patch(
        `/daily/${_id}`,
        {
          name: userName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .catch((err) => {
        console.log(err);
        alert("Failed to update presenter.");
      });
  };

  return (
    <Container>
      <Wrapper className={sex === UserSex.Female ? FemaleBg : MaleBg}>
        <Image
          src={sex === UserSex.Female ? FemalePng : MalePng}
          alt={sex === UserSex.Female ? "female" : "male"}
        />
        <DeleteButton
          className={sex === UserSex.Female ? FemaleBorder : MaleBorder}
          onClick={deleteUser}
        >
          <DeleteIcon src={DeletePng} alt='delete' />
        </DeleteButton>
      </Wrapper>
      <Input
        value={userName}
        onChange={(e) => handleChange(e)}
        onBlur={handleUpdate}
      />
    </Container>
  );
}
