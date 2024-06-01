import './contato.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contato = () => {
  return (
    <footer className="container_contato" id="contatos">
      <header className="titulo_contato">
        <span>{'{ Contato } '}</span>
      </header>
      <section className="container_footer">
        <article className="contato_icon">
          <a href="https://wa.me/5566981012229" target="_blank">
            <IoLogoWhatsapp size={30} color="#40C351" />
          </a>
          <a
            href="https://www.linkedin.com/in/jederson-andre-dev/"
            target="_blank">
            <FaLinkedin size={30} color="#1565C0" />
          </a>
          <a href="https://github.com/andrezitojava2017/" target="_blank">
            <FaGithub size={30} color="#DFDEDD" />
          </a>
        </article>

        <article className="direitos_autorais">
          <span>© 2024 / Jederson André / Todos os direitos reservados</span>
        </article>
      </section>
    </footer>
  );
};

export default Contato;
