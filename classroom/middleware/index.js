const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(time, req.method, req.url);
    next();
}

// /marks?key=2001 only this is allowed

const verifyKey = (req, res, next) => {
    const { key } = req.query;
    if (+key === 2001) {
        next();
    } else {
        res.send("invalid key");
    }
}

app.use(logger);
app.use(verifyKey);

app.get('/marks', (req, res) => {
    const marks = [10, 2, 3];
    res.send(marks);
})

app.listen(3000, () => console.log('working'));