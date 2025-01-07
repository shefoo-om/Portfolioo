import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';

import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import s from './Footer.module.scss';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/shefoo-om"
                target="_blank"
                rel="noreferrer"
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
            <li>
              <a
                href="https://www.linkedin.com/in/omar-sherif-79b426221"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
