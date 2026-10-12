//Javascript basics 

console.log('Hello');
console.log('How are you!');
document.getElementById("myH1").textContent = 'Hello, Developer!';
document.getElementById('myP').textContent = 'How are you Patrick welcome to my website.';
document.getElementById('myH1').style.color = 'red';

//Variables - cannot have the same name.

//variable declaration

//assignment

//datatypes

/*
let x = 100;
let y = "Patrick";

console.log(x);
console.log(y);
let price = 10.99;
console.log(price);

//ways of writing code with variables
console.log("How are you! " + y + " You bought goods for " + price+" ksh.");
console.log(`How are you! ${y} you bought goods worth, ${price} ksh. `);
document.getElementById("myP").textContent = `How are you! ${y} you bought goods worth, ${price} ksh. `;
document.getElementById("myH1").textContent = 'Hello '+ y;

//booleans
let online = false;
console.log(`${y} is online: ${online}.`);
let forSale = false;
console.log(`Hello ${y}! Is this car for sale? ${forSale}`)
*/
let fullName = "Patrick Ndung'u";
let age = 22;
isStudent = true;
document.getElementById("p1").textContent = `Your name is: ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `Enrolled in school: ${isStudent}`;

//Arithmetic operators

let students = 30;
//students = students + 10;
//students = students - 4;
//students = students * 4;
//students = students / 2;
//students = students ** 2; --power
//students = students % 2; ----modulus extra

//SIMPLER WAY

//students +=2;
//students **=2
//students /=2;
//students %=7;

//students ++;
//students--;

console.log(students);

//OPERATOR PRECEDENCE
/* FLOW
   blacket > exponents/power > multiplacation & div &modulus
   >add/subtract
*/
let result = 1 + 2 * 3 + 8 / 2 - 2 ** 2;
console.log(result);

//Accepting user input 

//Two ways ---1.window prompt 
//let userName  = window.prompt("Whats your name: ");
//console.log(userName);

//  2.html textbox
let myAge;
let fullText;
let birthDay;
let gender;
let course;
let myYears;

document.getElementById("myBtn").onclick = function () {
  //GREETINGS

  fullText = document.getElementById("myName").value;
  document.getElementById("myH1").textContent = `Welcome ${fullText}!`;
  document.getElementById('myP').textContent = `How are you ${fullText}! Welcome to my website.`;

  //COUNTING AGE

  birthDay = document.getElementById("myAge").value;
  myYears = 2026 - birthDay;
  document.getElementById("p1").textContent = `You are ${myYears} old!`;

  //GENDER
  gender = document.getElementById("myGender").value;
  document.getElementById("p2").textContent = `Its a pleasure to have a ${gender} here!`;

  //COURSE STUDY DECRALATION
  course = document.getElementById("myCourse").value;
  document.getElementById("p3").textContent = `You enrolled for ${course} degree.`
}

//Type conversion - change the datatype of a value to another

//let years = window.prompt("How old are you?");
//years =Number(years);
//years += 1;
//console.log(years);
/*let y = "";
let x = "";
let z = "";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y);
console.log(z);
*/

//CONSTANTS - Variables that cannot be changed 

const PI = 3.14159;
let radius;
let circumference;
radius = Number(radius);
document.getElementById("calculate").onclick = function () {
  radius = document.getElementById("radius").value;
  circumference = PI * 2 * radius;
  circumference = Math.round(circumference);
  document.getElementById("circumference").textContent = `The cicumference = ${circumference}`;
}

//COUNTER PROGRAM
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
}
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
}
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
}

//MATH = Built in object that gives a collection of properties and methods
let x = 45;
let y = 2;
let z;
//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(81);
//z = Math.log(2);
//z = Math.sin(x);
//z = Math.max(x, y);
//z = Math.min(x, y);
//console.log(z);

//RANDOM NUMBER GENERATOR
//const min = 10;
//const max = 50;
//let num = Math.ceil(Math.random()* (max - min));
//console.log(num);

//rollimg a dice
const myButton = document.getElementById("generate");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function () {
  randomNumber1 = Math.floor(Math.random() * max) + min;
  randomNumber2 = Math.floor(Math.random() * max) + min;
  randomNumber3 = Math.floor(Math.random() * max) + min;
  mylabel1.textContent = `${randomNumber1}`;
  mylabel2.textContent = `${randomNumber2}`;
  mylabel3.textContent = `${randomNumber3}`;
}

//IF STATEMENTS - IF A CONDITION IS TRUE , EXECUTE SOME CODE
//               IF NOT,DO SOMETHING ELSE.
//WRITEN AS IF(Condition){ What to be displayed}

//let time = 14;
// if(time < 12){
//   console.log("Good morning");
// }
// else{
//   console.log("Good afternoon");
// }
let isLearning = false;
if (isLearning) {
  console.log("I am learning!");
}
else {
  console.log("Graduated!");
}

//NESTED IF STATEMENTS

let learnersAge = 22;
let licenced = true;

if (learnersAge >= 18) {

  if (licenced) {
    console.log("You can drive becoz you have a licence.");
  }
  else {
    console.log("You can drive but you must have a licence.")
  }
}
else {
  console.log("You cannot Drive!");
}

//ELSEIF STATEMENTS 

// let Age = 13;
// if(Age>=20){
//   console.log("You are an adult!");
// }
// else if(Age>=13){
//   console.log("You are a Teenager!");
// }
// else{
//   console.log("You are a child!");
// }
const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const paragraph = document.getElementById("paragraph");
mySubmit.onclick = function ageTester() {
  if (myText.value == "") {
    paragraph.textContent = `Please enter a valid age!`;
    paragraph.style.color = "red";
  }
  else if (myText.value <= 0) {
    paragraph.textContent = `Your age must be more than 0.`;
    paragraph.style.color = "red";
  }
  else if (myText.value >= 70) {
    paragraph.textContent = `You are ${myText.value} years.You are old enough to be grandparent.`;
    paragraph.style.color = "green";
  }
  else if (myText.value >= 18) {
    paragraph.textContent = `You are ${myText.value} years.You are an adult.`;
    paragraph.style.color = "purple";
  }
  else if (myText.value <= 10) {
    paragraph.textContent = `You are ${myText.value} years.You are still a minor.`;
    paragraph.style.color = "orangered";
  }
  else {
    paragraph.textContent = `You are ${myText.value} years.You are a Teenager.`;
    paragraph.style.color = "blue";
  }
}

//CHECKED PROPERTY IN JAVASCRIPT -  Determines the checked state of an 
//              HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCard");
const paypal = document.getElementById("paypal");
const submitCards = document.getElementById("submitCards");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
submitCards.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `Subscribed!`
    if (visaBtn.checked) {
      paymentResult.textContent = `Paid through visa.`
    }
    else if (masterCard.checked) {
      paymentResult.textContent = `Paid through Master Card.`
    }
    else if (paypal.checked) {
      paymentResult.textContent = `Paid through Paypal.`
    }
  }
  else {
    subResult.textContent = `Not Subscribed!`
  }
}

//TERNARY OPERATOR - a Shortcut to if{} and else{}
//    Statements that helps to assign a variable based
//    on a condition ? codeIfTrue : codeIfFalse;

let myStatusAge = 18;
let message = myStatusAge >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

let purchase = 10;
let discount = purchase >= 100 ? "discount is 10%" : "no discount";
console.log(discount);

//SWITCH - Can be an efficient to many else if statements
//Break is used to stop the code from repetition 
// USE switch(value) when comparing the value if you have one thing and want to know what it is
// USE switch (true) test conditions that is if u are using cases like > <=
let day = 1;
switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  default:
    console.log(`${day} is not a day`);
}
let core = 6;
let grade;
switch (true) {
  case core >= 75:
    grade = "A";

  case core >= 65:
    grade = "B";

  default:
    grade = "F"

}
console.log(grade);

//STRING METHODS

let userName = "Patrick";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("c"));
// console.log(userName.lastIndexOf("c"));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toUpperCase().trim());
//  console.log(userName.toLowerCase().trim());
// console.log(userName.trim().charAt(0).toUpperCase());
// console.log(userName.repeat(2));
// console.log(userName.startsWith(""));
// console.log(userName.endsWith(" "));
// console.log(userName.includes("  "));
// console.log(userName.padStart(15,0));
// console.log(userName.padEnd(15,0));

if (userName.startsWith(" ")) {
  console.log("Your username cant begin with a space.")
}
else {
  console.log(userName);
}
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);
if (phoneNumber.indexOf("0") == 0) {
  console.log("correct");
}
else {
  console.log("Incorrect");
}

let nameChanger;
const greet = document.getElementById("greet");
const greetings = document.getElementById("greetings");

greet.onclick = function () {
  nameChanger = document.getElementById("nameChanger").value;
  if (nameChanger.toLowerCase().includes("pro")) {
    greetings.textContent = nameChanger.toLowerCase();
  }
  else {
    greetings.textContent = `Hello ${nameChanger}, You are not a Pro. `;
  }
}

///STRING SLICING  = Creating a substring from a portion 
//                  of another string 

//            string.slice(start, end)

const Fullname = "Patrick Ndung'u";

// let firstName = Fullname.slice(0,2);
// let lastName = Fullname.slice(8, 15);
// let firstChar = Fullname.slice(-1);
// let firstChar = Fullname.slice(-1);

let firstName = Fullname.slice(0, 4);
let lastName = Fullname.slice(Fullname.indexOf(" ") + 1);  //to remove the space +1
console.log(lastName);
console.log(firstName);


const email = "pn654277@gmail.com";
let Username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(Username);
console.log(extension);

//METHOD CHAINING = Calling one method after another
//                  in one continuous line of code.

//.......NO METHOD CHAINING.......

// let myUserName = window.prompt("Enter your user name: ");
// myUserName = myUserName.trim();
// let letter = myUserName.charAt(0);
// letter = letter.toUpperCase();
// let extra = myUserName.slice(1);
// extra =  extra.toLowerCase();
// myUserName = letter + extra;
// console.log(myUserName);

//.........METTHOD CHAINING.....
// let myUserName = window.prompt("Enter your user name: ");
// myUserName = myUserName.trim().charAt().toUpperCase() + myUserName.trim().slice(1).toLowerCase();
// console.log(myUserName);


// LOGICAL OPERATORS = Used to combine or manipulate boolean values
//                     (true or false)

//                 AND = &&
//                 OR = ||
//                 NOT = !

// const temp = 20;
// if(temp <= 0 || temp > 30){
//   console.log("The temp is BAD");
// }
// else{
//   console.log("The temp is GOOD");
// }
const isSunny = false;
if (!isSunny) {
  console.log("It is cloudy");
}
else {
  console.log("It is sunny");
}

//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
//  != inequality operator
// !== strictly inequality operator

const pi = 3.14;

if (pi !== "3.14") {
  console.log("its not pi");
}
else {
  console.log("its pi");
}

//WHILE LOOP = Repeat some code while some condition is true

let patrick;
// while(patrick ===  "" || patrick === null ){
//   patrick = window.prompt("Enter your Name");
// }
// do {
//   patrick = window.prompt("Enter your Name");
// } while (patrick === "" || patrick === null);
// console.log(`Hello ${patrick}`);

//PASSWORD TESTER

// let attempts = 3;
// let pin;
// do {

//   if (pin === "" || pin === null) {
//     pin = Number(window.prompt("Enter your pin: "));
//   }
//   else if (pin != 1234) {
//     pin = Number(window.prompt(`Enter your pin ${attempts} attempts remaining: `));
//     if (attempts >= 0 && attempts < 2) {
//       alert("Account locked!");
//     }
//   }

//   attempts -= 1;
// } while (attempts > 0);
// if (pin === 1234) {
//   alert("Access granted!");
// }

//FOR LOOP = repeat some code a limited amount of time

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} - Even`);
    // continue;
    // break;
  }
  else {
    console.log(`${i} - Odd`);
  }

}


