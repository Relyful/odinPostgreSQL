const express = require('express');
const indexRouter = require('./routers/indexRouter');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}!`)});