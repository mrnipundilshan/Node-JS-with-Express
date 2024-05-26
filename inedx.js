const express =  require('express');
const fs = require('fs');

let app = express();
let movies = JSON.parse.(fs.readFileSync('./data/movies.json'));