//ATM SECURITY CHALLENGE

// const username = "patrick";
// const password = "1234";
// let attempts = 0;
// let user;
// let userpassword;
// let balance = 10000;
// let menutest = true;
// let login;
// while (attempts < 3 || login == false) {
//   user = window.prompt("Enter your username");
//   userpassword = window.prompt("Enter your password");

//   if (user == "" || user == null) {
//     window.alert("Enter a valid name");
//   }
//   if (userpassword == "" || userpassword == null) {
//     window.alert("Enter a valid password");
//   }
//   else {
//     attempts += 1;
//     let attempt = 3 - attempts;
//     if (user != username || userpassword != password) {
//       window.alert(`Wrong username/password! ${attempt} Remaining.`);
//     }
//     else {
//       window.alert("Logged in!");
//       login = true;
//       break;
//     }
//   }

// }
// if (login) {
//   while (menutest) {
//     let menu = window.prompt("Select; 1 Check balance: 2 Withdraw: 3 Exit:");
//     if (menu == "" || menu == null) {
//       let menu = window.prompt("Select; 1 Check balance: 2 Withdraw: 3 Exit:");
//     }
//     else if (menu == "1") {
//       window.alert(`${balance}`);
//       break;
//     }
//     else if (menu == "2") {
//       let withdraw = Number(window.prompt("Enter amount you want to withdraw: "));
//       if (isNaN(withdraw) || withdraw == "") {
//         window.alert("Enter a valid amount");
//       }
//       else if (withdraw > balance) {
//         window.alert("Insufficient funds");
//         break;
//       }
//       else {
//         let bal = balance - withdraw;
//         window.alert(`You have successfully withdraw ksh ${withdraw}. Your balance is ksh ${bal}.`);
//         break;
//       }
//     }
//     else if (menu == "3") {
//       break;
//     }
//   }
// }

