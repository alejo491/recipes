const boom = require('@hapi/boom');
const config = require('../../../config');
const recipeDao = require('../dao');


const getRecipes = async () => {
    return recipeDao.getRecipes()
};

const getRecipeById = async (idRecipe) => {
    const { id, image, title, author, type, description } = await recipeDao.getRecipeById(idRecipe);
    const file = image.toString('base64');
    return {
        id, 
        file: `data:${type};base64,${file}`, 
        title, 
        author,  
        description
    }
}

const createRecipe = async (user, recipe) => {
    console.log(recipe);
    return recipeDao.createRecipe({
        ...recipe,
        authorId: user.id
    })
}

const updateRecipe = async (id, recipe) => {
    return recipeDao.updateRecipe(id, recipe)
}

const deleteRecipe = async (id) => {
    return recipeDao.deleteRecipe(id)
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}