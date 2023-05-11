const { Router } = require('express');

const userRouter = require('./users.routes');
const notesRouter = require('./notes.routes'); 
const tagsRouter = require('./tags.routes');

const routes = Router();
routes.use('/users', userRouter);  // Here there's all routes to aplication
routes.use('/notes', notesRouter);  
routes.use('/tags', tagsRouter);  

module.exports = routes; 