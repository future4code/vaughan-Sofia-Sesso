### Exercício 1:
a) É um identificador de um elemento de outra tabela que referencia o PRIMARY KEY daquele elemento.

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("abc", "Foi um filme ok.", 6, "001"),
	("def", "Dormi no meio desse filme", 4.5, "002"),
    ("ghi", "Legalzinho até", 6.5, "003"),
    ("jkl", "Morri de rir", 7, "004"),
    ("mno", "Melhor filme de ação que eu já assisti", 10, "005"),
    ("pqr", "Assisto esse filme pelo menos uma vez por semana", 9.5,"006"),
    ("stu", "Um clássico!", 9, "007");
```

c) O erro que eu recebi diz que essa linha não pode ser atualizada porque o foreign key do filme que eu passei não existe na tabela Movies.
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("vwx", "Muito Bom", 9, "008");
```

d)
```
ALTER TABLE Movies
DROP COLUMN rating;
```

e) O erro que eu recebi diz que a coluna que eu passei no where do meu delete é desconhecida.
```
DELETE FROM Movies
WHERE rating = "8";
```

### Exercício 2:
a) Essa tabela vai representar quais atores fazem parte de quais filmes, então ela vai ter o id do ator, que será o mesmo id da tabela de atores e o id do filme que será o mesmo da tabela de filmes. Cada linha terá um ator e o filme no qual ele participou, e todos os atores e filmes poderão ser repetidos em outras linhas, pois a relação entre eles é n:m, ou seja, um ator pode fazer parte de vários filmes e um filme pode conter vários atores.

b)
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001", "001"), ("001", "002"),
    ("002", "003"), ("002", "005"),
    ("003", "001"), ("003", "004"),
    ("004", "007"), ("004", "006"),
    ("005", "005"), ("005", "002"),
    ("006", "003"), ("006", "007"),
    ("007", "004"), ("007", "006");
```

c) O erro diz que a linha não pode ser adicionada porque o id do foreign key do filme que eu passei não existe na tabela Movies.
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("008", "001");
```

d) O erro diz que a linha não pode ser apagada por causa da foreign key, que está referenciando o id do ator na tabela MovieCast.
```
DELETE FROM Actor
WHERE id = "007";
```

### Exercício 3:
a) A query está selecionando todas as informações da tabela Movie e está juntando essas informações com as da tabela Rating. O operador ON serve para especificar quais colunas de cada tabela serão comparadas, e em cada linha, ao encontrar valores iguais nas duas colunas, as informações serão juntadas.

b)
```
SELECT title, movie_id, rate
FROM Movies
JOIN Rating
ON Movies.id = Rating.movie_id;
```

### Exercício 4:
a)
```
SELECT title, movie_id, rate, comment
FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id;
```

b)
```
SELECT movie_id, title, actor_id
FROM MovieCast
JOIN Movies
ON MovieCast.movie_id = Movies.id;
```

c)
```
SELECT AVG(rate) AS rating_average, title
FROM Rating
JOIN Movies
ON Rating.movie_id = Movies.id
GROUP BY title;
```

### Exercício 5:
a) Essa query está agrupando as informações de 3 tabelas. Uma de atores, uma de filmes, e uma da relação entre os atores e os filmes, então sem essa terceira tabela, não haveria uma maneira de juntas as duas primeiras tabelas. Essa query tem dois JOINs, pois o primeiro está juntando as informações das tabelas de filmes e elencos, e o segundo está juntando as informações das tabelas de atores e elencos.

b)
```
SELECT movie_id, title, actor_id,  name as actor_name
FROM MovieCast
JOIN Movies
ON Movies.id = MovieCast.movie_id
JOIN Actor
ON MovieCast.actor_id = Actor.id;
```

c) O uso do LEFT JOIN devolve todos os filmes mesmo se eles não foram adicionados à tabela MovieCast. Para corrigir esse problema podemos utilizar apenas JOIN, ou colocar MovieCast depois do FROM e Movie depois do JOIN, assim todos os filmes que aparecerão nessa busca são filmes que estão presentes na tabela MovieCast.

d)
```
SELECT title, name as actor_name, rate, comment
FROM Movies
LEFT JOIN MovieCast
ON Movies.id = MovieCast.movie_id
LEFT JOIN Actor
ON MovieCast.actor_id = Actor.id
LEFT JOIN Rating
ON Movies.id = Rating.movie_id;
```

## Exercício 6:
a) É uma relação M:N porque uma categoria tem ganhadores todos os anos, e um filme pode ganhar várias categorias.

b)
```
CREATE TABLE OscarWinner (
	name VARCHAR(255) NOT NULL,
    movie_title VARCHAR(255) NOT NULL,
    winning_date DATE NOT NULL,
    movie_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

c)
```
INSERT INTO OscarWinner (name, winning_date, movie_id)
VALUES ("Melhor filme", "2007-02-01", "001"), ("Melhor atriz", "2007-02-01", "001"),
	("Melhor atriz", "2013-02-01", "002"), ("Melhor direção", "2013-02-01", "002"),
	("Melhor atriz", "2018-02-01", "003"), ("Melhor cinematografia", "2018-02-01", "003"),
    ("Melhor cinematografia", "2018-02-01", "004"), ("Melhor direção", "2018-02-01", "004"),
    ("Melhor ator", "2018-02-01", "005"), ("Melhor trilha sonora", "2018-02-01", "005"),
    ("Melhor trilha sonora", "2018-02-01", "006"), ("Melhor filme", "2018-02-01", "006"),
    ("Melhor ator", "1986-02-01", "007"), ("Melhor direção", "1986-02-01", "007");
```

d)
```
SELECT name as orcar_name, title as movie_title, winning_date 
FROM OscarWinner
JOIN Movies
ON OscarWinner.movie_id = Movies.id;
```