import React, { useState, useEffect } from 'react';
import axios from 'axios'


function ListaSAE(props) {

    const [dadosListagem, setDadosListagem] = useState();
    
    React.useEffect(() => {
        axios.get('http://sistema.cssantos.com.br/api/API_SAE.php?ListaSaes=' + props.num_atd + '')
            .then( resp => { 
                props.fun(resp.data[0]['SAENova']); 
                setDadosListagem(resp.data); 
                console.log("SAE NOVA: "+resp.data[0]['SAENova']);
            })
            .catch(ERR => { console.log(ERR.message); })
    }, [])



    return (
        <>

            {(typeof (dadosListagem) != 'undefined') ? <>

                <table className="ListaSAE">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Atendimento</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Enfermeiro</th>
                            <th>Tipo</th>
                            <th>Ação</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            dadosListagem.map((item, index) =>
                                
                            <tr key={index} className={item[5] === "S" ? "NovaSAE" : "SAEantiga"} >
                                    <td>{item[1]} </td>
                                    <td>{item[0]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[5] ==="S"?"Completa" : "Evolução"}</td>
                                    <td>Visualizar</td>
                                    <td>-</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </> :
                <></>}












        </>
    )

}

export default ListaSAE