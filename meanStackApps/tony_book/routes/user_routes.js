var usersController = require('../controllers/users_controller.js')
  , express         = require('express')
  , userRoutes      = express.Router()

//Create the index route for all users
//userRoutes.get('/', usersController.getAllUsers)
//userRoutes.post('/', usersController.createUser)
userRoutes.route('/')
  .get(usersController.getAllUsers)
  .post(usersController.createUser)

userRoutes.route('/:email').get(usersController.showUser)

module.exports = userRoutes
