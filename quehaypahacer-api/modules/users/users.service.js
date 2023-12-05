const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")
const errorHandle = require("../../utils/errorHandler")
const { USER_PASS_WRONG, USER_ALREADY_EXIST, SERVER_ERROR } = require("./utils/users.dict.errors")
const User = require("./models/user.model")

const login = async (email, password) => { // pass: "123456"

  try {
    const user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {

      const payload = {
        idUser: user._id
      }
      const secretKey ="millavesecretadetokenquenadiepuedever"
      const token = await jwt.sign(payload, secretKey)
      return {
        token
      }
    }
    throw errorHandle(USER_PASS_WRONG)
    } catch (error) {
    throw error.handled ? error : errorHandle (SERVER_ERROR,  error)
    }

/*
  if (email === "juan@gmail.com" && password === "123456") {

    return {

      token: "yyyyyyzzzzzzmmmmmmtttttt"
    }
  }

  throw errorHandle(USER_PASS_WRONG = {fields: "email"})
*/
  }

const create = async (userData) => {
  try {

    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash

    const validateEmail = await User.findOne ({email: userData.email})

    if(validateEmail) {
      throw errorHandle(USER_ALREADY_EXIST)

      }

    const user = User(userData)
    await user.save()

    return {
      user
    }

    } catch (error) {

    throw error.handled ? error : errorHandle(SERVER_ERROR, error)

    }
  }

  const info = async (idUser) => {
    try {

      const user = await User.findById(idUser)
      return user

    } catch (error) {
      throw error.handled ? error : errorHandle(SERVER_ERROR, error)
    }

  }

  module.exports = {
    login,
    create,
    info
  }
