import { Title } from "./styled";

type HeadingProps = { children: string };

export function Heading({ children }: HeadingProps) {
  return <Title>{children}</Title>;
}
