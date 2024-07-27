import "./header.css";

const Header = () => {
  return (
    <header className="container_header" id="home">
      <div className="logo">
        <span className="log_andre">log {"{ Andre }"} </span>{" "}
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
    </header>
  );
};

export default Header;
