import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{this.props.Nombre + ' - Fecha: ' + this.props.Fecha}</a>
        <a  href="/Login" className="item-menu">Login</a>
        <a  href="/Register" className="item-menu">Registrarse</a>
        <a  href="/Contenido" className="item-menu">Contenido</a>                
      </nav>
    );
  }
}

export default Header;