//Printing values to console
// console.log(40+8+23-10)

//Declaring a Variable
// let firstName = "Benson"
// console.log(firstName);//printing a variable in the console
/*
//Coding challenge 1
let markHeight = 1.69;
let markWeight = 78;
//ccc
let johnHeight= 1.95;
let johnWeight = 92;

//BMI = mass / height ** 2
let markBMI = markWeight / markHeight ** 2
//BMI = mass / height ** 2
let johnBMI = johnWeight / johnHeight ** 2
let markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI)
// Js uses '//' for comments

 MULTI LINE COMMENTS
johnBMI = johnWeight / johnHeight ** 2
johnBMI2 = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)
console.log(johnBMI2)

//Boolean Data Type
let jsIsFun = true
// console.log(jsIsFun)
// typeof function
// console.log(typeof true)
// console.log(typeof jsIsFun)
// console.log(typeof 23)
// console.log(typeof 'Benson')

//Undefined Data type
let year;
// console.log(year)
// console.log(typeof year);

//Js BUG
// console.log(typeof null);//prints object. Its regarded a bug and its however not corrected for legacy reasons

//Ways of declaring variables
let age = 30; //let is used when varible value is likely to change
//age = 31; //mutating variable

const YOB = 2001;
// YOB = 2000// prints and error. 

// var job = 'programmer';
// job= 'CEO';

//MATHS OPERATORS
const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
// console.log(ageJonas, ageSarah);

//Multiply
// console.log(ageJonas*2, ageJonas/10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2*2*2

// const firstName = "Benson";
// const lastName = "Makau";
// console.log(firstName + ' '+ lastName);

//ASSIGNMENT OPERATORS
let x = 10+5;//15
x+=10;// x= x+10
x*=4;//x=x*4
x++;//x= x+1
x--;// x=x-1
//console.log(x);// 25

//Comparison Operators
//console.log(ageJonas > ageSarah);//prints either true or false
//console.log(ageJonas >= 18);//prints either true or false
/*
>,<,>=,<=

const isFullAge = ageSarah >=18;
// console.log(isFullAge);
// console.log(now-2000 > now -2018);

let w,y;
w=y=25-10-5;//w=y=10   w=10 and y =10
//console.log(w,y);

const averageAge = (ageJonas+ ageSarah)/2;
//console.log(ageJonas, ageSarah, 'The average is '+averageAge);

//Strings and Template Literals
const firstName = 'Benson';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037;
const benson = "I'm "+ firstName +", a "+ (currentYear- birthYear) +" year old " +job;
// console.log(benson);


//Template Literals
const bensonNew = `I'm ${firstName}, a ${currentYear- birthYear} years old ${job}`;
// console.log(bensonNew);
//Using backticks
// console.log(`I love javascript`);

// Creating multiline strings without ES6
// console.log('This is a \n\ string with \n\ multiple lines');

//Creating multiline strings with backticks
// console.log(`This is a 
// string with 
// multiple lines`);
*/
//If Else Usage
const age = 15;
const isOldEnough = age >= 18;//boolean

if(isOldEnough){
    console.log('Benson can have a driving license.🚕');
}else{
    const yearsLeft = 18-age;
    console.log(`Benson is still a kid,he will have to wait for ${yearsLeft} years to earn one.`);
}
