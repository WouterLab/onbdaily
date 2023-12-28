import { Chosen, Tab, Wrapper } from "./styled";
import { Options, Option, UserSex } from "#types/types";
import { Dispatch, SetStateAction } from "react";

export function Tabs({
  selection,
  setSelection,
}: {
  selection: Option | null;
  setSelection: Dispatch<SetStateAction<Option | null>>;
}) {
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
      name: "Ваня Ганев",
      sex: UserSex.Male,
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

  const handleTabClick = (name: string) => {
    const selection = options.find((option) => option.name === name);
    if (selection) setSelection(selection);
  };

  return (
    <Wrapper>
      {options.map((option) => (
        <Tab
          key={option.name}
          onClick={() => handleTabClick(option.name)}
          className={option.name === selection?.name ? Chosen : ""}
        >
          {option.name}
        </Tab>
      ))}
    </Wrapper>
  );
}
