import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading/index';
import { Container } from './components/container/index';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          LOGO
          <button>P</button>
        </Heading>
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
