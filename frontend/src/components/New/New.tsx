import { Button } from "#components/Button";
import { Select } from "#components/Select";
import { SubHeading } from "#components/SubHeading";
import { Options, UserSex } from "#types/types";
import { Actions, Wrapper } from "./styled";

export function New() {
  const options: Options = [
    {
      name: "Никита Кострикин",
      sex: UserSex.Male,
    },
    {
      name: "Диана Лучкина",
      sex: UserSex.Female,
    },
    {
      name: "Никита Арапов",
      sex: UserSex.Male,
    },
    {
      name: "Катя Сергеева",
      sex: UserSex.Female,
    },
    {
      name: "Серёжа Блохнов",
      sex: UserSex.Male,
    },
    {
      name: "Артём Сауляк",
      sex: UserSex.Male,
    },
    {
      name: "Данил Панов",
      sex: UserSex.Male,
    },
  ];

  return (
    <Wrapper>
      <SubHeading>Добавить нового ведущего:</SubHeading>
      <Actions>
        <Select options={options} />
        <Button onClick={() => {}}>Добавить</Button>
      </Actions>
    </Wrapper>
  );
}
