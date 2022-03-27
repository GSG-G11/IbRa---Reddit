BEGIN;

DROP TABLE IF EXISTS users, posts, vote, commnets CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    image text,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    media text ,
    user_id INTEGER REFERENCES users(id) on DELETE CASCADE
);

CREATE TABLE vote (
    post_id INTEGER REFERENCES posts(id) on DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) on DELETE CASCADE,
    vote BOOLEAN NOT NULL,
    PRIMARY KEY (post_id, user_id)
);

CREATE TABLE commnets (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id) on DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) on DELETE CASCADE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (name, email, image, password) values
('mo7amed', 'mo7amed@gmail.com', 'image_url', 'Test1234');

INSERT INTO posts (content, media, user_id) values
('this is', 'imgUrl', 1);



COMMIT;