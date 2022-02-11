const { Router } = require('express');
const authenticationRouter = require('./authentication/router');
const recipeRouter = require('./recipe/router');
const {
    loggedIn,
    getUserData,
} = require('../utils/middlewares/authenticationHandler');

const router = Router();

router.use('/auth', authenticationRouter);
router.use('/recipes', loggedIn ,recipeRouter)


module.exports = router;