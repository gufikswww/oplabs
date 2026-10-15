'use strict';

function generateKey(length, characters) {
  let result = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    result += characters[index];
  }

  return result;
}
const characters = 'asdsfdggdffyz0393494040';
const key = generateKey(16, characters);
console.log(key);
module.exports = { generateKey };