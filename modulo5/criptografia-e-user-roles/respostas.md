## Exercício 1:
a) Round é a quantidade de tempo que vai levar para o algoritmo gerar o hash e salt é uma string aletória que é adicionada antes de criar o hash. O valor recomendado para o round é 12. Eu usei o valor recomendado, porque ele é o valor padrão na maioria das libs.

## Exercício 2:
a) O cadastro, porque é no cadastro que o hash vai ser guardado no banco de dados, no login o hash é buscado no banco de dados para ser comparado com a senha enviada pelo usuário.

d) Não é necessário modificar esse endpoint, porque a senha do usuário não é verificada nessa requisição.

## Exercício 3:
a)
```
ALTER TABLE introducao_autenticacao_Users
ADD COLUMN role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL";
```