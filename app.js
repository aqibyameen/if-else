let number =+prompt("Enter the number: ")
if(number%3===0){
    console.log("Number is divisible by 3");
}
else{
    console.log("Number is not divisible by 3");
}
let number1 =+prompt("Enter the number: ")
if(number1%2===0){
    console.log("The given number "+number1+" is even.");
}
else if(number1%3===0){
    console.log("The give number " + number1 + " is odd");
}
else{
    console.log("Not even or odd");
}
let age = prompt("How old are you? ");
if(age>18){
    console.log("Old enougn");
}
else{
    console.log("to young");
}
let Name = prompt("Enter your name: ");
let realname = "Jawwad Nadeem";
if(realname === Name) {
    console.log("hello " +  Name +  ", nice to meet you!");
} else {
    console.log();
}
