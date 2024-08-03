import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 
    
    const aoDigitado = function(event) {
        props.aoAlterar(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto