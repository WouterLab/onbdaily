import { Calendar } from "#components/Calendar";
import { Card } from "#components/Card";
import { Heading } from "#components/Heading";
import { New } from "#components/New";
import { User, UserSex } from "#types/types";
import { Wrapper } from "./styled";

export function Home() {
  const users: User[] = [
    {
      sex: UserSex.Male,
      name: "Danil 1",
      id: "1",
    },
    {
      sex: UserSex.Female,
      name: "Danil 2",
      id: "2",
    },
    {
      sex: UserSex.Female,
      name: "Danil 3",
      id: "3",
    },
    {
      sex: UserSex.Male,
      name: "Danil 4",
      id: "4",
    },
    {
      sex: UserSex.Male,
      name: "Danil 5",
      id: "5",
    },
  ];

  return (
    <Wrapper>
      <Heading>Daily Calendar</Heading>
      <Card sex={UserSex.Male} name='Данил Панов' id='0' noRemoval />
      <Calendar users={users} />
      <New />
    </Wrapper>
  );
}
