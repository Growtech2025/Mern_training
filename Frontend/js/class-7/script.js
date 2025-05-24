// perfect Number
// let size = 100;

// function isPerfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             sum += i;
//         }
//     }
//     return sum === num;
// }

// for (let i = 1; i < size; i++) {
//     if (isPerfect(i)) {
//         console.log(i);
//     }
// }




// prime Number

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return false
//         }
//     }
//     return true;
// }
// let num = 15;
// for (let j = 2; j < num; j++) {
//     if (isPrime(j)) {
//         console.log(j)
//     }
// }





// nearbyswap
// let arr = [2, 3, 4, 5, 6];
// let j = 0;
// while (j < 5) {
//     if (arr[j + 1] == null) {
//         break;
//     }
//     arr[j] = arr[j] ^ arr[j + 1];
//     arr[j + 1] = arr[j] ^ arr[j + 1];
//     arr[j] = arr[j] ^ arr[j + 1];
//     j = j + 2;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(arr[i]);
// }




// bubble sort
// let arr = [7, 6, 5, 4, 3, 2, 1];
// n = 7;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] > arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
// }

// for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
// }





// armstrong

// function isArmstrongNumber(num) {
//     let originalNum = num;
//     let numDigits = 0;
//     let temp = num;
//     while (temp > 0) {
//         temp = Math.floor(temp / 10);
//         numDigits++;
//     }

//     let sum = 0;
//     temp = num;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, numDigits);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === originalNum;
// }

// for (let i = 0; i <= 1000; i++) {
//     if (isArmstrongNumber(i)) {
//         console.log(i);
//     }
// }




// reverse - array

// let arr2 = [3, 5, 0, 7, 9, 1];

// let endSize = prompt();
// let start = 0;
// let end = endSize - 1;

// while (start < end) {
//     let temp = arr2[start]
//     arr2[start] = arr2[end]
//     arr2[end] = temp
//     start++
//     end--
// }
// console.log(arr2);



// count the number of interger in given string
// str="mohan123rai12"
// let count = 0;

// function countIntegers(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 1 || str[i] == 2 || str[i] == 3 || str[i] == 4 || str[i] == 5 || str[i] == 6 || str[i] == 7 || str[i] == 8 || str[i] == 9 || str[i] == 0) {
//             count++;
//         }
//     }
// }

// countIntegers("mohan123rai12");
// console.log(count);





// TO REVERSE A STRING 
// function revString(stg) {
//     length = stg.length;
//     let newstring = "";
//     for (let i = length - 1; i >= 0; i--) {
//         newstring = newstring + stg[i];
//     }
//     console.log(newstring);

// }
// revString('ThisWillBeeReversed');



// profit loss

// function profitloss() {

//     let Mrp = parseInt(prompt("Enter MRP of PRoduct"));
//     console.log("Mrp of Product is", Mrp);

//     let sellingprice = parseInt(prompt("Enter Seeling Price of product"));
//     console.log("Seeling prise of product is ", sellingprice);

//     let amount = Mrp - sellingprice;
//     if (Mrp > amount) {
//         console.log("Loss", amount);
//     } else {
//         console.log("profit", amount);
//     }

// }
// profitloss();




//Compound Intrest  code using amount 
// let principal = parseInt(prompt("enter principal amount :-"));
// let rate = parseInt(prompt("enter principal rate :-"));
// let year = parseInt(prompt("enter principal year :-"));
// let compound = parseInt(prompt("enter compunded years :-"));

// let intrest = 0;
// let c_intrest = 0;

// function Ci() {
//     intrest = (principal * rate * year) / 100;
//     amount = principal * (1 + rate / 100) ** (compound * year);
//     c_intrest = amount - principal
//     console.log(amount);

//     console.log(c_intrest);


// }
// Ci();



// function to print a triangle pattern
// function gettrianglepattern(n) {

//     let triangle = "";

//     for (let row = 1; row <= n; row++) {
//         for (let sp = 1; sp <= n - row; sp++) {
//             triangle += " ";
//         }
//         for (let col = 1; col <= 2 * row - 1; col++) {
//             triangle += "*";

//         }
//         triangle += "\n";

//     }
//     console.log(triangle);
// }
// (gettrianglepattern(10));




// // sumofnumbers
// function sumofnumber() {
//     let sum = 0;

//     for (i = 1; i <= 10; i++) {
//         sum = sum + i;


//     }
//     return sum;
// }
// console.log(sumofnumber());





//leap year 
// function LeapYear(num) {
//     if (num % 4 === 0) {
//         console.log("This is a Leap Year");

//     } else {
//         console.log("Its is not a leap year");

//     }
// }

// console.log(LeapYear(parseInt(prompt("Enter Your Number: "))));





//Count the number of vovles

// function countVovle(nam) {
//     let count = 0;

//     for (let i = 0; i < nam.length; i++) {
//         if (
//             nam[i] === 'a' || nam[i] === 'e' || nam[i] === 'i' || nam[i] === 'o' || nam[i] === 'u'
//         ) {
//             count++;
//         }
//     }
//     return count;
// }

// let nam = "krishna"
// console.log('Count of vovles', countVovle(nam))



//palindrome number
let num = parseInt(prompt());

function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}