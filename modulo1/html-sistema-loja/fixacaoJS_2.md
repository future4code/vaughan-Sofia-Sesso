```
function calculaPrecoTotal(quantidade) {
  let total
  if (quantidade < 12) {
    total = quantidade * 1.30
  } else {
    total = quantidade * 1
  }
  return total
}
```