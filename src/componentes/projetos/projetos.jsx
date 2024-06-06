import { listaProjetos } from "./data";
import "./projetos.css";

const Projetos = () => {
  return (
    <section className="container_projetos">
      <article className="titulo_projetos">
        <span>{"{ Projetos }"}</span>
      </article>

      <section className="lista_projetos">
        {listaProjetos.map((proj) => {
          return (
            <aside className="projeto" key={proj.id}>
              <div>
                <h3>{proj.titulo}</h3>
              </div>
              <div>
                <p>{proj.descricao}</p>
                <p>
                  <a href={proj.href}>Visualizar</a>
                </p>
              </div>
            </aside>
          );
        })}

      </section>
    </section>
  );
};

export default Projetos;
