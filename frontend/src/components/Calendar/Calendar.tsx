import { Card } from "#components/Card";
import { User } from "#types/types";
import { Content, DateRow, Wrapper } from "./styled";

export function Calendar({ users }: { users: User[] }) {
  return (
    <Wrapper>
      <DateRow>
        <span>Понедельник</span>
        <span>Вторник</span>
        <span>Среда</span>
      </DateRow>
      <Content>
        {users.map(({ id, name, sex }) => (
          <Card key={id} id={id} name={name} sex={sex} />
        ))}
      </Content>
      <DateRow>
        <span>Четверг</span>
        <span>Пятница</span>
        <span>Понедельник</span>
      </DateRow>
    </Wrapper>
  );
}
