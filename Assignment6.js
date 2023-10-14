/*//Linear Search Algorithm.
let array = [1,2,3,4,5,6,7,8,9,10];
let key = 5;
let index = 0;
let flag = false;

for(let i = 0; i < array.length; i++){
    if(array[i] === key) {
        flag = true;
        index = i;
        break;
    }
}

if(flag === true){
    console.log(index)
}else{
    console.log(-1)
}


//Binary Search Algorithm.
//Question 1: Map Basics
//Create a JavaScript program that uses a Map to store the names of five countries as keys and their corresponding capitals as values. Print out the names of all the countries and their capitals stored in the Map.

let Country_capitals = [
    {Country : "India" , Capitals : "Delhi"},
    {Country : "Belgium" , Capitals : "Brussels"},
    {Country : "Bangladesh" , Capitals : "Dhaka"},
    {Country : "Italy" , Capitals : "Rome"},
    {Country : "Japan" , Capitals : "Tokyo"}
];

let countrywithcapitals = Country_capitals.map(function(element) {
    return `${element.Country} ${element.Capitals}`;
})
console.log(countrywithcapitals);



//Question 2: Set Deduplication
//Write a JavaScript program that takes an array of numbers as input and uses a Set to remove duplicates from the array. After removing duplicates, print the elements of the Set.
//let arr = new Set('1','2','3','3','4','4','4','5','6','6','8');
//console.log(arr); 

// Question 3: Map Operations
// Implement a JavaScript program that demonstrates the following operations on a Map:
let arr = [
    ['A' ,'1'],
    ['B' ,'2'],
    ['C','3'],
    ['D' ,'4']
];

let mp = new Map(arr);

// Add three key-value pairs to the Map.
mp.set('E','5')
mp.set('F','6')
mp.set('G','7')

// Print the keys and values in the Map.
console.log(mp)

// Check if a specific key exists in the Map.
mp.has('C');

// Remove one key-value pair from the Map.
mp.delete('B')


//Question 5: Map Iteration
//Write a JavaScript program that uses a Map to store the names of fruits as keys and their corresponding colors as values. Write a loop to iterate through the Map and print out each fruit's name and color.

let arr = [
    ['Mango','Yellow'],
    ['Apple','Red'],
    ['Banana','Yellow'],
    ['Cherry','Red'],
    ['Orange','Orange']
] 

let fruit = new Map(arr);

let MapIterator = fruit.entries;

console.log(fruit)

*/
//Question 7: Map Value Update
//Implement a JavaScript program that uses a Map to store the names of cities as keys and their populations as values. Write a function that updates the population of a given city. Print the updated population of the city after the update.
