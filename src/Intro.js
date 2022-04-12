import s from "./Intro.module.css";
import face from "./assets/pics/sddefault.jpg";

export function Intro() {
  return (
    <section className={s.intro_section}>
      <div className={s.intro_text}>
        <h1>Frontend developer</h1>
        <span>with no experience</span>
        <p>dreams to land a job</p>
      </div>

      <div className={s.intro_photo}>
        <img src={face} alt="dev_face"></img>
      </div>
    </section>
  );
}


