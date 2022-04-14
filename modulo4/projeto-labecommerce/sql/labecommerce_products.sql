CREATE TABLE labecommerce_products (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  image_url TEXT NOT NULL
);
DESCRIBE labecommerce_products;
SELECT
  *
FROM
  labecommerce_products;