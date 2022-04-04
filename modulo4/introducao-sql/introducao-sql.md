### Exercício 1:
a) VARCHAR() é utilizado para strings com o número máximo de caracteres sendo específicado dentro dos parênteses.
PRIMARY KEY é utilizada como um identificador único de cada item.
NOT NULL é utilizado para quando não queremos que uma coluna tenha valores nulos.
DATE é utilizado para representar datas.

b) Com o comando SHOW DATABASES eu recebi como resultado bancos de dados, que no meu caso é apenas um que foi criado pela Labenu.
Com o comando SHOW TABLES eu recebi como resultado a tabela Actor que eu criei para este exercício.

c) O que eu recebi como resultado com o comando DESCRIBE Actor foram todas as colunas que eu criei para essa tabela e os tipos que são permitidos para cada coluna.

### Exercício 2:
a)
```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");
```

b) O erro gerado diz que o valor "002" que eu inseri para a coluna do id, está sendo duplicado. Este erro ocorreu porque a coluna do id foi estabelecida como PRIMARY KEY e não pode receber dois valores iguais.

c) O erro diz que a quantidade de colunas não é igual à quantidade de colunas da linha 1. Esse erro ocorreu porque a linha 1 tem apenas 3 colunas que vão receber valores, mas nós colocamos 5 dentro da linha que recebe os valores. Para corrigir esse erro, temos apenas que adicionar as propriedades que estão faltando na linha 1.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
```

d) O erro diz que a propriedade 'name' não tem um valor padrão. Esse erro ocorreu porque não definimos nenhum valor padrão para esse coluna quando criamos essa tabela. Para corrigir esse erro, temos que adicionar um valor para a propriedade 'name'.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("004", "Antônio Fagundes", 400000, "1949-04-18", "male");
```

e) O erro diz que um valor da data incorreto foi adicionado. Esse erro ocorreu porque não foram colocadas aspas duplas no valor da data. Para corrigir esse erro devemos adicionar aspas em volta do valor da data.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
```

### Exercício 3:
a)
```
SELECT * FROM Actor
WHERE gender = "female";
```

b)
```
SELECT salary FROM Actor
WHERE name = "Tony Ramos";
```

c) O resultado foi uma linha com todos os valores nulos, eu acho que eu recebi esse resultado porque não existe nenhum ator com o gender igual a "invalid".

```
SELECT * from Actor
WHERE gender = "invalid";
```

d)
```
SELECT id, name, salary from Actor
WHERE salary < 500000;
```

e) O erro gerado diz que a coluna 'nome' é desconhecida nesta tabela. Esse erro ocorreu porque o nome da coluna foi escrito errado, então o workbench não reconheceu essa coluna. Para corrigir esse erro precisamos apenas escrever o nome certo no comando.

```
SELECT id, name from Actor 
WHERE id = "002"
```

### Exercício 4:
a) Essa query vai selecionar todas as informações dos atores que começam com A ou J e com salário acima de 300000. O operador LIKE compara as informações na coluna com o que foi escrito na query. Então utilizamos o LIKE depois do name para fazermos essa comparação. Começamos a string com A e colocamos o símbolo %, que indica que qualquer outro valor pode fazer parte dessa string. Adicionamos OR porque o nome vai começar com A OU com J. Depois fazemos o mesmo, substituindo o A pelo J, e adicionamos AND porque queremos a próxima condição em conjuto com a comparação do name. E por fim para selecionarmos apenas salários acima de 300000 usamos o operador > para o salary.

b)
```
SELECT * from Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * from Actor
WHERE name LIKE "%G%";
```

d)
```
SELECT * from Actor
WHERE (name LIKE "%A%" OR "%G%") AND (salary > 350000 AND salary < 900000);
```

### Exercício 5:
a) Para o id eu usei VARCHAR e PRIMARY KEY para essa coluna receber strings e não receber valores duplicados.
Para o name eu usei VARCHAR e NOT NULL para poder receber strings e não poder ficar sem valor.
Para a sinopse eu usei TEXT e NOT NULL para receber strings com mais caracteres e não ficar sem valor.
Para a data de lançamento eu usei DATE e NOT NULL para receber strings de datas e não ficar sem valor.
Para a avaliação eu usei TINYINT para essa coluna receber um número inteiro de 0 a 10.

```
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT
);
```

b)
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES ("001", 
	"Se Eu Fosse Você", 
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
);
```

c)
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES ("002", 
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES ("003",
	"Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES ("004",
	"Minha Mãe é Uma Peça",
    "Sentindo-se menosprezada pelos filhos, Dona Hermínia busca refúgio na casa da tia, onde recorda as dificuldades e tribulações de ser mãe.",
    "2013-06-21",
    9
);
```


### Exercício 6:
a)
```
SELECT id, name, rating FROM Movies
WHERE id = "002";
```

b)
```
SELECT * FROM Movies
WHERE name = "Dona Flor e Seus Dois Maridos";
```

c)
```
SELECT id, name, synopsis FROM Movies
WHERE rating > 7;
```

### Exercício 7:
a)
```
SELECT * FROM Movies
WHERE name LIKE "%vida%";
```

b)
```
SELECT * FROM Movies
WHERE name LIKE "%mãe%" OR synopsis LIKE "%mãe%";
```

c)
```
SELECT * FROM Movies
WHERE release_date < "2022-05-04";
```

d)
```
SELECT * FROM Movies
WHERE release_date < "2022-05-04" AND (name LIKE "%mãe%" OR synopsis LIKE "%mãe%") AND rating > 7
```