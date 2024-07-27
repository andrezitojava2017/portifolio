
import Contato from './componentes/contato/contato';
import Header from './componentes/header/header';
import Principal from './componentes/principal/principal';
import Projetos from './componentes/projetos/projetos';
import Sobre from './componentes/sobre/sobre';

function App() {
  return (
    <section className="containerMain">
      <Header />
      <Principal />
      <Sobre />
      <Projetos />
      <Contato />
    </section>
  );
}

export default App;
