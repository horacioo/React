import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListaLeitos from '../listaLeitos/ListaLeitos'
import './css/estilo.css'


function ListaBlocos(porps) {

    const [dados, setDados] = useState();
    const [codBloc, setCodBloc] = useState();




    React.useEffect(() => {
        axios.get('http://sistema.cssantos.com.br/api/API_SAE.php?blocos=1')
            .then(resp => { setDados(resp.data); console.log("carregou as informações") })
            .catch(err => { console.log(err.message) });
    }, [])




    return (
        <>

            {
                (typeof (dados) != 'undefined') ? <>
                    <select className="blocosLista" onChange={(e) => setCodBloc(e.target.value)} >
                        {dados.map((item, index) => <option value={item[0]} key={index}>{item[1]}</option>)}
                    </select>
                </> : <></>
            }

            {console.log("codbloc tipo: "+typeof(codBloc))}
            {(codBloc > 0)?<> <ListaLeitos codBloc={codBloc} /></> : <></>}

        </>
    )
}

export default ListaBlocos;