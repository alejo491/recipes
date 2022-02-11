const { Router }=require('express');

const asyncHandler=require('../../utils/middlewares/asyncHandler');
const authenticationController=require('./controllers');

const router = Router();

router.post('/signup', asyncHandler(authenticationController.signup));
router.post('/login', asyncHandler(authenticationController.login));



module.exports = router;