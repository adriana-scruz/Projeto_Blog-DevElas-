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
    
    findbyCategoryId(categoryId, callback) {
        this.db.all(`SELECT * FROM receitas WHERE categoryId = ?`, categoryId, callback);
    }
}

module.exports = (conn) =>{
    return new receitasDAO(conn);
}