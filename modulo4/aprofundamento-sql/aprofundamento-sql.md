### Exercício 1:
a) Esse comando vai deletar a coluna salary da tabela Actor.

b) Esse comando vai alterar o nome da coluna gender para sex.

c) Esse comando vai alterar a quantidade de caracteres da coluna gender de 6 para 255.

d)
```
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

### Exercício 2:
a)
```
UPDATE Actor
SET name = "Carrie Fisher", birth_date = "1956-10-21"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";
```

```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET name = "Keanu Reeves", salary = "8000000", birth_date = "1964-09-02", gender = "male"
WHERE id = "005";
```

d) O erro que eu recebi ao tentar atualizar um dado que não existe na tabela, diz que eu estou tentando atualizar uma coluna desconhecida. Quando eu tentei atualizar as informações de um ator com um id não existente, eu não recebi um erro, mas a alteração que eu fiz não modificou nenhuma linha.

### Exercício 3:
a)
```
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4:
a)
```
SELECT MAX(salary)
FROM Actor;
```

b)
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c)
```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d)
```
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5:
a) Essa query devolve a quantidade de atores divididos por gender, então ela devolve a quantidade de dois grupos, um com atores com gender igual a male e outro com gender igual a female.

b)
```
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6:
a)
```
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movies
CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movies
SET playing_limit_date = "2022-04-01"
WHERE id = "002";

UPDATE Movies
SET playing_limit_date = "2022-05-01"
WHERE id = "004";
```

d) Eu não recebi um erro ao tentar atualizar a sinopse de um filme deletado, mas a alteração que eu fiz não afetou nenhuma linha da tabela.

### Exercício 7:
a)
```
SELECT COUNT(*)
FROM Movies
WHERE rating > 7.5;
```

b)
```
SELECT AVG(rating)
FROM Movies;
```

c)
```
SELECT COUNT(*)
FROM Movies
WHERE release_date < CURDATE()
AND playing_limit_date > CURDATE();
```

d)
```
SELECT COUNT(*)
FROM Movies
WHERE release_date > CURDATE();
```

e)
```
SELECT MAX(rating)
FROM Movies;
```

f)
```
SELECT MIN(rating)
FROM Movies;
```

### Exercício 8:
a)
```
SELECT * FROM Movies
ORDER BY title ASC;
```

b)
```
SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;
```

c)
```
SELECT * FROM Movies
WHERE playing_limit_date > CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

d)
```
SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3;
```