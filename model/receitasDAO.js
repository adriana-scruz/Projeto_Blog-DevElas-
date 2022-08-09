class receitasDAO {
    constructor(conn){
        this.db = conn;
    }

    findAll(callback){
        this.db.all(`SELECT * FROM receitas`, callback);
    }
    findById(id, callback) {
        this.db.get(`SELECT * FROM receitas WHERE id = ?`, id, callback);
    }
    findByAutor(id, callback) {
        this.db.get(`SELECT * FROM receitas WHERE autor = ?`, autor, callback);
    }
    
    findbyCategoryId(categoryID, callback) {
        this.db.all(`SELECT * FROM receitas WHERE categoryId = ?`, categoryID, callback);
    }

    saveReceita(receita, callback) {
        const {titulo,url,image,ingredientes,preparo,categoryID,local,nivel,autor } = receita;
        this.db.run(
          `INSERT INTO receitas (titulo,url,image,ingredientes,preparo,categoryID,local,nivel,autor)
           VALUES (?,?,?,?,?,?,?,?,?)`,
          [ titulo,url,image,ingredientes,preparo,categoryID,local,nivel,autor],
          callback
        );
      }
}

module.exports = (conn) =>{
    return new receitasDAO(conn);
}