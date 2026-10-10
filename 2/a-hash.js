'use strict'; 

const phonebook = {
  'Marcus Aurelius': '+380445554433', 
  'Vyachik': '+380501234567',          
  'Carsyy': '+380671112233',          
};

const findPhoneByName = (name) => {   
  return phonebook[name];             
};

console.log(findPhoneByName('Carsyy')); 

module.exports = { phonebook, findPhoneByName };