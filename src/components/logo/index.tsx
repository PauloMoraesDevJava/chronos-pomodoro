import { TimerIcon } from 'lucide-react';
import style from '../logo/style.module.css';

export function Logo() {
  return (
    <div className={style.logo}>
      <a className={style.logoLink} href='#'>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
