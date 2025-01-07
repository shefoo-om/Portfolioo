import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tilt from 'react-parallax-tilt';
import avatar from '../../../assets/avatar.svg';
import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I am a<b> Junior Frontend Developer</b>{' '}
              building responsive<br /> and user-friendly web applications for desktop.
            </p>

            <p>
              My expertise lies in creating seamless, high-performance interfaces <br /> using modern technologies like{' '}
              <i>
                <b className={s.purple}>
                  React.js, Next.js, Tailwindcss
                </b>
              </i>
        
            </p>

            <p>
              My field of interest is building new{' '}
              <i>
                <b className={s.purple}>Technologies and Products</b>
              </i>{' '}
              <br />that solve real-world problems.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/shefoo-om"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:gadoomarsh@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaEnvelope />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/omar-sherif-79b426221"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;