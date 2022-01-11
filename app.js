// Get variables from html file
let user_birth_date = document.querySelector("#user-birth-date");
let user_lucky_number = document.querySelector("#user-lucky-number");
let show_success = document.querySelector(".show-success");
let show_failure = document.querySelector(".show-failure");
let show_validate = document.querySelector(".show-validate");
let check = document.querySelector("#check");
let close = document.querySelector("#close-privacy");
let privacy_note = document.querySelector(".privacy-note");


let privacyData = () => privacy_note.style.display = "none";

// Handler function for close button
close.addEventListener("click", privacyData)




// function to calculate sum of user birthdate.
let calculateSum = user_birth_date => {

  // get user birth date
  // it will be in string, convert it to array
  // calculate sum of it

  // Replace '-' to '' empty string
  let ubd = user_birth_date.value.replaceAll('-', '')
  let sum = 0;

  // Iterate
  for(let ch of ubd){
  sum += Number(ch) // convert string to number  data type
  }
}


// Core logic function - Checks if user is lucky or note
let checkLuckyOrNot = ()=> {

  // Store the sum of user's birthdate
  let sum_op = calculateSum(user_birth_date);

  // If user-birth-date and user-lucky-number are empty
  if (
    user_birth_date.value === "" ||
    user_lucky_number.value === ""
    ){
    show_validate.innerText = "please Enter Valid Values";
  } 
  // If sum of user bday when divided by his lucky number gives 0
  else if (sum_op % user_lucky_number.value === 0) {
    show_success.style.display = "block";
    show_failure.style.display = "none";
    show_validate.innerText = "";
  } 
  else {
    show_failure.style.display = "block";
    show_success.style.display = "none";
    show_validate.innerText = "";
  }
}


// Handler function
check.addEventListener("click", checkLuckyOrNot);



