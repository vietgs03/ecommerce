const express =require('express')
const accessController =require('../../controller/access.controller')
const route= express.Router();
const asyncHandler = require('../../helpers/asyncHandler');
const { authentication,authenticationV2 } = require('../../auth/authUtils');

// signUp 
route.post('/shop/signup', asyncHandler(accessController.signUp))
route.post('/shop/signin', asyncHandler(accessController.login))
//authentication///
route.use(authenticationV2)
/////
route.post('/shop/logout',asyncHandler(accessController.logout))
route.post('/shop/handlerRefreshToken',asyncHandler(accessController.handlerRefreshToken))

module.exports=route