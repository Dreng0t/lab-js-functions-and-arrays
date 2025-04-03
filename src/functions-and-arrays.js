// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longWord = "";
    if (arr.length == 0) {
        return null;
    } else {
        for (let i=0; i < arr.length; i++) {
            if (longWord.length < arr[i].length) {
                longWord = arr[i];
            }
        }
    }
    return longWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
    let sum = 0;
    for (let i=0; i<numArr.length; i++) {
        sum += numArr[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
    let sum = 0;
    if (numArr.length != 0) {
        for (let i=0; i<numArr.length; i++) {
            sum += numArr[i];
        }
        const avg = sum/numArr.length;
        return avg;
    } else {
        return 0;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, word) {
    let wordExists = false;
    if (wordArr.length !== 0) {
        for (let i=0; i<wordArr.length; i++) {
            if (wordArr[i] === word) {
                wordExists = true;
            }
        }
    } else  {
        return null;
    }
    return wordExists
}
