import './header.css';

const Header = () => {
  return (
    <header>
      <section className="container_header" id="home">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <span className="log_andre">log {'{ Andre }'} </span>{' '}
        </div>
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
