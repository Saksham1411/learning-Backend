const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {

    const user = await User.create({ ...req.body })
    const token = user.createJWT();
    // console.log(token);

    res.status(StatusCodes.CREATED).send({ user: { name: user.name }, token });
}
const login = async (req, res) => {
    const { email, password } = req.body;
    //check both are provided
    if (!email || !password) {
        throw new BadRequestError('please provide email and password');
    }
    // checking user exist or not
    const user = await User.findOne({ email });

    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials');
    }
    // checking for correct passoword
    const isPasswordCorrect = await user.camparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials');
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).send({ user: { name: user.name }, token });
}

module.exports = {
    register, login
}