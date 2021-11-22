
function LinearSearch(list, value) {
    /**
 * Searches for element in array
 * @param  {array} list Array of numbers
 * @param  {Number} value Searched number
 * @return {Number}      Returns element's index ( first found in array )
 */

    // goes thought all elements in list until finds needed element
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    // return -1 if element not found or array is empty
    return -1;
}

let array = [4, 8, 7, 2, 11, 1, 3];
console.log(LinearSearch(array, 3));


function mergeSort(list) {
    /**
 * Sorts array
 * @param  {array} list Array of numbers
 * @return {array}      Returns sorted array of numbers
 */

    // if length of array is 2 or less step out of recursion
    if (list.length <= 2) {
        // if list[0] > list[1] swap numbers to sort them
        if (list.length === 2) {
            if (list[0] > list[1]) {
                const temp = list[0];
                list[0] = list[1];
                list[1] = temp
            }
        }
        console.log(list);
        return list;
    }

    // recursively dividing array in half's
    let mid = Math.floor(list.length / 2);
    let left = mergeSort(list.slice(0, mid));
    let right = mergeSort(list.slice(mid));


    let sorted = [];
    // while one of the arrays is not empty take smaller number from one of the arrays,
    // add number to end of sorted array and remove it from previous
    while (left.length !== 0 && right.length !== 0) {
        // compare first elements of arrays
        if (right[0] < left[0]) {
            sorted.push(right.shift());
        } else {
            sorted.push(left.shift());
        }
    }

    // concatenate sorted array with not empty array
    if (left.length !== 0) {
        return sorted.concat(left)
    } else {
        return sorted.concat(right)
    }
}


let array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));



function Bubble(list) {
        /**
 * Sorts array
 * @param  {array} list Array of numbers
 * @return {array}      Returns sorted array of numbers
 */

    // goes through array of numbers
    for (let i = 0; i < list.length; i++) {
        // check pairs of numbers till list.length - i  and swap if bigger number is list[j] > list[j + 1]
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                // swap
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

let array = [4, 8, 7, 2, 11, 1, 3];
console.log(Bubble(array));