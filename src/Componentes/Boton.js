import React, { Component } from 'react'

export default class Boton extends Component {
    constructor(props) {
        super(props);    
      }

    render() {
        return (
            <div>
                <label>{this.props.TextoLabel}</label>
                <br/>
                <button type="button" className="btn btn-primary" onClick={this.props.EventoBoton}>{this.props.NombreBoton}</button>              
            </div>
        )
    }
}
