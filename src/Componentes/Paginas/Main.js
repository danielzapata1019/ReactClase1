import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Inicio from './Inicio'
import Registro from './Registro'
import Contenido from './Contenido'

const Navegacion = (
    <Router>
        <Route path="/Login" component={Inicio}></Route>
        <Route path="/Register" component={Registro}></Route>
        <Route path="/Contenido" component={Contenido}></Route>
    </Router>
)


export default class Main extends Component {
    render() {
        return (
            <div className="container container-main">
                {Navegacion}
            </div>
        )
    }
}
