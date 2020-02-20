/**
 Implement a function with two arguments, both are lists of possibly different length.
 The function must return dictionary with keys from the first list and corresponding values from the second.
 If a key lacks value, resulting dictionary must contain None for that key (or null for JavaScript).
 Redundant values must be ignored. Keys are guaranteed to be unique.
 **/

function getDictionary(keyList, valueList) {
    let dictionary ={};
    for (let i = 0; i < keyList.length; i++) {
        let value = valueList[i];
        if (value === undefined) value = null;
        dictionary[keyList[i]] = value;
    }
    return dictionary;
}

let keys = [1, 3, 5, 7, 4, 6];
let values = [5, 43, 6, 7, 10];

let dictionary = getDictionary(keys,values);
console.log(dictionary);

