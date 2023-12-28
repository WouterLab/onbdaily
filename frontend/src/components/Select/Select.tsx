import { Container, Option, OptionsWrapper, SelectWrapper } from "./styled";
import { Options, User, UserSex } from "#types/types";
import { useState } from "react";

type SelectProps = {
  options: Options;
};

export function Select({ options }: SelectProps) {
  const [currentSelection, setCurrentSelection] = useState<User | null>(null);
  const [selectOpened, setSelectOpened] = useState(false);

  const handleSelectClick = () => {
    setSelectOpened(!selectOpened);
  };

  const handleOptionClick = (name: string, sex: UserSex) => {
    setCurrentSelection({
      name,
      sex,
    });
    setSelectOpened(false);
  };

  return (
    <Container>
      <SelectWrapper onClick={handleSelectClick}>
        {currentSelection ? currentSelection.name : "Выбрать"}
      </SelectWrapper>
      {selectOpened && (
        <OptionsWrapper>
          {options.map((option) => (
            <Option
              key={option.name}
              onClick={() => handleOptionClick(option.name, option.sex)}
            >
              {option.name}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </Container>
  );
}
