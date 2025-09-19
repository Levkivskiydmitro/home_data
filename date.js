const moment = require('moment');

function getCurrentDay() {
    console.log(moment().format('dddd'));
}

function getCurrentMonth() {
    console.log(moment().format('MMMM'));
}

function getCurrentYear() {
    console.log(moment().format('YYYY'));
}

function getDate() {
    console.log(moment().format('YYYY/MM/DD HH:mm:ss'));
}

function getCurrentWeekday() {
     console.log(moment().format('dddd'));
}


getCurrentDay();
getCurrentMonth();
getCurrentYear();
getDate();
getCurrentWeekday();


const express = require('express');
const moment = require('moment');

const app = express();
const PORT = 3000;


function getDate() {
  return moment().format('YYYY/MM/DD HH:mm:ss');
}


app.get('/time', (req, res) => {
  res.json({ time: getDate() });
});


app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})