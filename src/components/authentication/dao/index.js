const { User } = require("../../../models");


const createUser = async (user) => {
    return User.create(user)
};

const getUserByName = async (user) => {
    return User.findOne({where: {user}})
}

const getUserById = async (id) => {
    return User.findByPk(id)
}

module.exports = {
    createUser,
    getUserByName,
    getUserById
}