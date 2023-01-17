function Text(props){
    return ( 
    <>
    <label className={props.grupo} >{props.label}
        <input classname={props.classe} type="date" name={props.name}/>
    </label>
    </>
    )
}

export default Text;