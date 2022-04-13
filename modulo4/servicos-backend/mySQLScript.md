### Script para criar a tabela do exercício 2:

```
CREATE TABLE aula_servico_backend (
	id VARCHAR(255) PRIMARY KEY,
	zipcode VARCHAR(255) NOT NULL,
	street VARCHAR(255) NOT NULL,
	number VARCHAR(255) NOT NULL,
	complement VARCHAR(255),
	neighbourhood VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	state VARCHAR(255) NOT NULL
);
```