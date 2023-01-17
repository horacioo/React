import Menu from "../../ComponentesGenericos/Menu/menu";
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react'
import axios from 'axios'



import DadosPaciente from "./DAdosPaciente/DadosPaciente";

import Botoes from "./botoes/Botoes";
import ListaSAE from "./ListaSAE";
import Form from "../Form/Form";


function Paciente(props) {

    let { num_atd } = useParams();

    const[dadosPaciente,setDadosPaciente]=useState();
    const[data,setData]=useState();

    return (
        <>
            <Menu />
            <DadosPaciente num_atd={num_atd} fun={setDadosPaciente} />
            <Botoes num_atd={num_atd} lastData={data} />
            <ListaSAE num_atd={num_atd} fun={setData} />
        </>
    )
}
export default Paciente;