const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = express.Router();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/save', (req, res) => {
    const sqlQuery = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
 `;

    let data = req.body;
    let sqlParams = [data.feeling, data.understanding, data.support, data.comments];

    router.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error in app.post', err);
            res.sendStatus(500);
        });
});


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});