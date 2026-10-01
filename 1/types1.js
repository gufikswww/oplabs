'use strict';
const array = ['hero', 100, true, 'apple', 'dragon', -50, false, 0.5, 'sword', true, 250, 'level_1', false]
const type = {
    number: 0,
    string: 0, 
    boolean: 0,
}
for (const item of array) {
    const itemType = typeof item;
    if (itemType in type) {
        type[itemType] += 1;
    }
}
console.dir(type);