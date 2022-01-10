import React from 'react'
import './App.css'
import apps from './img/apps.svg'
import buscar from './img/buscar.svg'
import camera from './img/camera.svg'
import chart from './img/chart.svg'
import historico from './img/historico.svg'
import home from './img/home.svg'
import inscricoes from './img/inscricoes.svg'
import menu from './img/menu.svg'
import microfone from './img/microfone.svg'
import perfil from './img/perfil.svg'
import play from './img/play.svg'
import sino from './img/sino.svg'
import usuario from './img/usuario.svg'
import video from './img/video.svg'

function App() {
  const titulo = "Titulo do vídeo"

  const autor = "Autor"

  const view = "# views · Data"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <div className="icone-texto">
            <img className="icone" src={menu} alt="icone-menu"/>
            <img className="icone-logo" src={play} alt="icone-play"/>
            <h1>Lab Tube</h1>
          </div>
          <div className="icone-texto2">
            <div className="container-buscar">
              <input type="text" placeholder="Busca" id="campoDeBusca"/>
              <img className="icone" src={buscar} alt="icone-buscar"/>
            </div>
              <img className="icone-microfone" src={microfone} alt="icone-microfone"/>
          </div>
          <div className="icone-texto">
            <img className="icone" src={camera} alt="icone-camera"/>
            <img className="icone" src={apps} alt="icone-apps"/>
            <img className="icone" src={sino} alt="icone-sino"/>
            <img className="icone" src={perfil} alt="icone-perfil"/>
          </div>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <div className="icone-texto">
                <img className="icone" src={home} alt="icone-home"/>
                <li className="botoes-meunu-vertical">Início</li>
              </div>
              <div className="icone-texto">
                <img className="icone" src={chart} alt="icone-chart"/>
                <li className="botoes-meunu-vertical">Em alta</li>
              </div>
              <div className="icone-texto">
                <img className="icone" src={inscricoes} alt="icone-inscrições"/>
                <li className="botoes-meunu-vertical">Inscrições</li>
              </div>
              <hr/>
              <div className="icone-texto">
                <img className="icone" src={video} alt="icone-video"/>
                <li className="botoes-meunu-vertical">Originais</li>
              </div>
              <div className="icone-texto">
                <img className="icone" src={historico} alt="icone-histórico"/>
                <li className="botoes-meunu-vertical">Histórico</li>
              </div>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt=""/>
              <div className="icone-texto">
                <img className="icone-usuario" src={usuario} alt="icone-usuario"/>
                <h4>{titulo}</h4>
              </div>
              <h3>{autor}</h3>
              <h3>{view}</h3>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  )
}

export default App