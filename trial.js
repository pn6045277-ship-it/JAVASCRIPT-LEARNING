const currentYear = Number(2026);

const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function () {
  const Name = document.getElementById("Name").value;
  const course = document.getElementById("course").value;
  const birthYear = Number(document.getElementById("age").value);
  age = currentYear - birthYear;
  document.getElementById("students-name").textContent = `${Name}`;
  document.getElementById("students-course").textContent = `${course}`;
  document.getElementById("students-age").textContent = `${age}`;
  const monthlyIncome = Number(document.getElementById("monthlyIncome").value);
  const rent = Number(document.getElementById("rent").value);
  const food = Number(document.getElementById("food").value);
  const transport = Number(document.getElementById("transport").value);
  const otherExpenses = Number(document.getElementById("otherExpenses").value);
  const expenses = rent + food + transport + otherExpenses;
  const remainingMoney = monthlyIncome - expenses;
  const spentPercentage = Math.floor((expenses / monthlyIncome) * 100);
  document.getElementById("totalExpenses").textContent = `ksh ${expenses}`;
  document.getElementById("remainingMoney").textContent = `ksh ${remainingMoney}`;
  document.getElementById("spentPercentage").textContent = `${spentPercentage}%`;
  const score = document.getElementById("score").value;
  if (score > 100) {
    document.getElementById("invalid").textContent = `Invalid input enter score between (0 - 100)`;
    document.getElementById("invalid").style.color = "red";
  }
  else if (score >= 85) {
    document.getElementById("students-score").textContent = `A`;
    document.getElementById("students-performance").textContent = `Excellent!`;
    if (spentPercentage <= 50) {
      document.getElementById("finalMessage").textContent = `You Passed and still managed money.Great Job!`;
    }
    else {
      document.getElementById("finalMessage").textContent = `You Passed but try to manage well money.Good!`;
    }
  }
  else if (score >= 65) {
    document.getElementById("students-score").textContent = `B`;
    document.getElementById("students-performance").textContent = `Very Good!`;
    if (spentPercentage <= 50) {
      document.getElementById("finalMessage").textContent = `You Passed and still managed money.Good Job!`;
    }
    else {
      document.getElementById("finalMessage").textContent = `You Passed but can improve in managing money.Good Job!`;
    }
  }
  else if (score >= 50) {
    document.getElementById("students-score").textContent = `C`;
    document.getElementById("students-performance").textContent = `Average!`;
    if (spentPercentage <= 50) {
      document.getElementById("finalMessage").textContent = `You can do better in studies but you managed well money.Good trial!`;
    }
    else {
      document.getElementById("finalMessage").textContent = `You tried and Passed but try to also manage money.Try harder!`;
    }
  }
  else if (score >= 35) {
    document.getElementById("students-score").textContent = `D`;
    document.getElementById("students-performance").textContent = `Poor!`;
    if (spentPercentage <= 50) {
      document.getElementById("finalMessage").textContent = `Improve on your studies but you managed money.Try to improve!`;
    }
    else {
      document.getElementById("finalMessage").textContent = `You have to improve on studies and managing money.Poor results!`;
    }
  }
  else {
    document.getElementById("students-score").textContent = `F`;
    document.getElementById("students-performance").textContent = `Fail!`;
    if (spentPercentage <= 50) {
      document.getElementById("finalMessage").textContent = `You failed in your studies but you managed money.Can do better!`;
    }
    else {
      document.getElementById("finalMessage").textContent = `You failed and did not manage money.Very poor!`;
    }
  }

  document.getElementById("reportbar").style.display = "block";
}

//Game payment

let customersName;
const customersAge = document.getElementById("customersAge");
const customersAmount = document.getElementById("customersAmount");
const buyGame = document.getElementById("buyGame");
const buyerPayment = document.getElementById("buyerPayment");
const terms = document.getElementById("terms");
const warning = document.getElementById("warning");
const gameSummary = document.querySelector(".game-summary");
const games = document.querySelector("#games");
const payment = document.getElementById("payment");
let price = 0;
let balance;

