import s from './Skills.module.css'
import { Skill } from './Skill'


export function Skills(props) {
  return (
    <div className={s.skills_bg}>
      <div className={s.skills_content}>
            <h2 className={s.text}>My skills</h2>
            <div className={s.skills_block}>
            <Skill />
            </div>
      
      </div>
    </div>
  );
}

