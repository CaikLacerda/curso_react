import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';


function App() {

  return (
    <div className="App">
    
      <SayMyName nome="Caik"/>
      <SayMyName nome="Isabela"/>
      <Pessoa 
        nome="Caik" 
        idade="19" 
        profissao="Desenvolvedor" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
