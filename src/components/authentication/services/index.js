const boom = require('@hapi/boom');
const md5 = require('md5');
const jwt = require('jsonwebtoken')
const config = require('../../../config');
const authenticationDao = require('../dao');


const signup = async (user) => {

    const userData = await authenticationDao.getUserByName(user.user);
    if(userData){
        throw boom.badRequest('User already exists')
    }
    return authenticationDao.createUser({
        ...user,
        password: md5(user.password)
    })
};

const login = async (user) => {
    const userData = await authenticationDao.getUserByName(user.user);
    if(!userData || userData.password !== md5(user.password)){
        throw boom.unauthorized('wrong user and password')
    }

    const token =  jwt.sign({
        id: userData.id
      }, config.jwt_token, {
        expiresIn: '6h'
    });
    
    return { 
        token,
        id: userData.id
    }
}

module.exports = {
    signup,
    login
}