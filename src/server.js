const express = require('express');
const moment = require('moment');
const path = require('path');

const postRouter = require('./posts/post.router');

const app = express();
const PORT = 8000;
const HOST = 'localhost';

app.use(express.json());

app.get('/timestamp', (req, res) => {
  res.json({ timestamp: moment().format('YYYY-MM-DD HH:mm:ss') });
});


app.use('/posts', postRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
