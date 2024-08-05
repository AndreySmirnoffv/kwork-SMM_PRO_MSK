const mysql = require('mysql')

const pool = mysql.createConnection({
    host: process.env.HOST,
    user: "",
    password: "",
    database: ""
})

pool.connect(error => {
    if(error){
        throw error
    }
    console.log("Connected to Mysql")
})

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY,
    chatId BIGINT,
    username VARCHAR(255)
    admin BOOLEAN
    )
`

const createOrdersTableYA = `
    CREATE TABLE IF NOT EXIXTS orders (
    orderId INT AUTO_INCREMENT PRIMARY KEY
    userId BIGINT
    orderDetails TEXT
    FOREIGN KEY (userId) REFERENCES users(id))    
`

const createOrdersTableAV = `
    CREATE TABLE IF NOT EXIXTS orders (
    orderId INT AUTO_INCREMENT PRIMARY KEY
    userId BIGINT
    orderDetails TEXT
    FOREIGN KEY (userId) REFERENCES users(id))    
`
const createFeedbackTable = `
    CREATE TABLE IF NOT EXIXTS orders (
    orderId INT AUTO_INCREMENT PRIMARY KEY
    userId BIGINT
    orderDetails TEXT
    FOREIGN KEY (userId) REFERENCES users(id))    
`

const createPaymentTable = `
    CREATE TABLE IF NOT EXISTS payment (
    paymentId BIGINT
    userId BIGINT
    paymentDate INT
    amount: INT
    paymentMethod: TEXT
    )
`

const createRefTable = `
    CREATE TABLE IF NOT EXISTS ref (
    fromId BIGINT
    originalLink TEXT
    amountClicks INT
    amountComments INT
    )
`
pool.query(createUsersTable, (error, results) => {
    if(error) throw error
    console.log("Users table created")
})

pool.query(createOrdersTableYA, (error, results) => {
    if(error) throw error
    console.log("Orders table created")
})

pool.query(createOrdersTableAV, (error, results) => {
    if(error) throw error
    console.log("Orders table created")
})

pool.query(createFeedbackTable, (error, results) => {
    if(error) throw error
    console.log("Orders table created")
})

module.exports = pool
