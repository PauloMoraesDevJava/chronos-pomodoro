import style from './style.module.css';

export function Cycles() {
  return <div className={style.cycles}>
    <span>
        Cycles:
    </span>

    <div className={style.cycledots}>
        <span className={`${style.cycledot} ${style.worktime}`}> </span>
        <span className={`${style.cycledot} ${style.shortbreaktime}`}> </span>
        <span className={`${style.cycledot} ${style.worktime}`}> </span>
        <span className={`${style.cycledot} ${style.shortbreaktime}`}> </span>
        <span className={`${style.cycledot} ${style.worktime}`}> </span>
        <span className={`${style.cycledot} ${style.shortbreaktime}`}> </span>
        <span className={`${style.cycledot} ${style.worktime}`}> </span>
        <span className={`${style.cycledot} ${style.longbreaktime}`}> </span>
    </div>

  </div>;
}
