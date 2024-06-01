import { listaProjetos } from './data';
import './projetos.css';

const Projetos = () => {
  return (
    <section className="container_projetos">
      <article className="titulo_projetos">
        <span>{'{ Projetos }'}</span>
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
        {/*
        <aside className="projeto">
          <div>
            <h3>Prestador Web</h3>
          </div>
          <div>
            <p>
              Sistema Web para controle de prestadores e geração de guias de
              INSS para terceiros
            </p>
            <p>Visualisar</p>
          </div>
        </aside>

        <aside className="projeto">
          <div>
            <h3>App Paycheck</h3>
          </div>
          <div>
            <p>Aplicativo Android para geração e consulta de holerites</p>
            <p>Visualisar</p>
          </div>
        </aside>

        <aside className="projeto">
          <div>
            <h3>Gestão Agro</h3>
          </div>
          <div>
            <p>
              Sistema Web para gerenciamento e controle de estoque de insumos
              agricolas
            </p>
            <p>Visualisar</p>
          </div>
        </aside>

        <aside className="projeto">
          <div>
            <h3>App Cleanserviços</h3>
          </div>
          <div>
            <p>
              Aplicativo Android para busca de prestadores de serviços, ao qual
              disponiblizam em determinada área
            </p>
            <p>Visualisar</p>
          </div>
        </aside>
        */}
      </section>
    </section>
  );
};

export default Projetos;
