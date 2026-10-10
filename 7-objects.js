'use strict'; 

const fn = () => {
  const obj1 = { name: 'Ahhahha' };  
  let obj2 = { name: 'GGGG' };   

  obj1.name = 'carsyya';         
  obj2.name = 'cnn';      

  // obj1 = { name: 'Error' };
  obj2 = { name: 'vyachik' };       

  console.log({ obj1, obj2 });    
};

fn()                           

module.exports = { fn };           