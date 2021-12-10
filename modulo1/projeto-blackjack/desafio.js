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

// ainda estou trabalhando neste desafio

// console.log("Boas vindas ao jogo de Blackjack!")

// const cartaUsuario1 = comprarCarta()
// const cartaUsuario2 = comprarCarta()
// const cartaComputador1 = comprarCarta()
// const cartaComputador2 = comprarCarta()

// while (confirm("Quer iniciar uma nova rodada?")) {
//    if ((cartaUsuario1.texto && cartaUsuario2.texto).includes("A")) {
//       console.log("Um dos jogadores recebeu dois ases. Reinicia o jogo")
//    } else if (confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador1.texto}\nDeseja comprar mais?`)) {
//       const cartaUsuario3 = comprarCarta()
//       const cartaComputador3 = comprarCarta()

//       if (cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor < 21) {
//          const cartaComputador4 = comprarCarta()
//          const soma = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor + cartaComputador4.valor
//          return soma
//       }

//       if (cartaUsuario1.valor + cartaUsuario2.valor + cartaUsuario3.valor < 21) {
//              confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3}. A carta revelada do computador é ${cartaComputador1.texto}\nDeseja comprar mais?`)
//       } else if (cartaUsuario1 + cartaUsuario2 + cartaUsuario3 >
//          cartaComputador1 + cartaComputador2 + cartaComputador3 && 
//          cartaUsuario1 + cartaUsuario2 + cartaUsuario3 <= 21) {}
   
//    }
// }