import React from 'react';
import './Sass/main.scss';
// import {Comentario, Foto} from './Componentes/ComponenteFuncional';
// import Inicio from './Componentes/Paginas/Inicio';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Main from './Componentes/Paginas/Main';

/*const miFuncion=(valor)=>{
  return valor*2;
}*/

function App() {
  return (
    <div className="App">
      <Header Nombre="Mi React"></Header>
      <Main></Main>
      <Footer></Footer>
     {/* <Foto NombreFoto="MiFoto"></Foto>
     <Comentario nombre="Daniel"></Comentario>
     <Comentario nombre="Alberto"></Comentario>
     <Inicio multiplicar={miFuncion}></Inicio> */}     
    </div>
  );
}

export default App;
