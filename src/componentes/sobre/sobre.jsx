import code from '../../assets/code.png';
import './sobre.css';

const Sobre = () => {
  return (
    <section className="container_sobre" id="sobre">
      <article className="titulo_sobre">
        <span>{'{ Sobre }'}</span>
      </article>

      <aside className="itens_sobre">
        <article>
          <figure>
            <img src={code} id="foto" />
          </figure>
        </article>
        <article className="sobre_descricao">
          <span>Desenvolvedor Web e Mobile</span>
          <p>
            Sou graduado em Tecnologia de Sistemas para Internet pelo Instituto
            Federal de Mato Grosso - IFMT e Pós-graduado em Desenvolvimento
            Mobile pelo Instituto INFNET. <br />
            Meu foco principal é desenvolvimento Web e Mobile, mas também tenho
            conhecimento para atuar no back-end, com as stacks de nodeJs.
          </p>
          <p>
            Sempre buscando me aprimovar e aprofundar nas tecnologias que
            domino, atraves de cursos e práticas de desenvolvimento.
          </p>
        </article>
      </aside>
    </section>
  );
};

export default Sobre;
