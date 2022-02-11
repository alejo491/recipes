const authenticationService=require('../services');



const signup = async (req, res) => {
  await authenticationService.signup(req.body)

  res.status(201).json({
    status: 201,
    message: 'Success',
  });
};

const login = async (req, res) => {
  res.status(200).json(await authenticationService.login(req.body))
}

module.exports = {
  signup,
  login
}

