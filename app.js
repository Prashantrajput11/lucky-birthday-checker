let user_birth_date = document.querySelector("#user-birth-date");
let user_lucky_number = document.querySelector("#user-lucky-number");
let show_success = document.querySelector(".show-success");
let show_failure = document.querySelector(".show-failure");
let check = document.querySelector("#check");

check.addEventListener("click", checkLuckyOrNot);

// get user birth date
//it will be in string, convert it to array
// calculate sum of it

function checkLuckyOrNot() {
  var sum_op = calculateSum(user_birth_date);

  if (sum_op % user_lucky_number.value === 0) {
    console.log("lucky");
    show_success.style.display = "block";
    show_failure.style.display = "none";
  } else {
    console.log("not lucky");
    show_failure.style.display = "block";
    show_success.style.display = "none";
  }
}

function calculateSum(user_birth_date) {
  let ubd = user_birth_date.value.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < ubd.length; i++) {
    sum = sum + Number(ubd.charAt([i]));
  }
  return sum;
}