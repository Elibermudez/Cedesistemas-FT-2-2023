const DicErrors = {
  USER_PASS_WRONG: {

      status: 401,
      message: "user or password"
  },

  USER_ALREADY_EXIST: {
      status: 432,
      message: "user already exist"
    },

  SERVER_ERROR: {

    status: 500,
    message: "server internal error"
 }

}

module.exports = DicErrors
