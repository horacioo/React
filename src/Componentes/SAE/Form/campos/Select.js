function Select(props) {

    const valor = props.valor;


    return (

        <>
            <label className={props.grupo} >{props.label}
                <select name={props.name} onChange={(e)=>props.funcao(props.name,e.target.value)}  className="" >
                    <option value="">Selecione uma Opção</option>
                    {
                        (typeof (valor) != 'undefined') ?
                            <>
                                {valor.map((item, index) => <option key={index} value={valor[index]}>{item}</option>)}
                            </>
                            : ""
                    }
                </select>
            </label>
        </>
    )
}

export default Select;
