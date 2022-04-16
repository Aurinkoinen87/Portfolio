import s from './Skills.module.css'
import { Skill } from './Skill'


const skills = [{name: 'html/css', imgUrl: ''}, {name: 'javascript', imgUrl: './assets/icons/js-svgrepo-com.svg'}, {name: 'react/redux', imgUrl: ''}, {name: 'typescript', imgUrl: ''}, {name: 'nodejs/express/mongodb', imgUrl: './assets/icons/node-svgrepo-com.svg'}]


export function Skills(props) {
  return (
    <div className={s.skills_bg}>
      <div className={s.skills_content}>
            <h2 className={s.text}>My skills</h2>
            <div className={s.skills_block}>
              {skills.map((s,i)=> <Skill key={i} name={s.name}/>)}
            
            </div>
      
      </div>
    </div>
  );
}

