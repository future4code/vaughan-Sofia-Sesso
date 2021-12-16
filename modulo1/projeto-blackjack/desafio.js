/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const cartasUsuario = []
const cartasComputador = []

function comprarCartasParaOsDoisJogadores () {
   cartasUsuario.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   
}

if (confirm("Bem-vindo ao jogo de Blackjack!\nQuer iniciar uma rodada?")) {
   
   comprarCartasParaOsDoisJogadores()
   comprarCartasParaOsDoisJogadores()

   const textoCartasUsuario = cartasUsuario.map((carta) => {
      return carta.texto
   })

   const valorCartasUsuario = cartasUsuario.map((carta) => {
      return carta.valor
   })

   const tem2AsesUsuario = cartasUsuario.filter((carta) => {
      return carta.texto.includes("A")
   })
      
   const somaValoresUsuario = valorCartasUsuario.reduce((total, elemento) => {
      return total += elemento
   })

   const textoCartasComputador = cartasComputador.map((carta) => {
      return carta.texto
   })

   const tem2AsesComputador = cartasComputador.filter((carta) => {
      return carta.texto.includes("A")
   })

   const valorCartasComputador = cartasComputador.map((carta) => {
      return carta.valor
   })

   const somaValoresComputador = valorCartasComputador.reduce((total, elemento) => {
      return total += elemento
   })
     
   if (confirm(`Suas cartas são ${textoCartasUsuario}, deseja comprar?`)) {
      comprarCartasParaOsDoisJogadores()
   }
  
   if (tem2AsesUsuario.length === 2 || tem2AsesComputador.length === 2) {
      alert("Um dos jogadores recebeu dois ases. Acabou o jogo")
   } else {
      while (somaValoresUsuario < 21) { 
         if (confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${textoCartasComputador[0]}
      Deseja comprar mais umas carta?`)) {

            comprarCartasParaOsDoisJogadores()
            
            console.log(somaValoresUsuario)

         } else { 
            if (somaValoresUsuario > somaValoresComputador && somaValoresUsuario <= 21) {
               alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaValoresUsuario}.\nAs cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaValoresComputador}\nVocê ganhou!`)

            } else if (somaValoresComputador > somaValoresUsuario && somaValoresComputador <= 21) {
               alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaValoresUsuario}.\nAs cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaValoresComputador}\nO computador ganhou!`)

            } else if (somaValoresUsuario > 21 && somaValoresComputador <= 21) {
               alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaValoresUsuario}.\nAs cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaValoresComputador}\nO computador ganhou!`)

            } else if (somaValoresComputador > 21 && somaValoresUsuario <= 21) {
               alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaValoresUsuario}.\nAs cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaValoresComputador}\nVocê ganhou!`)

            } else if (somaValoresUsuario === somaValoresComputador) {
               alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaValoresUsuario}.\nAs cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaValoresComputador}\nEmpate!`)
            }
         }
          
      }
   }
      
} else {
   alert("O jogo acabou")
}