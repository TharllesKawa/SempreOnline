import './App.css'
import Clientes from './components/Clientes/Clientes';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Registrar from './components/Registrar/Registrar';
import Solucao from './components/Solucao/Solucao';
import Stats from './components/Stats/Stats';


function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Stats />
      <Clientes />
      <Solucao />
      <Registrar />
      <Footer />
    </div>
  )
}

export default App
