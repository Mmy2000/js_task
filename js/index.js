
/*
 question 1 
 x = Number(window.prompt("enter the number : "))
 console.log(x);
*/

/*
question 2 
number = Number(window.prompt("Enter the number : "))
if (number % 3 ==0 & number % 4 == 0) {
    console.log("Yes");
}
else{
    console.log("No");
}
*/

/*
question 3
number1 = Number(window.prompt("Enter the first number : "))
number2 = Number(window.prompt("Enter the second number : "))

if (number1 > number2) {
    console.log(number1 + " " + "is greater");
}
else{
    console.log(number2 + " " + "is greater");
}
*/

/*
question 4
number = Number(window.prompt("Enter the number : "))
if (number>0) {
    console.log("positive");
}
else{
    console.log("negative");
}
*/

/*
question 5

number1 = Number(window.prompt("Enter the first number : "))
number2 = Number(window.prompt("Enter the second number : "))
number3 = Number(window.prompt("Enter the third number : "))

if (number1>number2&number1>number3&number2>number3) {
    console.log(number1+" "+"max element");
    console.log(number3+" "+"min element");
}
else if (number1>number2&number1>number3&number2<number3){
    console.log(number1+" "+"max element");
    console.log(number2+" "+"min element");
}
else if(number2>number1 & number2>number3 & number1>number3){
    console.log(number2+" "+"max element");
    console.log(number3+" "+"min element");
}
else if(number2>number1 & number2>number3 & number1<number3){
    console.log(number2+" "+"max element");
    console.log(number1+" "+"min element");
}
else if (number3>number1 & number3>number2 & number1>number2){
    console.log(number3+" "+"max element");
    console.log(number2+" "+"min element");
}
else if (number3>number1 & number3>number2 & number1<number2){
    console.log(number3+" "+"max element");
    console.log(number1+" "+"min element");
}
*/

/*
question 6

number = Number(window.prompt("Enter the number : "))
if (number%2==0) {
    console.log("even");
}
else{
    console.log("odd");
}
*/

/*
question 8
string = window.prompt("enter your letter : ")
if (string === "a" | string === "e" |string === "l" |string === "o" |string === "u"  ) {
    console.log("vowel");
}
else{
    console.log("consonant");
}
*/

/*
question 9
number = Number(window.prompt("Enter the number : "))
for (var i = 1; i < number; i++) {
    console.log(i);
}
*/

/*
question 10
number = Number(window.prompt("Enter the number : "))
for (var i = 2; i < 13; i++) {
    console.log(i * number);
    
}
*/

/*
question 11
number = Number(window.prompt("Enter the number : "))
for (var i = 1; i < number; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    
}
*/

/*
question 12
n1 = Number(window.prompt("Enter the first number : "))
n2 = Number(window.prompt("Enter the second number : "))
var result = 1
for (var i = 0; i < n2; i++) {
    result *= n1;    
}
console.log(result);
*/

/*
quwstion 13
mark1 = Number(window.prompt("Enter the first number : "))
mark2 = Number(window.prompt("Enter the second number : "))
mark3 = Number(window.prompt("Enter the third number : "))
mark4 = Number(window.prompt("Enter the fourth number : "))
mark5 = Number(window.prompt("Enter the fifth number : "))

total = mark1 + mark2 + mark3 + mark4 + mark5;
console.log("Total : "+" " + total);
avarege = (total / 5);
console.log("Avarege : "+" "+avarege);
percentage = (total / (5*100) ) * 100;
console.log("Percentage : "+" "+percentage);
*/

/*
question 14
mounthNumber = Number(window.prompt("Enter the mounth number : "))
switch (mounthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30");
        break;
    case 2:
        console.log("28");
        break;
    default:
        console.log("Invalid month number entered.");
        break;
}
*/

/*
question 15
mark1 = Number(window.prompt("Enter the Physics grade : "))
mark2 = Number(window.prompt("Enter the Chemistry grade : "))
mark3 = Number(window.prompt("Enter the Biology grade : "))
mark4 = Number(window.prompt("Enter the Mathematics grade : "))
mark5 = Number(window.prompt("Enter the Computer grade : "))

total = mark1 + mark2 + mark3 + mark4 + mark5;
console.log("Total : "+" " + total);
percentage = (total / (5*100) ) * 100;
console.log("Percentage : "+" "+percentage);
if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage>=80){
    console.log("Grade B");
}
else if (percentage>=70){
    console.log("Grade C");
}
else if (percentage>=60){
    console.log("Grade D");
}
else if (percentage>=40){
    console.log("Grade E");
}
else if (percentage<40){
    console.log("Grade F");
}
*/

