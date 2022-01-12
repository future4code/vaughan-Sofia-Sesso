import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import IconeHeader from './components/IconesHeader/IconesHeader'
import ImagemButton from './components/ImagemButton/ImagemButton'
import aliancaCultural from './img/alianca-cultural.png'
import casa from './img/casa.svg'
import cbu from './img/cbu.jpg'
import email from './img/email.svg'
import endereco from './img/endereco.svg'
import escola from './img/escola.svg'
import exo from './img/exo.svg'
import foto from './img/foto-minha.jpg'
import github from './img/github.svg'
import hbc from './img/hbc.jfif'
import labenu from './img/labenu.png'
import mcdonalds from './img/mcdonalds.png'
import mensagens from './img/mensagens.svg'
import menu from './img/menu.svg'
import minhaRede from './img/minha-rede.svg'
import notificacoes from './img/notificacoes.svg'
import usuario from './img/usuario.svg'
import vagas from './img/vagas.svg'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <input placeholder='Buscar'/>
        </div>

        <div className="container-icones">
          <IconeHeader
            imagem={casa}
            texto="Início"
          />

          <IconeHeader
            imagem={minhaRede}
            texto="Minha Rede"
          />

          <IconeHeader
            imagem={vagas}
            texto="Vagas"
          />

          <IconeHeader
            imagem={mensagens}
            texto="Mensagens"
          />

          <IconeHeader
            imagem={notificacoes}
            texto="Notificações"
          />

          <IconeHeader
            imagem={usuario}
            texto="Usuário"
          />

          <IconeHeader
            imagem={menu}
            texto="Menu"
          />
        </div>
      </header>

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Sofia Pitta Sesso" 
          descricao="Oi, eu sou a Sofia. Sou aluna da Labenu e professora particular de inglês.
          Estou curtindo aprender sobre React e continuar praticando CSS, HTML e JavaScript."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          titulo="E-mail:"
          informacao="sofiapittasesso@gmail.com"
        />

        <CardPequeno
          imagem={endereco}
          titulo="Endereço:"
          informacao="Rua de Mentira 123"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem={escola} 
          nome="Ensino Fundamental e Médio" 
          descricao="Anglo, Liceu, Dom Bosco, Colégio Luiz de Queiroz" 
        />
        
        <CardGrande 
          imagem={cbu} 
          nome="Ensino Superior" 
          descricao="Cape Breton University - Bachelor of Engineering Technology (Petroleum)" 
        />
        
        <CardGrande 
          imagem={labenu} 
          nome="Curso Técnico" 
          descricao="Labenu - Frontend/Backend" 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={hbc} 
          nome="Hudson's Bay Company" 
          descricao="Vendedora na seção de sapatos" 
        />
        
        <CardGrande 
          imagem={mcdonalds} 
          nome="McDonald's" 
          descricao="Trabalhei no caixa e no drive thru" 
        />
        
        <CardGrande 
          imagem={exo} 
          nome="Exo Gestão de Produtos Químicos" 
          descricao="Freelance" 
        />

        <CardGrande 
          imagem={aliancaCultural} 
          nome="Aliança Cultural Idiomas" 
          descricao="Professora particular de inglês" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />

        <ImagemButton 
          imagem={github} 
          texto="GitHub" 
        />

      </div>
    </div>
  );
}

export default App;
