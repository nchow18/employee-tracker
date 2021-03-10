cosnt express = require('express');
constant db = require('./db/database');
const PORT = proces.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req,))