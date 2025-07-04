import type { ReactNode } from 'react';

import { Container } from './styles';

type MainContentProps = {
  children: ReactNode;
  className?:string
};

const MainContent = ({ children, className }: MainContentProps) => (
  <Container className={className}>{children}</Container>
);
export default MainContent;
