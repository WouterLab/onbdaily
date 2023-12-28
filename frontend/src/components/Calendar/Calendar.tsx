import { Card } from "#components/Card";
import { CardNew } from "#components/CardNew";
import { User } from "#types/types";
import { Content, Wrapper } from "./styled";

export function Calendar({ users }: { users: User[] }) {
  return (
    <Wrapper>
      <Content>
        {users.map(({ _id, name, sex }) => (
          <Card key={_id} _id={_id} name={name} sex={sex} />
        ))}
        <CardNew />
      </Content>
    </Wrapper>
  );
}
