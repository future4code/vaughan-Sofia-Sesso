import React from 'react'
import styled from 'styled-components'
import iconeEnviar from '../../img/enviar.svg'

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100vh;
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    background-color: #e8dfd8;
    border: 1px black solid;
`

const ContainerMensagensEnviadas = styled.div`
    position: fixed;
    bottom: 21.2px;
    left: 50%;
    transform: translate(-50%);
    width: 600px;
    padding-top: 20px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
`

const ContainerInputs = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 600px;
    padding-bottom: 10px;
`

const InputNome = styled.input`
    width: 150px;
    border: none;
    margin-right: 10px;
    padding: 10px;
    border-radius: 5px;

    &:focus {
        outline: none;
        border: #61adfa 4px solid;
    }
`

const ContainerNome = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`

const InputMensagem = styled.input`
    width: 300px;
    border: none;
    margin-right: 5px;
    padding: 10px;
    border-radius: 5px;

    &:focus {
        outline: none;
        border: #61adfa 4px solid;
    }
`

const Button = styled.button`
    border: none;
    background-color: #e8dfd8;
`

const BalaoMensagemEu = styled.div`
    background-color: #DDF7C8;
    align-self: flex-end;
    margin-right: 1.5em;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

const BalaoMensagemOutro = styled.div`
    background-color: white;
    align-self: flex-start;
    margin-left: 1.5em;max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`


class EnvioDeMensagem extends React.Component {
    state = {
       mensagens: [],
       valorInputNome: "",
       valorInputMensagem: ""
    }

    onChangeInputNome = (event) => {
        this.setState({valorInputNome: event.target.value})
    }

    onChangeInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    enviar = () => {
        const novaMensagem = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        }

        const novasMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({mensagens: novasMensagens})
        this.setState({
            valorInputMensagem: ""
        })
    }

    render() {
        const listaDeMensagens = this.state.mensagens.map ((input) => {
            const nome = input.nome.toLowerCase()

            if (nome === "eu") {
                return <BalaoMensagemEu>{input.mensagem}</BalaoMensagemEu>
            } else {
                return <BalaoMensagemOutro>
                <ContainerNome>{input.nome}</ContainerNome>
                <div>{input.mensagem}</div>
                </BalaoMensagemOutro>
            }
        })

        return (
            <ContainerMain>                
                <ContainerMensagensEnviadas>
                    {listaDeMensagens}
                </ContainerMensagensEnviadas>

                <ContainerInputs >
                    <InputNome value={this.state.valorInputNome} onChange={this.onChangeInputNome} placeholder={'Nome'}/>
                    <InputMensagem value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} placeholder={'Mensagem'}/>
                    <Button type='submit' onClick={this.enviar}><img src={iconeEnviar}/></Button>
                </ContainerInputs>
            </ContainerMain>
        )
    }
}

export default EnvioDeMensagem