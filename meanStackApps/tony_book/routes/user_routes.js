var usersController = require('../controllers/users_controller.js')
  , express         = require('express')
  , userRoutes      = express.Router()

//Create the index route for all users
userRoutes.get('/', usersController.getAllUsers)

module.exports = userRoutes