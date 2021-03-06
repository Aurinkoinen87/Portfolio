import s from "./Intro.module.css";
import face from "./assets/pics/sddefault.jpg";
import cloud1 from "./assets/pics/cloud1.png";


export function Intro() {
  return (
    <div className={s.intro_bg}>
      <div className={s.intro}>
      <div className={s.intro_text}>
        <h1>Frontend developer</h1>
        <span>with no experience</span>
        <p>dreams to land a job</p>
        <img className={s.cloud1} src={cloud1} alt="cloud" />

      </div>

      <div className={s.intro_photo_block}>
        <img className={s.intro_photo} src={face} alt="dev_face"></img>
      </div>
      </div>
    </div>
  );
}


