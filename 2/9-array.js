'use strict'; 

const phonebook = [                                           
  { name: 'Marcus Aurelius', phone: '+380445554433' },         
  { name: 'Vyachik', phone: '+380501234567' },                     
  { name: 'Carsyy', phone: '+380671112233' },                   
];

const findPhoneByName = (name) => {     
  for (const person of phonebook) {     
    if (person.name === name) {         
      return person.phone;          
    }
  }
};

console.log(findPhoneByName('Carsyy')); 

module.exports = { phonebook, findPhoneByName }; 