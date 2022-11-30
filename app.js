//

//

// 1

// Original

//

//test filterOutOdds(1,2,3,4,5);

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}

// ES2015 Version -

// function filterOutOddsA(...nums) {

//     return nums.filter((num) => {return num % 2 === 0});

// }

function filterOutOddsB(...nums) {return nums.filter(num => num % 2 === 0);}

//

//

// 2

// findMin

//accepts a variable number of arguments

//reutrns the smallest argument

// findMin(1,4,12,-3)
// -3
// findMin(1,-1)
// -1
// findMin(3,1)
// 1

function findMin(...nums) {

    // console.log(nums);

    return nums.reduce(function (acc,next) {

        // console.log(acc);

        // console.log(next);

        return acc < next ? acc : next;
    })

}

// do arrow functions work?

function findMinA(...nums) {

    return nums.reduce((acc,next) => {return acc < next ? acc : next;})
}

// yes but need explicit returns and since 2 values going into reduce, cannot use no parens and brackets...

//

// 3

// mergeObjects

// accepts 2 objects

// returns a new object which contains all the keys and values of the first and second object

// mergeObjects({a:1, b:2}, {c:3, d:4})

// {a:1, b:2, c:3, d:4}

function mergeObjects(obj1, obj2) {

    return {...obj1, ...obj2};

}

// 4

// doubleAndReturnArgs

// accepts an array and a variable number of arguments

// returns a new array with the original array values and all of the additional arguments doubled

// doubleAndReturnArgs([1,2,3],4,4)
// [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4)
// [2, 20, 8]

// This is a start -

// function doubleAndReturnArgs(arr, ...toDoubles) {

//     return arr.concat(

//         toDoubles
   
//     )
// }

// now add doubling

function doubleAndReturnArgs(arr, ...toDoubles) {

    return arr.concat(

        toDoubles.map(function(num){
            return num * 2;
        })
   
    )
}

// 5

// Slice and Dice!

// Rewrite each function using rest, spread,

// and refactor these functions to be arrow functions!

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

// removeRandom([1,2,3,4,5,6,7,8,9,10])

const removeRandom = (items) => {

    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(index+1)];

}



/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

// extend([1,2,3,4,5],[6,7,8,9,10])

const extend = (array1, array2) => {
    return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

//addKeyVal({name : 'Walter', job : 'Cook', recepie : 'bluestuff'}, 'income', 100000000)

const addKeyVal = (obj, key, val) => {
    return {...obj, [key] : val};
}


/** Return a new object with a key removed. */

// removeKey({name : 'Walter', job : 'Cook', recepie : 'bluestuff'}, 'job')

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {

    const newObj = {...obj};
    delete newObj[key];
    return newObj;

};


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

// combine({name : 'Walter', job : 'Cook', recepie : 'bluestuff'}, {income : 100000000})

const combine = (obj1 , obj2) => {

    return {...obj1, ...obj2};

}


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

// update({name : 'Walter', job : 'Cook', recepie : 'bluestuff'}, 'name', 'Jessie')

const update = (obj, key, val) => {
    return {...obj, [key] : val};
}

