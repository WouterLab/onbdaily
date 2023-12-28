import { Title } from "./styled";

type SubHeadingProps = { children: string };

export function SubHeading({ children }: SubHeadingProps) {
  return <Title>{children}</Title>;
}
