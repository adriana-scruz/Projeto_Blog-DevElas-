-- SQLite
DROP TABLE IF EXISTS categories;
CREATE TABLE categories(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL
);
INSERT INTO categories (name, image)
VALUES ('Massas', 'massas.jpg');
INSERT INTO categories (name, image)
VALUES ('Guarnição', 'guarnicao.jpg');
INSERT INTO categories (name, image)
VALUES ('Entrada', 'entrada.jpg');
INSERT INTO categories (name, image)
VALUES ('Principal', 'principal.jpg');
INSERT INTO categories (name, image)
VALUES ('Sobremesa', 'sobremesas.jpg');
INSERT INTO categories (name, image)
VALUES ('Pão', 'pao.jpg');
INSERT INTO categories (name, image)
VALUES ('Caldo', 'caldos.jpg');
DROP TABLE IF EXISTS receitas;
CREATE TABLE receitas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    url TEXT DEFAULT "https://www.youtube.com/embed/S5_o5Y2dRJY",
    image TEXT NOT NULL,
    ingredientes TEXT NOT NULL,
    preparo TEXT NOT NULL,
    categoryID INTEGER NOT NULL,
    local TEXT NOT NULL,
    nivel TEXT NOT NULL,
    autor TEXT NOT NULL,
    stars INTEGER DEFAULT 1
);
SELECT *
FROM receitas;
SELECT *
FROM categories;
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor
    )
VALUES(
        'Babaganuche',
        'babaganuche.png',
        '2 berinjelas grandes e picadas. 1 cebola grande e picada. 2 cabeças de alho.
2 colheres de sopa de azeite. 1 colher de sopa de orégano.
1 colher de sopa de manjericão. Sal e pimenta a gosto',
        'Refogue as berinjelas no azeite com a cebola e o alho. 
Em seguida, coloque tudo no liquidificador e vá acrescentando o orégano e o manjericão.
Coloque num recipiente com tampa e cubra com azeite. Conserve na geladeira até a hora de servir.
Sirva com torradas ou pão sírio torrado.',
        '1',
        'árabe',
        'Fácil',
        'Mohamed'
    );
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Charuto',
        'charuto.png',
        '1 repolho médio. 1/2 kg carne moída.
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
        '2',
        'árabe',
        'Médio',
        'Mohamed',
        '3'
    );
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Dafim',
        'dafim.png',
        '250g grão de bico; 1 frango cortado em pedaços; 1 maço de salsa; 3 cebolas cortadas em fatias finas no comprimento; 5 colheres sopa de óleo; 5 colheres sopa de margarina; 2 1/2 xicaras chá de arroz lavado; 1 colher chá de pimenta síria; Óleo e sal a gosto para cozimento',
        'Cozinhe o repolho em uma panela que o caiba de modo que possa ir tirando as folhas cozidas de fora para dentro do repolho, não é necessário cozê-lo muito é só para amolecer as folhas. 2º Misture todos os outros ingredientes, formando uma massa. 3º Coloque massa em folhas de repolho e enrole, não colocar muito, pois o arroz vai crescer. 4º Colocando tudo em uma panela com água quente e a água deve estar temperada para passar tempero às folhas de repolho. 5º Pode servi-lo com limão e azeite de Oliva, outro prato pode acompanhar, mas é bom que se tenha um molho do cozido dos charutos',
        '3',
        'árabe',
        'Médio',
        'Mohamed',
        '5'
    );
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Leche assada',
        'leche_assada.png',
        '12 ovos; 4 xícaras de leite; 2 xícaras de açúcar granulado',
        'Numa tigela grande, bata os ovos até clarear. Coloque o açúcar e o leite e bata bem. Coloque a mistura numa assadeira e leve ao forno a 200C por uma hora. Deixe esfriar antes de servir.',
        '5',
        'boliviana',
        'Fácil',
        'Mariana',
        '2'
    );
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Majao',
        'majao.png',
        '5 xícaras de água; 225 gramas de carne seca; 1 xícara de arroz; 1/2 xícara de cebola finamente fatiada; 1/2 xícara de tomate, sem pelo, picado; 1/2 xícara de óleo; Páprica dissolvida em 1/2 xícara de água; 1/2 xícara de água; 1 colher de chá de sal',
        'Numa panela grande, coloque as 5 xícaras de água e deixe ferver em fogo alto. Quando atingir fervura, coloque a carne seca e deixe cozinhar até ficar macia. Tire a carne (não jogue fora a água) e passe-a no moedor de carne. Na água da carne, coloque o arroz e o sal e deixe cozinhar por 25 minutos em fogo médio até que o arroz esteja cozido, mas não seco. Reserve. Numa panela menor, aqueça 1/2 de xícara de óleo em fogo médio. Coloque a carne já moída e deixe fritar até dourar. Tire do fogo e reserve. Numa panela, coloque o restante 1/4 de xícara de óleo e aqueça em fogo alto. Adicione a cebola e deixe dourar. Coloque o tomate, a páprica, a 1/2 xícara de água e o sal. Deixe cozinhar por 5 minutos. Adicione então a carne já frita e mexa. Por fim, coloque a mistura da carne na panela com arroz e mexa tudo. Nota: Para um bom resultado, a mistura final não deve ser seca. Se for necessário, adicione um pouco de água.',
        '4',
        'boliviana',
        'Médio',
        'Mariana',
        '2'
    );
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Croissant',
        'dafim.png',
        '4kg de farinha de trigo; 200g de margarina; 200g de fermento biológico fresco; 200g de açúcar; 8 ovos; 80g de sal; 1800ml de água 2kg de margarina especial para folhamento; 5 colheres sopa de margarina; 2 1/2 xicaras chá de arroz lavado; 1 colher chá de pimenta síria; Óleo e sal a gosto para cozimento',
        '"Colocar todos os ingredientes na batedeira e bater durante 10 minutos até formar uma massa homogênea e enxuta. Fazer uma bola e deixar descansar por 15 minutos. Em seguida, abrir a massa em forma de um retângulo e preencher 2/3 da massa com a margarina especial. Dar três dobras de 3, descansar por 10 minutos. Modelar no tamanho desejado. Fermentar até o ponto de forno. Fornear a 220ºC.',
        '6',
        'francesa',
        'difícil',
        'Maurice',
        '3'
    );
INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Croissant',
        'dafim.png',
        '4kg de farinha de trigo; 200g de margarina; 200g de fermento biológico fresco; 200g de açúcar; 8 ovos; 80g de sal; 1800ml de água 2kg de margarina especial para folhamento; 5 colheres sopa de margarina; 2 1/2 xicaras chá de arroz lavado; 1 colher chá de pimenta síria; Óleo e sal a gosto para cozimento',
        'Colocar todos os ingredientes na batedeira e bater durante 10 minutos até formar uma massa homogênea e enxuta. Fazer uma bola e deixar descansar por 15 minutos. Em seguida, abrir a massa em forma de um retângulo e preencher 2/3 da massa com a margarina especial. Dar três dobras de 3, descansar por 10 minutos. Modelar no tamanho desejado. Fermentar até o ponto de forno. Fornear a 220ºC.',
        '6',
        'francesa',
        'difícil',
        'Maurice',
        '3'
    );

INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Pão de queijo mineiro',
        'pao_de_queijo_mineiro.png',
        '1500 g de Fécula de Mandioca; 500 g de polvilho Azedo; 1kg de queijo meia cura ralado; 10 ovos; 40 g de sal; 1 litro de leite',
        'Colocar na batedeira a fécula, polvilho, queijo e o sal e bater em primeira velocidade de 3 (três) a 4 (quatro) minutos. Acrescentar a gordura, os ovos e bater em segunda velocidade por três minutos. Colocar o leite aos poucos até obter uma massa homogênea. Bolear em tamanho desejado e fornear em temperatura 200 º C',
        '6',
        'mineira',
        'fácil',
        'Sabrina',
        '3'
    );

    INSERT INTO receitas (
        titulo,
        image,
        ingredientes,
        preparo,
        categoryID,
        local,
        nivel,
        autor,
        stars
    )
VALUES(
        'Caldo de sururu',
        'caldo_de_sururu.png',
        '1500 g de Fécula de Mandioca; 500 g de polvilho Azedo; 1kg de queijo meia cura ralado; 10 ovos; 40 g de sal; 1 litro de leite1 kg de sururu; 1 cebola cortada em pedaços pequenos; 1 tomate cortado em pedaços pequenos; 1 maço de coentro bem picado;   50 ml de azeite de dendê; 200 ml de leite de coco; 200g de amendoim torrado; 200 g de camarão seco; 4 colheres de sopa de azeite; Sal a gosto',
        'Refogue a cebola, o tomate e o sururu previamente temperado no azeite. Adicone água, um pouco de sal e espere que levante fervura. Bata os ingredientes anteriores no liquidificador, junto ao camarão e amendoim e depois devolva à panela, onde irá adicionar o leite de coco. Cozinhe por mais dez minutos e acrescente o coentro e o azeite de dendê para finalizar.',
        '7',
        'baiana',
        'médio',
        'Tatiane',
        '4'
    );