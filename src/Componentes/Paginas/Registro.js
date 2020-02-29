import React, { Component } from 'react'
import { InformacionPersona } from '../ComponenteFuncional'
import Api from 'axios'

export default class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registros: [],
            nombre: "",
            correo: ""
        }

        this.LlenarCampo = this.LlenarCampo.bind(this);
        this.AgregarNuevoItem = this.AgregarNuevoItem.bind(this);
    }

    async ConsumirApi() {
        try {
            var response = await Api.get("https://pokeapi.co/api/v2/pokemon");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    LlenarCampo = (e) => {
        console.log(e.target.id);
        let id = e.target.id;
        if (id === "TxtCorreo") {
            this.setState({ correo: e.target.value });
        } else {
            this.setState({ nombre: e.target.value });
        }
    }

    AgregarNuevoItem = (e) => {
        e.preventDefault();

        let item = {
            correo: this.state.correo,
            nombre: this.state.nombre,
            imagen: ""
        }
        console.log(item);
        //this.setState({ registros: this.state.registros.push(item) })
        this.setState(prevState => ({
            registros: [...(prevState.registros || []), e]
        }));
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card formulario col-md-4">
                        <button onClick={this.ConsumirApi} type="submit" className="btn btn-primary">Consumir Api</button>
                        <form>
                            <div className="form-group">
                                <label htmlFor="TxtCorreo">Email address</label>
                                <input onChange={this.LlenarCampo} type="email" className="form-control" id="TxtCorreo" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="TxtNombre">Nombre</label>
                                <input onChange={this.LlenarCampo} type="text" className="form-control" id="TxtNombre" />
                            </div>
                            <button onClick={this.AgregarNuevoItem} type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        {                            
                            [...this.state.registros].map(function(item, i) {    
                                console.log("Hola" ,item)                            
                                return <InformacionPersona key={i} nombre={item.nombre} correo={item.correo} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
