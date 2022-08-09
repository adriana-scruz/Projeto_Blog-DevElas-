-- SQLite
DROP TABLE IF EXISTS receitas;

CREATE TABLE receitas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    autor TEXT NOT NULL,
    receita TEXT NOT NULL,
    categoria TEXT NOT NULL
);

SELECT * FROM receitas;

INSERT INTO receitas (autor, receita, categoria)
VALUES('Autora Misteriosa','Melhor receita de lasanha','Massas');