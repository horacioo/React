function Text(props){
    const habilitado = props.habilitado
    return( 

        <>{ habilitado==="0"?
        <TextDesabilitado valor={props.valor} name={props.name} grupo={props.grupo} label={props.label} classe={props.classe} funcao={props.funcao} /> 
        :
        <TextHabilitado valor={props.valor} name={props.name} grupo={props.grupo} label={props.label} classe={props.classe} funcao={props.funcao}  /> 
        }</>

        )
}








/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
function TextDesabilitado(props){
    return( 
            <>
            {props.funcao(props.name,props.valor)} 
                <label className={props.grupo} >{props.label}
                    <input  
                        className={props.classe} 
                        type="text" 
                        disabled="disabled"
                        name={props.name} 
                        value={props.valor}
                        />
                </label>
            </>
       )
}
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
function TextHabilitado(props){
    return( 
            <>
                <label  className={props.grupo} >{props.label}
                    <input  
                        onChange={(e)=>props.funcao(props.name,e.target.value)} 
                        className={props.classe} 
                        type="text" 
                        name={props.name} 
                        value={props.valor}
                        />
                </label>
            </>
       )
}
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/
/********************************************************************/


export default Text;