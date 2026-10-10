'use strict'; 

const square = (x) => x * x;          
const cube = (x) => x ** 3;           
const average = (a, b) => (a + b) / 2; // Знаходить середнє арифметичне двох чисел


const calculate = () => {
  const result = [];                  
  for (let i = 0; i <= 9; i++) {      
    const sq = square(i);             
    const cb = cube(i);               
    result.push(average(sq, cb));     
  }
  return result;                     
};

console.log(calculate());          

module.exports = { square, cube, average, calculate }; 