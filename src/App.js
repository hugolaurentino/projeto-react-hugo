import './App.css';
import hugo from './assets/hugo.jpg';

function App() {
  return (
    <body>
      <header>
        <h2>Hugo.dev</h2>
        <ul className="menu">
          <li>Sobre Mim</li>
          <li>Projetos</li>
        </ul>
      </header>

      <main>
        <div className="left">
          <img src={hugo} alt="hugo image" />
          <strong>Hugo Laurentino</strong>
          <span>
            <br />
            Eu sou o Hugo Laurentinos estudante do curso Desenvolvedor de Software
            que estou cursando na Cubos Academy.

            Sou apaixonado por tecnologia!
          </span>
        </div>
        <div className="right">
          <strong>No ano de 2022</strong>
          <h2>Começou a minha nova jornada!</h2>
          <span>Nesse post iremos falar sobre como o curso MUDOU A MINHA VIDA,
            o modo de pensa, e de se organizar,
            como tudo pode ser transformado e ser reutilizado ...
          </span>
          <a href="#">Ler mais</a>
        </div>
      </main>

      <footer>
        <ul className="menu">
          <li>E-mail: hugof16silva@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/hugo-laurentino-silva/">LinkedIn</a></li>
        </ul>
      </footer>
    </body>
  );
}

export default App;
