import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/container/Index';
import { Heading } from './components/heading/Index';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

      <Container>
        <Heading>FORM</Heading>
      </Container>

      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}
