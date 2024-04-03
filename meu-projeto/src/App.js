import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {

  // Criacao da variavel
  const name = 'Caik'

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterando o JSX!</h1>

      {/* Utilizando variavel no JSX(HTML)*/}
      <p>Ola, {name}</p>

      <img src={url} alt="Minha Imagem" />

      <HelloWorld  />


    </div>
  );
}

export default App;
