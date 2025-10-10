import express from 'express';
import moment from 'moment';
import postRouter from './post.router';

const app = express();
const PORT = 8000;
const HOST = 'localhost';

app.use(express.json());

app.get('/timestamp', (req, res) => {
  res.json({ timestamp: moment().format('YYYY-MM-DD HH:mm:ss') });
});

app.use('/posts', postRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

;
