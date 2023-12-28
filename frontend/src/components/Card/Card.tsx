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
import { ChangeEvent, useState } from "react";

export function Card({
  sex,
  name,
  noRemoval,
}: User & {
  noRemoval?: boolean;
}) {
  const [userName, setUserName] = useState(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target?.value);
  };

  return (
    <Container>
      <Wrapper className={sex === UserSex.Female ? FemaleBg : MaleBg}>
        <Image
          src={sex === UserSex.Female ? FemalePng : MalePng}
          alt={sex === UserSex.Female ? "female" : "male"}
        />
        {!noRemoval && (
          <DeleteButton
            className={sex === UserSex.Female ? FemaleBorder : MaleBorder}
          >
            <DeleteIcon src={DeletePng} alt='delete' />
          </DeleteButton>
        )}
      </Wrapper>
      <Input value={userName} onChange={(e) => handleChange(e)} />
    </Container>
  );
}
