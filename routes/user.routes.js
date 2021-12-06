const { 
  authUser,
  getUserProfile,
  updateUserProfile,

  getUsers,
  registerUser,
  getUserById,
  updateUser,
  deleteUser } = require('../controllers/user.controller');
const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');


//Get All Users   //Add User
router.route('/')
  .get(getUsers)
  .post(registerUser);
  
router.post('/login', authUser)
// router.route('/login').post(authUser)
router
  .route('/profile')
  .get(protected, getUserProfile)
  .put(protected, updateUserProfile)

//Get One User  //Update User   //Delete User
router
  .route('/:id')
  .get(protected, getUserById)
  .put(protected, updateUser)
  .delete(protected, deleteUser)



module.exports = router;