buyGame.onclick = function () {
  customersName = document.getElementById("customersName").value;
  if (customersName.value == "") {
    document.getElementById("emptyName").textContent = "Please fill in your Name!";
    document.getElementById("emptyName").style.color = "red";
  }
  else if (customersAge.value == "") {
    document.getElementById("emptyName1").textContent = "Please fill in your Age!";
    document.getElementById("emptyName1").style.color = "red";
  }
  else if (payment.value == "") {
    document.getElementById("emptyName3").textContent = "Please select a method of payment!";
    document.getElementById("emptyName3").style.color = "red";
  }
  else if (games.value == "") {
    document.getElementById("emptyName4").textContent = "Please select a game!";
    document.getElementById("emptyName4").style.color = "red";

  }
  else if (customersAmount.value == "") {
    document.getElementById("emptyName5").textContent = "Please enter amount you want to pay!";
    document.getElementById("emptyName5").style.color = "red";

  }
  else if (terms.checked) {
    warning.style.display = "none";
    document.querySelector(".gameSummary").style.display = "block";
  }
  else {
    document.querySelector(".gameSummary").style.display = "none";
    warning.textContent = `You must accept to the terms and conditions!`;
    warning.style.color = "red";
  }

  //GAMES PRICES 
  switch (games.value) {
    case "Fifa":
      price = 2000;
      break;
    case "Minecraft":
      price = 1000;
      break;
    case "Fortnite":
      price = 500;
      break;
    case "Gta":
      price = 1500;
      break;
    default:
      price = 0;
      break;
  }

  // if (games.value === "Fifa") {
  //   price = 2000;
  // }
  // else if (games.value === "Minecraft") {
  //   price = 1000;
  // }
  // else if (games.value === "Fortnite") {
  //   price = 500;
  // }
  // else if (games.value === "Gta") {
  //   price = 1500;
  // }
  // else if (games.value === "Gta"){
  //   price = 0;
  // }

  let customerName = customersName.trim().charAt(0).toUpperCase() + customersName.slice(1).trim().toLowerCase();
  document.getElementById("buyerPayment").textContent = `${payment.value}`;
  document.getElementById("buyerName").textContent = `${customerName}`;
  document.getElementById("buyerGame").textContent = `${games.value}`;
  document.getElementById("buyerAge").textContent = `${customersAge.value}`;
  document.getElementById("buyerGame").textContent = `${games.value}`;
  document.getElementById("buyerPayment").textContent = `${payment.value}`;
  document.getElementById("buyerPrice").textContent = `ksh ${Number(price)}`;
  document.getElementById("buyerpaid").textContent = `ksh ${Number(customersAmount.value)}`;
  balance = Number(price) - Number(customersAmount.value);
  balance > 0 ? document.getElementById("buyerBalance").textContent = `ksh ${balance}` : document.getElementById("buyerBalance").textContent = `None`;
}

//PROFILE CREATOR

const studentsName = document.getElementById("studentsName");
const studentsCourse = document.getElementById("studentsCourse");
const studentsYear = document.getElementById("studentsYear");
const studentsAge = document.getElementById("studentsAge");
const favourite = document.getElementById("favourite");
const skills = document.getElementById("skills");
const checkbox = document.getElementById("checkbox");
const profile = document.getElementById("profile");

profile.onclick = function () {
  let dp = document.querySelector(".dp");
  dp.textContent = studentsName.value.trim().charAt(0).toUpperCase();
  let myNames = document.getElementById("myNames");
  myNames.textContent = `${studentsName.value.trim().slice(0, studentsName.value.indexOf(" ")).toUpperCase()}...`;
  let myCourse = document.getElementById("myCourse");
  myCourse.textContent = studentsCourse.value.trim().charAt(0).toUpperCase() + studentsCourse.value.trim().slice(studentsCourse.value.indexOf(" ") + 1).charAt(0).toUpperCase();
  let myStudy = document.getElementById("myStudy");
  let skill = document.getElementById("mySkills");
  skill.textContent = skills.value.trim().charAt(0).toUpperCase() + skills.value.slice(1).toLowerCase();
  myStudy.textContent = studentsYear.value;
  let age = Number(studentsAge.value);
  switch (true) {
    case age <= 0:
      document.getElementById("myAge").textContent = "Enter a valid age.";
      break;
    case age <= 15:
      document.getElementById("myAge").textContent = "You are not a campus student.";
      break;
    case age >= 50:
      document.getElementById("myAge").textContent = "You are too old to be a campus student.";
      break;
    case age <= 18:
      document.getElementById("myAge").textContent = "Young student.";
      break;
    case age >= 25:
      document.getElementById("myAge").textContent = "Mature Student.";
      break;
    case age >= 19:
      document.getElementById("myAge").textContent = "Student.";
      break;
    default:
      document.getElementById("myAge").textContent = `${studentsAge.value} is not a valid age.`;
      break;
  }
  let favouriteLanguage = favourite.value;
  switch (true) {
    case favouriteLanguage == "Python":
      document.getElementById("myLanguage").textContent = `${favouriteLanguage} is a beginner friendly Language.`;
      break;
    case favouriteLanguage == "Javascript":
      document.getElementById("myLanguage").textContent = `${favouriteLanguage} is a web Language.`;
      break;
    case favouriteLanguage == "PHP":
      document.getElementById("myLanguage").textContent = `${favouriteLanguage} is a web backened Language.`;
      break;
    case favouriteLanguage == "Java":
      document.getElementById("myLanguage").textContent = `${favouriteLanguage} is an object-riented Language.`;
      break;
  }
  if (checkbox.checked) {
    document.getElementById("Ready").textContent = `You are Project ready.`
  }
  else {
    document.getElementById("Ready").textContent = `You are not Project ready.`
  }
}

// SHOP CHECKOUT 

