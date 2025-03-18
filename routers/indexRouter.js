const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get('/', indexController.indexGet);
indexRouter.get('/new', indexController.newGet);
indexRouter.post('/new', indexController.newPost);

module.exports = indexRouter;