    //Program for user age//
let age= prompt("Enter Your Age");
let condition = age >= 18;
if(condition)
    alert("You are an adult.");
else
    alert("You are a minor");


    //Program for username and Password//
let predefineusername = "Kajal";
let enterusername = prompt("Enter your username");  
let predefinePassword = "123456";
let enterPassword = prompt("Enter your password")
if(enterusername=== predefineusername && enterPassword=== predefinePassword)
    console.log("Login successful.")
else
    console.log("Login Failed");


    //Odd & Even Numner Program//
let Number= prompt("Enter Number");
if(Number/2===0){
    console.log("The Number is even")
}else{
    console.log("The Number is Odd")
}


    //Favourite Color//
let Color= "Red";
let entercolor= prompt("Enter your favorite color:")
if(Color===entercolor){
    console.log("Red is beautiful color.")
}else{
    console.log("I like your choice of color.")
}


    //Grade//
let Grade="A";
let EnterGrade= prompt("Please Enter the grade you recived")
if(Grade===EnterGrade){
   console.log("Congratulations on your excellent work!")
}else{
    console.log("Keep working hard!")
}