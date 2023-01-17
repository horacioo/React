import React, { Component, useState, useEffect } from 'react';

function Checkbox(props) {
/*var valor=props.valores.dados[3];  */  
const [valor,setValor]=useState(props.valores.dados[3]);



function testeDeEnvio(nome,valor){
    valor === "s" ? setValor('null') : setValor(props.valores.dados[3]) 
    props.funcao(nome,valor);
}



    return (
        <>
            <label className={props.grupo}>  {props.label}
                <input onChange={(e)=>testeDeEnvio(props.name,e.target.value)}  value={valor} type="checkbox" name={props.name} />
            </label>
        </>
    )
}

export default Checkbox;