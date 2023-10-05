/*//1. Reverse a string without using the reverse method or a function.
let input = prompt("Enter String");
let rev_input = "";
for (let index = input.length - 1; index >=0; index--);
    rev_input += input.charAt(index);

console.log(`The Reverce of ${input} is ${rev_input}`);

//2. Count the number of vowels in a string without using functions.

let input = prompt("Enter String");
let Count = 0;
let curr_char;
let flag;

for (let i = 0; i < input.length; i++){
    flag = false;
    curr_char = input.charAt(i);
    curr_char = curr_char.toLocaleLowerCase();
    flag = curr_char === 'a' || curr_char === 'o' || curr_char === 'e' ||
    curr_char === 'u' || curr_char === 'i';

    if(flag === true)
    Count++;
}
console.log(`Total Number of vowels is ${Count}`)

//3. Check if a string is a palindrome without using functions.

let input = prompt("Enter String");
let rev_input = "";
for (let index = input.length - 1; index >=0; index--){
    rev_input += input.charAt(index);}
if(input.toLocalLowerCase === rev_input.toLocaleLowerCase){
    console.log(`The reverce of ${input} is ${rev_input} & its palindromic`)
}else{
    console.log(`The reverce of ${input} is ${rev_input} & its not palindromic`)
}


//4. Capitalize the first letter of each word in a sentence without using functions.

let sentence = "capitalize the first letter of each word";
let result = "";
let flag = true; 

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === " ") {
        flag = true;
        result += char; 
    } else {
        if (flag) {
            result += char.toUpperCase();
            flag = false; 
        } else {
            result += char.toLowerCase();
        }
    }
}

console.log(result);

// 5. Remove all spaces from a string without using functions.

let sentence = "capitalize the first letter of each word";
let result = "";

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
        result += sentence[i]
    }
}
console.log(result)
*/

