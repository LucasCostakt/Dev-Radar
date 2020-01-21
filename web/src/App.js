import React, {useEffect, useState} from 'react';
import api from './services/api';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



//Três conceitos que montam tudo no react
//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const[devs, setDevs] = useState([]);
  


useEffect(() => {
  async function loadDevs(){
    const response = await api.get('/devs');
    setDevs(response.data);
  }
  loadDevs();
}, []);

async function handleAddDev(data){
  
  const response = await api.post('/devs', data)
  
  setDevs([...devs, response.data]);
}


  return (
  <div id = "app">
    <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit = {handleAddDev} />

      
    </aside>
    <main>
      <ul>
        {devs.map(dev=>(
         <DevItem key = {dev._id} dev = {dev}></DevItem>
        ))}
        
      </ul>
    </main>
  </div>
  );
}

export default App;
