import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { RiNextjsFill } from "react-icons/ri";
import { SiRadixui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiReacthookform } from "react-icons/si";
import { SiZod } from "react-icons/si";

import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <RiNextjsFill />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <FaBootstrap />
      </li>
      <li className={s.techIcon}>
        <RiTailwindCssFill />
      </li>
      <li className={s.techIcon}>
        <SiShadcnui />
      </li>
      <li className={s.techIcon}>
        <SiRadixui />
      </li>
      <li className={s.techIcon}>
        <SiReactquery />
      </li>

      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiReacthookform />
      </li>
      <li className={s.techIcon}>
        <SiZod />
      </li>

      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <SiJest />
      </li>
    </ul>
  );
};

export default TechSkills;
