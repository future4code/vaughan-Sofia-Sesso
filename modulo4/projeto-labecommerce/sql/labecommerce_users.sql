CREATE TABLE labecommerce_users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
DESCRIBE labecommerce_users;
SELECT
  *
FROM
  labecommerce_users;