//FUNCTIONS  = A section of reusable code.
//             Declare code once, use it whenever you want.
//             Call the function to execute that code.

// function happyBirthday(name,years){
//   console.log(`Happy birthday to ${name}!`);
//   console.log(`You are ${years} years old!`);
//   console.log(`Happy birthday to ${name}!`);
//   console.log("Happy birthday dear you!");
// }

// happyBirthday("Patrick",22);
// happyBirthday("Oscar",50);

//Return keyword 

// function add(x, y) {
//   let result = x + y;
//   // console.log(result);
//   return result;
// }
// add(50,90);
// console.log(add(2, 3));

// function minus(x,y){
//   return x-y;
// }
// function multiplacation(x,y){
//   return x * y;
// }
// console .log(multiplacation(5,2));


function even(email) {
  let message;
  if (email.includes("@")) {
    message = "Valid Email.";
  }
  else {
    message = "Invalid email";
  }
  return message;
}
console.log(even("Patr@"));

function grad(marks) {
  let grade;
  if (marks > 100) {
    grade = "Invalid marks";
  }
  else if (marks >= 80) {
    grade = "A";
  }
  else if (marks >= 70) {
    grade = "B";
  }
  else if (marks >= 60) {
    grade = "C";
  }
  else if (marks >= 50) {
    grade = "D";
  }
  else {
    grade = "F";
  }
  return grade;
}
console.log(grad(50));

