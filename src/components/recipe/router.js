const { Router }=require('express');

const asyncHandler=require('../../utils/middlewares/asyncHandler');
const { hasAccessToResource } = require('../../utils/middlewares/authenticationHandler')  
const recipeController=require('./controllers');

const {upload} = require('../../utils/middlewares/uploadHandler');

const router = Router();

router.get('/list', asyncHandler(recipeController.listRecipes));
router.get('/:id', asyncHandler(recipeController.getRecipe));
router.post('', upload.single('file'), asyncHandler(recipeController.createRecipe));
router.put('/:id', upload.single('file'), asyncHandler(hasAccessToResource),asyncHandler(recipeController.updateRecipe));
router.delete('/:id', asyncHandler(hasAccessToResource), asyncHandler(recipeController.deleteRecipe));




module.exports = router;