import './principal.css';
import image from '../../assets/code.png';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaJava } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { DiNodejs } from 'react-icons/di';

const Principal = () => {
  return (
    <>
      <section className="container">
        <aside className="identificacao">
          <span className="nome">Jederson Andre</span>
          <span className="info">Desenvolvedor Web e Mobile</span>
          <article className="tecnologias">
            <FaHtml5 size={30} color="#E65100" />
            <SiJavascript size={30} color="yellow" />
            <FaCss3Alt size={30} color="cyan" />
            <FaReact size={30} color="cyan" />
            <RiNextjsFill size={30} color="cyan" />
            <FaGitAlt size={30} color="#F4511E" />
            <SiTypescript size={30} color="#0D61A9" />
            <FaJava size={30} color="#1565C0" />
            <SiMongodb size={30} color="#7CB342" />
            <SiFirebase size={30} color="yellow" />
            <SiMysql size={30} color={'#1565C0'} />
            <DiNodejs size={40} color="green" />
          </article>
        </aside>
        <aside>
          <figure>
            <img src={image} />
          </figure>
        </aside>
      </section>
    </>
  );
};

export default Principal;
