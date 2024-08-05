const pool = require("./connect");

function checkUserExits(id, callback){
    pool.query('SELECT * FROM users WHERE ID = ?', [id], (error, results) => {
        if(error) return callback(err, null)
        callback(null, results.length > 0)
    })
}


function addUser(id, chatId, username, callback){
    const query = 'INSERT INTO users (id, chatId, username) VALUES (?, ?, ?)';
    pool.query(query, [id, chatId, username], (error, results) => {
        if(error) return callback(error);
        callback(null)
    })
}


module.exports = {
    checkUserExits: checkUserExits,
    addUser: addUser
}