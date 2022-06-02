create TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    dat INTEGER,
    typ VARCHAR(255)
);

create TABLE works(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    secbody VARCHAR(255),
    img VARCHAR(255),
    dat INTEGER,
    typ VARCHAR(255)
);