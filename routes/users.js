import express from "express";
import { createUser,  deleteUser, updateUser } from "../controllers/users.js";
const router = express.Router();

let users = []

// all routes in here are starting with /users
router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', createUser);

router.get('/:id', (req, res) => {
  // console.log('The get id route');
  const { id } = req.params;
  const foundUser = users.find( (user) => user.id === id) 
  res.send(foundUser);
})

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;