function multiply(x) {
  let result;
  let output = "";
  for (let i = 1; i <= 5; i++) {
    result = i * x;
    output += `${i} x ${x} = ${result}\n`;
  }
  // console.log(`${i} x ${x} = ${result}`);
  // console.log(result);
  return output;
}
console.log(multiply(5));

//VARIABLE SCOPE  = where a variable is recognized and
//                  accessible (local vs global)

function func1() {
  let x = 1;
  console.log(x);
}
function func2() {
  let x = 2;
  console.log(x);
}
func2();

//temp convertor

const textBox = document.getElementById("textBox");
const radioBtn1 = document.getElementById("radioBtn1");
const radioBtn2 = document.getElementById("radioBtn2");
const answer = document.getElementById("answer");
let calc;
function convert() {
  if (radioBtn1.checked) {
    calc = Number(textBox.value) + 273;
    answer.textContent = calc.toFixed(1) + ` K`;
  }
  else if (radioBtn2.checked) {
    calc = Number(textBox.value) - 273;
    answer.textContent = calc.toFixed(1) + `\u00B0 C`;
  }
  else {
    answer.textContent = "Select a unit";
  }
}

const balanceAtm = document.getElementById("balanceAtm");
const withdrawAtm = document.getElementById("withdrawAtm");
const depAtm = document.getElementById("depAtm");
let isSent = true;
let blc = 10000;
let withd;
let dep;
function user_service() {
  while (isSent) {
    if (!balanceAtm.checked && !withdrawAtm.checked && !depAtm.checked) {
      window.alert("You did not select anything.");
      break;
    }
    else if (withdrawAtm.checked) {
      withd = Number(window.prompt("Enter amount you want to withdraw"));
      if (isNaN(withd) || withd == "") {
        withd = Number(window.prompt("Enter a valid amount"));
        if (withd > blc) {
          let insuf = window.prompt("Insufficient funds press 1.Continue 2.exit");
          if (insuf == "1") {
            continue;
          }
          else {
            break;
          }
        }
        else {
          blc -= withd;
          window.alert(`Withdrawal successful. Your balance is ${blc}`);
          break;
        }
      }
      else if (withd > blc) {
        let insuf = window.prompt("Insufficient funds press 1.Continue 2.exit");
        if (insuf == "1") {
          continue;
        }
        else {
          break;
        }
      }
      else {
        blc -= withd;
        window.alert(`Withdrawal successful. Your balance is ${blc}`);
        break;
      }
    }

    else if (depAtm.checked) {
      dep = Number(window.prompt("Enter amount to deposit"));
      blc += dep;
      window.alert(`Your balance is ${blc}`);
      break;
    }
    else {
      window.alert(`Your balance is ${blc}`);
      break;
    }
  }
}

