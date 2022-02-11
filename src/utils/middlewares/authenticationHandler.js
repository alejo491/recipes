const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const config = require('../../config');
const recipeDao = require('../../components/recipe/dao');

const loggedIn = (req, res, next) => {
  const token = req.headers.authorization || null;
  if (!token) throw boom.unauthorized('No valid Bearer token');
  if (!token.startsWith('Bearer ')) throw boom.unauthorized('No valid Bearer token');

  const tokenArray = token.split(' ');
  req.user = jwt.verify(tokenArray[1], config.jwt_token) || {};
  next();
};

const hasAccessToResource = async (req, res, next) => {
  const recipe = await recipeDao.getRecipeById(req.params.id);
  if(recipe.authorId !== req.user.id){
    throw boom.forbidden("You can't perform this action")
  }
  next();
};

module.exports = {
  loggedIn,
  hasAccessToResource,
};
