const express = require('express');
const moment = require('moment'); 
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;
const HOST = 'localhost'


const arrayPath = path.join(__dirname, "array.json")
const posts = JSON.parse(fs.readFileSync(arrayPath, "utf-8"))


function Timestamp() {
    return moment().format('YYYY-MM-DD HH:mm:ss'); 
}


app.get('/timestamp', (req, res) => {
    res.json({ timestamp: Timestamp() });
});



app.get('/posts', (req, res) => {
    let { skip, take } = req.query;
    if (skip !== undefined) {
        skip = Number(skip);
        if (isNaN(skip) || skip < 0) {
            return res.status(400).json({ error: "skip должен быть числом >= 0" });
        }
    } else {
        skip = 0;
    }
    if (take !== undefined) {
        take = Number(take);
        if (isNaN(take) || take < 0) {
            return res.status(400).json({ error: "take должен быть числом >= 0" });
        }
    }
    let result = posts.slice(skip);

    if (take !== undefined) {
        result = result.slice(0, take);
    }

    res.status(200).json(result);
});



app.get("/posts/:id", (req, res) => {
    const id = +req.params.id;
    console.log(id);

    if (isNaN(id)) {
        res.status(400).json("need number");
        return;
    }

    const post = posts.find((pr) => pr.id === id);

    if (!post) {
        res.status(404).json("not found");
        return;
    }

    res.json(post);
});


app.listen(PORT, HOST , () => {
    console.log(`http://${HOST}:${PORT}`);
});
