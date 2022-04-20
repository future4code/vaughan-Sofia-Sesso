CREATE TABLE labecommerce_purchases (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
  product_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
  quantity INT NOT NULL,
  total_price FLOAT NOT NULL
);
DESCRIBE labecommerce_purchases;
SELECT
  *
FROM
  labecommerce_purchases;