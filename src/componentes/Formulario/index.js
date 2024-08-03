import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome,setNome] = useState('') // Hook, seta o estado em um componente funcional
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const aoSalvar = function(evento) {
        evento.preventDefault()
        props.aoColaboradorNovo({
            nome,
            cargo,
            imagem,
            time
        })
        setCargo('')
        setImagem('')
        setNome('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto aoAlterar={valor => setNome(valor)} valor={nome} required={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto aoAlterar={valor => setCargo(valor)} valor={cargo} required={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto  aoAlterar={valor => setImagem(valor)}  valor={imagem} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa  aoAlterar={valor => setTime(valor)}  valor={time} itens={props.times} label="Time"/>
                {/* <Botao btn="Criar Card"/> ou  */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario