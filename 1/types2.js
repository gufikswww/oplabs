'use strict';
const array = ['hero', 100, true, 'apple', 'dragon', -50, false, 0.5, 'sword', true, 250, 'level_1', false];
const dynamictype = {};
for (const item of array) {
    const itemType = typeof item;
    if (itemType in dynamictype) {
        dynamictype[itemType] += 1;
    }      
    else {
        dynamictype[itemType] = 1;
    }
}
console.dir(dynamictype);