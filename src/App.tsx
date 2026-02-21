import './styles/theme.css';
import './styles/global.css';

import {} from './components/heading/index';
import { Container } from './components/container/index';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { CountDown } from './components/coutdown';
import { DefaultInput } from './components/defautimput/index';
import { Cycles } from './components/cycles';
import { DefaultButton } from './components/defaultbutton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/footer/index';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
