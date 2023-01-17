import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'

import Checkbox from '../campos/Checkbox'
import Select from '../campos/Select';
import Text from '../campos/Text';
import Date from '../campos/Date';


var MyKey=0;

function FormularioGeral(props) {
    
    const [camposGerais, setCamposGerais] = useState();
    const display =props.dysplay;



    React.useEffect(() => {
        axios.post('http://sistema.cssantos.com.br/api/API_SAE.php?form='+display+'')
            .then(resp => { setCamposGerais(resp.data); })
            .catch(ERR => { /*console.log(ERR.message);*/ })
    }, [])




    return (
        <>
            {(typeof (camposGerais) != 'undefined') ? <>
                {/*console.log(Object.keys(camposGerais))*/}
                {
                    Object.keys(camposGerais).map((index, item) => 
                        <div key={index} className={'linha grid_'+  btoa(index).replaceAll("=",'').replaceAll("+",'')  +" "+index}>
                        <BoxDoForm   funcao = {props.funcao}    display={display} titulo={index} dados={camposGerais[index]} />
                        </div>)
                }</> : ""}
        </>
    )
}






/********************************************************/
/********************************************************/
/********************************************************/
/****Aqui eu vou receber uma array e vou listar ela, para que assim, possa montar os campos***/
function BoxDoForm(props) {
    const titulo = props.titulo.replaceAll("_"," ");
    const dados = props.dados;
    const display = props.display;


    
    return (<div className={"bloco" + titulo + " bloco "+display+"" }>
        
            <h2>{titulo}</h2>
            {/*console.log("\n \r")*/}
            {dados.map((item, index) => <RenderizaCamposGerais  key={index}  funcao = {props.funcao}  dados={item} />     )}

        </div>)
}
/********************************************************/
/********************************************************/
/********************************************************/




/********************************************************/
/********************************************************/
/********************************************************/
function RenderizaCamposGerais(props) {

    const dados = props.dados
    const nome = props.dados[0];
    const label = props.dados[1];
    const tipo = props.dados[2];

    const ChaveControle = props.dados[3];

    const classe = props.dados[4];
    const ClasseGRupo = props.dados['tipo'];

    
    return (  < >
        {tipo == "checkbox" ? <Checkbox   funcao = {props.funcao}  classe={classe} grupo={ClasseGRupo} label={label} name={nome} valores={props} /> : ""}
        {tipo == "text" ?     <Text       funcao = {props.funcao}  classe={classe} grupo={ClasseGRupo} label={label} name={nome} /> : ""}
        {tipo == "date" ?     <Date       funcao = {props.funcao}  classe={classe} grupo={ClasseGRupo} label={label} name={nome} /> : ""}
        {tipo == "select" ?   <Select     funcao = {props.funcao}  classe={classe} grupo={ClasseGRupo} label={label} name={nome} valor={props.dados['valores']} /> : ""}
        {tipo == "espaco" ? (ChaveControle == "abre") ? <><div  className={ClasseGRupo} /></> : <></> : ""}
    </>  )
}
/********************************************************/
/********************************************************/
/********************************************************/








export default FormularioGeral;