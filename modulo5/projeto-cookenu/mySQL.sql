CREATE TABLE Cookenu_User (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE Cookenu_Recipe (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at DATE NOT NULL,
  creator_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (creator_id) REFERENCES Cookenu_User(id)
);
CREATE TABLE Cookenu_User_Following (
  id VARCHAR(255) PRIMARY KEY,
  follower_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (follower_id) REFERENCES Cookenu_User(id),
  user_to_follow_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_to_follow_id) REFERENCES Cookenu_User(id)
);