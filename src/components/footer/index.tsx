import style from './style.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href=''>Entenda como funciona a técnica do Pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com Amor
      </a>
    </footer>
  );
}
