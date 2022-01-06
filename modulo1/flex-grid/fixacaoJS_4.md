```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const arrayComNumeroEscolhido = arrayDeNumeros.filter ((numero) => {
    return numero === numeroEscolhido
  })
  
  const quantidadeDoNumeroEscolhido = arrayComNumeroEscolhido.length
  
  if (quantidadeDoNumeroEscolhido > 0) {
    return `O número ${numeroEscolhido} aparece ${quantidadeDoNumeroEscolhido}x`
  } else {
    return `Número não encontrado`
  }
}
```