//ARRAYS = a variable like structure that can hold more than 1 value

let fruit = ["apple", "orange", "banana"];
// fruit.push("coconut"); = adding an item to the end
// fruit.pop();  = remove the last item
// fruit.unshift("mango"); add item in the beginning
// fruit.shift(); = remove the first item in the array

// let numFruit  = fruit.length;
// let index = fruit.indexOf("orange");

// fruit.sort().reverse();


//SPREAD OPERATOR  = ... allows an iterable such as an
//                   array or string to be expanded into separate
//                   elements (unpacks the elements)

// let letters = [...user].join("-");
// let numbs = ["apple", "banana", "orange"];
// let maximum = Math.max(...numbs);
// let minimum = Math.min(...numbs);
// let vegns = ["sukuma", "cabbage", "tomato"];
// let newFruits = [...numbs, ...vegns];
// console.log(newFruits);


let sum = 0;
let allTogether;
function analyzer(sales){
  for(let i = 0; i<sales.length;i++){
    sum += sales[i];
  }
  let maxim = Math.max(...sales);
  let minim = Math.min(...sales);
  let av = sum/sales.length;
  allTogether = [sum,maxim,minim,av];
  return allTogether;
}
analyzer([100,200,500,800]);
console.log(`Total sales = ${allTogether[0]}.`);
console.log(`Highest sales = ${allTogether[1]}.`);
console.log(`Lowest sales = ${allTogether[2]}.`);
console.log(`Average sales = ${allTogether[3]}.`);