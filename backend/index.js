const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// const db = mysql.createPool({
//     host: 'mysql_db',
//     user: 'MYSQL_USER',
//     password: 'MYSQL_PWD',
//     database: 'inventory'
// });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors);
// const corsOptions = {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }
// app.get('/api/v1/inventory', cors(corsOptions), (req, resp) => {
app.get('/api/v1/inventory', cors(), (req, resp) => {
    console.log("/api/v1/inventory GET")
    const query = "SELECT * FROM inventory_items;";
    // db.query(query, (err, result) => {
    //     resp.send(result);
    // });
    resp.send({
        items: [
            { name: "Item1", category: "GEN", price: 50.00 },
            { name: "Item2", category: "SPL", price: 100.00 },
            { name: "Item3", category: "NEW", price: 10.00 },
            { name: "Item4", category: "NEW", price: 40.00 },
            { name: "Item5", category: "OLD", price: 500.00 }
        ]
    });
});

app.get('/', (req, resp) => {
    resp.send("Welcome to backend!");
});

app.listen('5050', () => {
    console.log("Backend is up on port:5050")
});