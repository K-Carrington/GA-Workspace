var usersController = require('../controllers/users_controller.js')
  , express         = require('express')
  , userRoutes      = express.Router()

//Create the index route for all users
//userRoutes.get('/', usersController.getAllUsers)
//userRoutes.post('/', usersController.createUser)
userRoutes.route('/')
  .get(usersController.getAllUsers)
  .post(usersController.createUser)

userRoutes.route('/:user_id')
    .get(usersController.showUser)
    .put(usersController.updateUser)
	.delete(usersController.destroyUser)

userRoutes.route('/:email')
	.get(usersController.showUsere)

module.exports = userRoutes
