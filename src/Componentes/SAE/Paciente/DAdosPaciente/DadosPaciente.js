import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import './css/estilo.css'




function DadosPaciente(props) {

    const [dados, setDados] = useState();

    React.useEffect(() => {
        axios.get('http://sistema.cssantos.com.br/api/API_SAE.php?paciente=' + props.num_atd + '') 
        .then(resp => { setDados(resp.data); props.fun(resp.data) }).catch(ERR => { console.log(ERR.message); }) 
    
    }, [])


    
    return (
        <>
            {console.log(dados)}
            {
                (typeof (dados) != 'undefined') ?
                    <> 
                        <div className="DadosPaciente">
                            <div>Paciente: <b>{dados[2]}</b></div>
                            <div>Data Nasc.: <b>{dados[3]}</b></div>
                            <div>Mãe: <b>{dados[12]}</b></div>
                            <div>Atendimento:<b>{dados[1]}</b></div>
                        </div>
                    
                    </>
                    : <p>Dados não foram carregados</p>
            }
            <hr />

        </>
    )

}

export default DadosPaciente