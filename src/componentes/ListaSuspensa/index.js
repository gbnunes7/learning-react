import './lista.css'


export default function ListaSuspensa(props) {
    
    const aoDigitado = function(event) {
        props.aoAlterar(event.target.value)
    }


    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitado} valor={props.valor}>
            {props.itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
    
}