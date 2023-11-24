'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.disable('x-powered-by')


const connection = mysql.createConnection({
    host: "172.23.34.132",
    user: "nodejs",
    password: "nodejs",
    database: "MemoApp"
});

app.route('/')
    .get((req, res) => {
        connection.query(
            'SELECT * FROM memo',
            (error, results) => {
                if (error) {
                    console.log(error);
                }
                res.render('index.ejs', {items: results});
            }
        );
    })
    .post((req, res) => {
        connection.query(
            'INSERT INTO memo (title, content) VALUES (?, ?)',
            [req.body.addItemTitle, req.body.addItemContent],
            (error, results) => {
                if (error) {
                    console.log(error);
                }
                res.redirect('/');
            }
        );
    })

app.route('/test')
    .get((req, res) => {
        res.json({test: 'test'});
    })


const port = 3000;
app.listen(port);