import { useEffect, useState } from 'react';
import './App.css';
import Prato from './componentes/Prato';

function App() {

  //pratos: variavel local responsavel por armazenar a lista de pratos e, quando essa lista mudar, vai pedir pro app se renderizar novamnete
  const [pratos, setPratos] = useState([])

  //hook do react - tenho uma listagem na api e preciso que o react pegue pra mim
  useEffect(() => {
    fetch('http://alura-pizza.herokuapp.com/api/pratos/')         //busca a url (é uma promessa)
      .then(resposta => resposta.json())                          //caso de tudo certo: pega a resposta e transforma em json
      .then(dados => {                                            //.then final - dados retornados da api
        setPratos(dados)
        //console.log(dados)
      })
  }, [])

  return (
    <div className="App">
      <div className='banner-container'>
        <img src="/imagens/banner.png" alt="Um banner mostrando uma pizza"/>
      </div>
      <div className='logo-container'>
        <img src="/imagens/logo.png" alt="Logo da alura pizza"/>
      </div>
      <section className='cardapio'>
        {pratos.map(prato => 
        (<Prato 
          key={prato.id} 
          nome={prato.nome} 
          descricao={prato.descricao} 
          imagem={prato.imagem} 
          preco={prato.preco}
        />))}
      </section>
    </div>
  );
}

export default App;
