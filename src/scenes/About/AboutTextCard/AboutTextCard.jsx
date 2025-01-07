import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Omar Sherif, </span>
        <br />a Software Engineer and a Computer Science student.
        <br />based in{' '}
        <span className={s.purple}>Cairo, Egypt.</span>
        <br />
        <br />
        My focus is on frontend development.
        <br />
        enjoy building clean and user-friendly
        interfaces and solving real-world problems with code.
        <br />
        Passionate about learning more about performance optimization to
        create faster and more efficient applications.
        <br />
        Always eager to collaborate and explore new tools.
      </p>
    </div>
  );
};

export default AboutTextCard;
