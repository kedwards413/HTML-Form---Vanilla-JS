/* eslint-disable */
import "bootstrap";
import "./styles.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cancel = document.querySelector(".btn-secondary").innerHTML;
const errorAlert = [
  "Card #",
  "CVC #",
  "Amount",
  "First Name",
  "Last Name",
  "City",
  "State",
  "Postal Code"
];
const allInputs = document.querySelectorAll(".form-control");

function displayError(message) {
  var errorField = document.querySelector(".alert");
  errorField.innerHTML += `<p>${message}</p>`;
}

function validation() {
  event.preventDefault();
  var cardnumber = document.querySelector("#cardnumber");
  var CCV = document.querySelector("#CCV");
  var amount = document.querySelector("#amount");
  var firstname = document.querySelector("#firstname");
  var lastname = document.querySelector("#lastname");
  var city = document.querySelector("#city");
  var state = document.querySelector("#state");
  var zipcode = document.querySelector("#zipcode");

  if (cardnumber.value < 1000000000000000) {
    displayError("Card number must be 16 digits");
    cardnumber.classList.add("invalid");
  }
  if (CCV.value.length != 3) {
    displayError("CCV must be 3 digits");
    CCV.classList.add("invalid");
  }
  if (amount.value.length > 0) {
    displayError("Amount required");
    amount.classList.add("invalid");
  }
  if (firstname.value.length > 1) {
    displayError("First name required");
    firstname.classList.add("invalid");
  }
  if (lastname.value.length > 1) {
    displayError("Last name required");
    lastname.classList.add("invalid");
  }
  if (city.value.length < 2) {
    displayError("City required");
    city.classList.add("invalid");
  }
  if (state.value === "Choose...") {
    displayError("Choose a state");
    state.classList.add("invalid");
  }
  if (zipcode.value.length != 5) {
    displayError("Enter 5 digit zip code");
    zipcode.classList.add("invalid");
  }
}

document.querySelector("#myform").addEventListener("submit", validation);
