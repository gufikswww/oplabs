'use strict'; 

const createUser = (name, city) => {
  return { name, city };
};

console.log(createUser('Yevhenii', 'Kyiv'));
module.exports = { createUser };