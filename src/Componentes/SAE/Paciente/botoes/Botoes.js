import { useState } from 'react';
import { Link } from 'react-router-dom'
import './css/estilo.css'

function Botoes(props) {

    return (
        <>{console.log("a informação da data recebida é :"+props.lastData)}
            <span id='BlocoDeBotoes'>
                <button  className={props.lastData ==1 ? "fechaButton" : "abreButton"} ><Link to={`/Completa/${props.num_atd}`}>Sae Completa</Link></button>
                <button  className={props.lastData ==1 ? "abreButton" : "fechaButton"}>Histórico</button>
                <button  className={props.lastData ==1 ? "abreButton" : "fechaButton"}>Evolução</button>
                <button  className={props.lastData ==1 ? "abreButton" : "fechaButton"}>Prescrição</button>
                <button  className={props.lastData ==1 ? "abreButton" : "fechaButton"}>Diagnóstico</button>
            </span>
        </>
    )
}


export default Botoes;