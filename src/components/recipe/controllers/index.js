const recipesService=require('../services');

const listRecipes = async (req, res) => {

  res.status(201).json({
    status: 201,
    message: 'Success',
    data: await recipesService.getRecipes()
  });
};

const getRecipe = async (req, res) => {
  res.status(200).json({
    status: 201,
    message: 'Success',
    data: await recipesService.getRecipeById(req.params.id)
  })
}

const createRecipe = async (req, res) => {
  const { mimetype, buffer } = req.file;
  res.status(200).json({
    status: 201,
    message: 'Success',
    data: await recipesService.createRecipe(req.user, {
      ...req.body,
      image: buffer,
      type: mimetype
    })
  })
}

const updateRecipe = async (req, res) => {
  res.status(200).json({
    status: 201,
    message: 'Success',
    data: await recipesService.updateRecipe(req.params.id, {
      ...req.body,
      image: req.file?.buffer,
      type: req.file?.mimetype
    })
  })
}

const deleteRecipe = async (req, res) => {
  res.status(200).json({
    status: 201,
    message: 'Success',
    data: await recipesService.deleteRecipe(req.params.id)
  })
}

module.exports = {
  listRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
}

