import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

  return (
    <div className="App">
      
      <Frase />
      <Frase />
      <SayMyName nome="Caik"/>
      <SayMyName nome="Isabela"/>
      <Pessoa 
        nome="Caik" 
        idade="19" 
        profissao="Desenvolvedor" 
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
