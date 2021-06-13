// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
//     console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

function is_array(i) {
    return Array.isArray(i);
}

function array_Clone(array){

    let i = array.length;
    let arrayCopy = [];
    while (i--) {
        arrayCopy[array.length - i -1] =  array[i];
    }
    return arrayCopy;
}


console.log(is_array([1,3,4,5,5,6]));
console.log(array_Clone([1,2,3,4,5]));