import s from './Skill.module.css'




export const Skill = ({name, imgUrl}) => {
  return (
    <div className={s.skill}>
      <img src={imgUrl} alt={name} />
      <h2 className={s.skill_title}>{name}</h2>
      <p className={s.skill_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat omnis dolore suscipit, deleniti vitae consequatur necessitatibus temporibus nisi perspiciatis.

      </p>

    </div>
  );
};

