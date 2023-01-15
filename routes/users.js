import express from "express";
import { v4 as uuid } from 'uuid';


const router = express.Router();

let users = []

// all routes in here are starting with /users
router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;


  const userId = uuid(); 

  const userWithId = { ...user, id: userId};
  users.push(userWithId);

  res.send(`user with the name ${user.firstName} was added to the database`);
  console.log(req.body);
})

router.get('/:id', (req, res) => {
  // console.log('The get id route');
  const { id } = req.params;
  const foundUser = users.find( (user) => user.id === id) 
  res.send(foundUser);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const updateUser = users.filter((user) => user.id != id);

  res.send(`user with the ${id} has been removed`);
})


export default router;