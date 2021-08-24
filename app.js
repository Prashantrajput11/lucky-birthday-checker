let user_birth_date = document.querySelector("#user-birth-date");
let user_lucky_number = document.querySelector("#user-lucky-number");
let show_success = document.querySelector(".show-success");
let show_failure = document.querySelector(".show-failure");
let show_validate = document.querySelector(".show-validate");
let check = document.querySelector("#check");
let close = document.querySelector("#close-privacy");
let privacy_note = document.querySelector(".privacy-note");
close.addEventListener("click", function () {
  console.log("closed");
  privacy_note.style.display = "none";
});

check.addEventListener("click", checkLuckyOrNot);

// get user birth date
//it will be in string, convert it to array
// calculate sum of it

function checkLuckyOrNot() {
  var sum_op = calculateSum(user_birth_date);

  if (user_birth_date.value === "" || user_lucky_number.value === "") {
    show_validate.innerText = "please Enter Valid Values";
  } else if (sum_op % user_lucky_number.value === 0) {
    show_success.style.display = "block";
    show_failure.style.display = "none";
    show_validate.innerText = "";
  } else {
    show_failure.style.display = "block";
    show_success.style.display = "none";
    show_validate.innerText = "";
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
