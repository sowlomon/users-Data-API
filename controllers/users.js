import { v4 as uuid } from 'uuid';

export const createUser =  (req, res) => {
  const user = req.body;


  const userId = uuid(); 

  const userWithId = { ...user, id: userId};
  users.push(userWithId);

  res.send(`user with the name ${user.firstName} was added to the database`);
  console.log(req.body);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users.filter((user) => user.id !== id);

  res.send(`user with the ${id} has been removed`);
};

export const updateUser =  (req, res) => {

  const { id } = req.params;
  const { firstName, lastName, age, dob} = req.body;
  const user = users.find( (user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  };

  if (lastName) {
    user.firstName = lastName;
  };

  if (age) {
    user.firstName = age;
  };

  if (dob) {
    user.dob = dob;
  };

  res.send(`the user with ${id} has been updated`);
};