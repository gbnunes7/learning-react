import './botao.css'

export default function Botao(props) {
    return(
        <div>
            {/* <button className='btn--CriarCard'>{props.btn}</button> */}
            <button className='btn--CriarCard'>{props.children}</button>

        </div>
    )
}