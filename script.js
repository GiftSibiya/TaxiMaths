//Variables//
let drivers = document.getElementById("driverCash");
let change = document.getElementById("change");
let driverCash = document.getElementById("driverCut");
//Buttons//
let firstCalc = document.getElementById("firstBtn");
// Event Listeners //
let fareInput = document.getElementById("fare");
let totalSeatsInput = document.getElementById("total_seats");
let paidInput = document.getElementById("row_paid");
let seatsInput = document.getElementById("row_seats");

fareInput.addEventListener("input", calculateChange);
totalSeatsInput.addEventListener("input", calculateChange);
paidInput.addEventListener("input", calculateChange);
seatsInput.addEventListener("input", calculateChange);

function calculateChange() {
  /// Variables ///
  let fare = parseFloat(fareInput.value);
  let seats = parseFloat(totalSeatsInput.value);
  let paid = parseFloat(paidInput.value);
  let seats__row = parseFloat(seatsInput.value);
  /// test cases before calculations ///
  if (!isNaN(fare) && !isNaN(seats)) {
    drivers.innerText = `R ${(fare * seats).toFixed(2)}`;
  } else {
    console.log("Incomplete inputs");
  }
  if (!isNaN(fare) && !isNaN(paid) && !isNaN(seats__row)) {
    change.innerText = paid - fare * seats__row;
    driverCash.innerText = fare * seats__row;
  } else {
    change.innerText = "--";
    driverCash.innerText = "--";
    console.log("test");
  }
}

let addBtn = document.getElementById("add_button");
addBtn.addEventListener("click", addRow);
body = document.querySelector(".body");

function addRow() {
  let newRow = document.createElement("div");
  newRow.classList.add("body__row");
  newRow.innerHTML = "<h2>This is created</h2>";
  body.appendChild(newRow);
}
