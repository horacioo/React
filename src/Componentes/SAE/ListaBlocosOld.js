import React, { Component, useEffect } from 'react'
import axios from 'axios'
import ListaLeitos from './ListaLeitos'

/****Trabalhando com a classe******/
class ListaBlocos extends Component {
    /**************************************************/
    constructor(props) {
        super(props);
        this.state = {
            dados: [],
            bloco: 0,
        }
    }
    /**************************************************/
    componentDidMount(props) {
       
        axios.get('http://sistema.cssantos.com.br/api/API_SAE.php?blocos=1').then(resp => this.setState({ dados: resp.data }))
  
    }
    /**************************************************/
    render() {
        return (
            <>
                olá mundo
    
                <select onChange={(e) => { this.setState({ bloco: e.target.value }) }} name='blocos' >
                    {
                        this.state.dados.map(dados => <option value={dados[0]} key={dados[0]}>{dados[1]}</option>)
                    }
                </select>
                <hr />
                <ListaLeitos codBloc={this.state.bloco} />
            </>
        )
    }
    /**************************************************/
}

export default ListaBlocos