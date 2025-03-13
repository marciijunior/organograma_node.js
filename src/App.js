import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import ListaSuspensa from './componentes/ListaSuspensa';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <header className="App-header">
        <p>
          Bem-vindo ao React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;