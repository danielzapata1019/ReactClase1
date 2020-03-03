import React, { Component } from "react";
import { InformacionPokemones } from "../ComponenteFuncional";
import Api from "axios";
import Boton from "../Boton";
import Alert from "../Alert";

export default class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registros: [],
      detalle:[],
      consumoExitoso: ""
    };
    
    this.ConsumirApi = this.ConsumirApi.bind(this);
    this.ConsumirApiDetalle= this.ConsumirApiDetalle.bind(this);
    /*this.ObtenerPokemones = this.ObtenerPokemones.bind(this);
    this.ObtenerDetalle = this.ObtenerDetalle.bind(this);*/

  }
 
  async ConsumirApi() {
    try {
      let response = await Api.get("https://pokeapi.co/api/v2/pokemon");
      //console.log("Data: ", response.data);      
      this.setState({ consumoExitoso: "Consumo Exitoso" });           
      this.setState({ registros: response.data.results }); 
    } catch (error) {
      console.log(error);
      this.setState({ consumoExitoso: "Error al consumir el Api" });
    }
  }

  async ConsumirApiDetalle(url) {
    try {
      let response = await Api.get(url);
      console.log("Data: ", response);                
      
    } catch (error) {
      console.log(error);
      this.setState({ consumoExitoso: "Error al consumir el Api" });
    }
  }
  /*async ObtenerPokemones(){
    try{
        let res = this.ConsumirApi("https://pokeapi.co/api/v2/pokemon");
        console.log(res.data);  
        //this.setState({ registros: res.data.results });    
    }catch (error) {
      console.log(error);
      this.setState({ consumoExitoso: "Error al consumir el Api Lista" });
    }
}

  async ObtenerDetalle(url){
      try{
          let res= this.ConsumirApi(url);
          console.log("Detalle: ", res)
          this.setState({ detalle: res });  
      }catch (error) {
        console.log(error);
        this.setState({ consumoExitoso: "Error al consumir el Api Detalle" });
      }
  }*/

  render() {
    /*let listaPokemones = this.state.registros.map((items) =>  <MensajeAlerta MensajeAlert={items.name}></MensajeAlerta>)*/
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 center">
              <b>Hola</b>
              <Boton
                TextoLabel="Click pra consumir el Api de Pokemones"
                NombreBoton="Consumir Api"
                EventoBoton={this.ConsumirApi}
              ></Boton>
              <br />
              <Alert MensajeAlert={this.state.consumoExitoso}></Alert>
            </div>
          </div>
          <div className="row">
            {[...this.state.registros].map(function(item, i) {
                console.log(item);
              return <InformacionPokemones key={i} name={item.name} url={item.url}/>;
            })}           
          </div>
        </div>
      </div>
    );
  }
}

/*detalle={this.ObtenerDetalle(item.url)}*/