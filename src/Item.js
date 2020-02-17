import React from 'react'

export function Item(props){
return (
    <div className="card">
    <label>Nuevo Item con id {props.idItem}</label>
    <button className="btn btn-primary">Seleccionar</button>
    </div>    
)
}

export const Item2=(props)=>{
return  <span>Nuevo Item 2 {props.idItem}</span>
}

/*export default Item;*/
/* default porque puede tener varios de este tipo */