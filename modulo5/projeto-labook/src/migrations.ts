import { BaseDatabase } from "./data/BaseDatabase"

class Migrations extends BaseDatabase {
    createTables = async (): Promise<void> => {
        this.connection
            .raw(`
        CREATE TABLE IF NOT EXISTS labook_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS labook_posts(
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
        );

        CREATE TABLE IF NOT EXISTS labook_friendships(
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labook_users (id),
            friend_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (friend_id) REFERENCES labook_users (id)
        );
    `)
            .then(console.log)
            .catch(console.log)
    }
}

const migrations: Migrations = new Migrations()
migrations.createTables()