const custName = document.getElementById("custName");
const custAge = document.getElementById("custAge");
const product = document.getElementById("products");
const quantity = document.getElementById("quantity");
const custAmount = document.getElementById("custAmount");
const discount = document.getElementById("discount");
const code = document.getElementById("code");
const complete = document.getElementById("complete");
complete.onclick = function () {
  let Price;
  let Discount;
  let status;
  switch (product.value) {
    case "Keyboard":
      Price = 45000;
      break;
    case "Speaker":
      Price = 30000;
      break;
    case "Microphone":
      Price = 5000;
      break;
    case "Headphones":
      Price = 2500;
      break;
  }



  let total = Price * Number(quantity.value);

  if (discount.checked = true && Number(code.value) === 1234) {
    Discount = (5 / 100) * total;
  }
  else {
    Discount = 0;
  }
  Number(custAmount.value) >= total ? status = "Purchase Approved" : status = "Insufficient Funds";
  let customName = custName.value.trim().charAt(0).toUpperCase() + custName.value.trim().slice(1,).toLowerCase();

  let balance = (total - Discount) - Number(custAmount.value);

  if (custName.value === "" || custAmount.value === "" || custAge.value === "" || quantity.value === ""
    || product.value === "") {
    document.getElementById("errors").textContent = "Please fill in all the spaces necessary.";
    document.querySelector(".resultShop").style.display = "none";
    document.getElementById("errors").style.color = "red";
  }
  else if (Number(custAge.value) < 18 && product.value === "Keyboard") {
    document.getElementById("errors").textContent = "You cannot Purchase this product you are Under age.";
    document.querySelector(".resultShop").style.display = "none";
    document.getElementById("errors").style.color = "red";
  }
  else {
    document.getElementById("errors").style.display = "none";
    document.querySelector(".resultShop").style.display = "block";
  }

  document.getElementById("custname").textContent = `Customer: ${customName}`;
  document.getElementById("prod").textContent = `Product: ${product.value}`;
  document.getElementById("quant").textContent = `Quantity: ${quantity.value}`;
  document.getElementById("unitprice").textContent = `Unit Price: ${Price}`;
  document.getElementById("subtotal").textContent = `Subtotal: ${total}`;
  document.getElementById("disc").textContent = `Discount: ${Discount}`;
  document.getElementById("total").textContent = `Total: ${(total - Discount)}`;
  document.getElementById("paym").textContent = `Paid: ${custAmount.value}`;
  document.getElementById("balance").textContent = `Balance: ${balance}`;
  document.getElementById("status").textContent = `Status: ${status}`;
}
let user_name = "Patrick";
let new_name = user_name.trim().charAt(0).toUpperCase() + user_name.slice(1, 2).toLowerCase() + user_name.slice(2, 3).toUpperCase()
  + user_name.slice(3).toLowerCase();
console.log(new_name);

//ARRAYS 

let marks = [20, 45, 65, 70];
let total = 0;
let average;
let higher = marks[0];
let smaller = marks[0];
for (let mark = 0; mark < marks.length; mark++) {
  total += marks[mark];
  if (marks[mark] > higher) {
    higher = marks[mark];
  }
  else if (marks[mark] < smaller) {
    smaller = marks[mark];
  }
  console.log(marks[mark]);
}

average = total / marks.length;
console.log(total);
console.log(average);
console.log(`${higher}`);
console.log(`${smaller}`);


let score1 = 0;
let score2 = 0;
function diceRoller() {
  // const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const winner = document.getElementById("winner");
  let win;
  const values = [];
  const images = [];
  for (let i = 1; i < 3; i++) {
    const rand = Math.floor(Math.random() * 6) + 1;
    values.push(rand);
    if (values[0] > values[1]) {
      win = "Player 1 won";
      score1++;
    }
    else if (values[1] > values[0]) {
      win = "Player 2 won";
      score2++;
    }
    else {
      win = "You are draw"
    }
    images.push(`<div class="imag"><h2>Player ${i}</h2><img src="pics/${rand}.jpg"></div>`);
  }
  document.getElementById("score1").textContent = `Player 1 score : ${score1} points`;
  document.getElementById("score2").textContent = `Player 2 score : ${score2} points`;
  winner.textContent = win;
  diceImages.innerHTML = images.join(" ");
  diceResult.textContent = `Dice: ${values.join(", ")}`;
}

//NUMBER GUESSING GAME
const computerGuess = Math.floor(Math.random() * 100) + 1;
let attemptTimes = 5;
function numbGuess() {

  let number = Number(document.getElementById("secret").value);
  let attempts = document.getElementById("attempts");
  let guessMessage;
  if (attemptTimes <= 0 ) {
      document.getElementById("guessMessage").textContent = `Incorrect!Attempts Over`;
    return;
  }
  if (number == null || isNaN(number)) {
    guessMessage = "Enter a valid number";
  }
  else if (number > computerGuess) {
    guessMessage = "Too High";
    attemptTimes--;
  }
  else if (number < computerGuess) {
    guessMessage = "Too Low";
    attemptTimes--;
  }
  else if (number === computerGuess) {
    guessMessage = "Correct";
  }

  document.getElementById("guessMessage").textContent = `${guessMessage}`;
  attempts.textContent = `${attemptTimes}`;
}