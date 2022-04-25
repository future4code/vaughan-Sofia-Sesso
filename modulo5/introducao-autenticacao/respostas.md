## Exercício 1:
a) Eu acho melhor usar strings para os ids porque temos uma variedade de caracteres muito maior do que apenas usando números.

## Exercício 2:
a) O código no exemplo tem uma função de criar usuário recebendo os parâmetros id, email e password. Dentro dessa função é usado o connection para inserir os dados enviados nos parâmetros na tabela, que tem o nome dado pela variável userTableName.

b)
```
CREATE TABLE introducao_autenticacao_Users (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
);
```

## Exercício 3:
a) Essa linha garante para o typescript que o valor recebido no process.env.JWT_KEY é uma string. Precisamos usar ela porque undefined pode ser atribuído a esse valor também.

## Exercício 7:
a) Essa linha diz para o typescript que o valor do payload será de qualquer tipo, ela precisa ser usada porque podemos enviar qualquer informação que quisermos dentro do payload.