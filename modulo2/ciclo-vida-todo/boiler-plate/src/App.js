import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const ContainerTarefa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 3;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
    }

  componentDidUpdate() {
    localStorage.setItem("tarefasSalvas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefasSalvas"))
    if (tarefasSalvas) {
      this.setState({tarefas: tarefasSalvas})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  onChangeInputEditar = (event) => {
    this.setState({inputEditado: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaListaDeTarefas})
    this.setState({inputValue: ""})
  }

  selectTarefa = (id) => {
    const listaModificadaDeTarefas = this.state.tarefas.map ((tarefa) => {
      if (id === tarefa.id) {
        const tarefaModificada = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return tarefaModificada
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: listaModificadaDeTarefas})
  }

  removeTarefa = (id) => {
    const listaComTarefaDeletada = this.state.tarefas.filter ((tarefa) => {
      if (id !== tarefa.id) {
        return tarefa
      }
    })
    this.setState({tarefas: listaComTarefaDeletada})
  }

  removeTodasTarefas = () => {
    const listaVazia = []
    this.setState({tarefas: listaVazia})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ContainerTarefa>
                <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <button onClick={() => this.removeTarefa(tarefa.id)}>Deletar</button>
              </ContainerTarefa>
            )
          })}
        </TarefaList>
        <button onClick={this.removeTodasTarefas}>Deletar Tarefas</button>
      </div>
    )
  }
}

export default App
