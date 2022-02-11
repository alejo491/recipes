const { Recipe, User } = require("../../../models");


const createRecipe = async (recipe) => {
    return Recipe.create(recipe)
};

const getRecipeById = async (id) => {
    return Recipe.findOne({where: {id}, include: 'author' })
}

const getRecipes = async () => {
    return Recipe.findAll({
        attributes: ['id', 'title']
      })
}

const deleteRecipe = async (id) => {
    return Recipe.destroy({
        where: {id}
    })
}

const updateRecipe = async (id, data) => {
    return Recipe.update(data, { where: {id}})
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipes,
    deleteRecipe,
    updateRecipe
}