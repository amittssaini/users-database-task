const router = require('express').Router();
const {postUser,getUsers,deleteUser,patchUser} = require('../Controllers/user.controller')
 router.get('/',getUsers);
 router.post('/',postUser)
 router.patch('/:id',patchUser)
 router.delete('/:id',deleteUser)

module.exports = router;