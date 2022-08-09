-- SQLite
DROP TABLE IF EXISTS categories;

CREATE TABLE categories(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
	image TEXT NOT NULL
);

INSERT INTO categories (name, image) VALUES ('Massas', '../public/imagens/categorias/massas.jpg');
INSERT INTO categories (name, image) VALUES ('Guarnição', '../public/imagens/categorias/guarnicao.jpg');
INSERT INTO categories (name, image) VALUES ('Entrada', '../public/imagens/categorias/entrada.jpg');
INSERT INTO categories (name, image) VALUES ('Principal', '../public/imagens/categorias/principal.jpg');
INSERT INTO categories (name, image) VALUES ('Sobremesa', '../public/imagens/categorias/sobremesas.jpg');
INSERT INTO categories (name, image) VALUES ('Pão', '../public/imagens/categorias/pao.jpg');
INSERT INTO categories (name, image) VALUES ('Caldo', '../public/imagens/categorias/caldos.jpg');

DROP TABLE IF EXISTS receitas;

CREATE TABLE receitas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    url TEXT,
    image TEXT NOT NULL,
    ingredientes TEXT NOT NULL,
    preparo TEXT NOT NULL,
    categoryID INTEGER NOT NULL,
    local TEXT NOT NULL,
    nivel TEXT NOT NULL,
    autor TEXT NOT NULL,
    stars INTEGER DEFAULT 1
);

SELECT * FROM receitas;
SELECT * FROM categories;

INSERT INTO receitas (titulo, image, ingredientes, preparo, categoryID, local, nivel, autor)
VALUES('Babaganuche','../images/babaganouche.png','2 berinjelas grandes e picadas. 1 cebola grande e picada. 2 cabeças de alho.
2 colheres de sopa de azeite. 1 colher de sopa de orégano.
1 colher de sopa de manjericão. Sal e pimenta a gosto',
'Refogue as berinjelas no azeite com a cebola e o alho. 
Em seguida, coloque tudo no liquidificador e vá acrescentando o orégano e o manjericão.
Coloque num recipiente com tampa e cubra com azeite. Conserve na geladeira até a hora de servir.
Sirva com torradas ou pão sírio torrado.',
'1','árabe','Fácil','Mohamed');

INSERT INTO receitas (titulo, image, ingredientes, preparo, categoryID, local, nivel, autor,stars)
VALUES('Charuto','../images/charuto.jpg','1 repolho médio. 1/2 kg carne moída.
1/2 kg arroz. 2 tomates médios. Extrato de tomate a gosto sal,
pimenta, cebola, alho e outros condimentos à gosto',
'Cozinhe o repolho em uma panela que o caiba de modo que
possa ir tirando as folhas cozidas de fora para dentro do
repolho, não é necessário cozê-lo muito é só para amolecer
as folhas. 2º Misture todos os outros ingredientes,
formando uma massa. 3º Coloque massa em folhas de repolho
e enrole, não colocar muito, pois o arroz vai crescer.
4º Colocando tudo em uma panela com água quente e a 
água deve estar temperada para passar tempero às folhas 
de repolho. 5º Pode servi-lo com limão e azeite de Oliva,
outro prato pode acompanhar, mas é bom que se tenha um 
molho do cozido dos charutos.',
'2','árabe','Médio','Mohamed','3');