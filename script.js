//Variables//
let drivers = document.getElementById("driverCash");
let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");
let change5 = document.getElementById("change5");
let change6 = document.getElementById("change6");
let change7 = document.getElementById("change7");
let driverCash1 = document.getElementById("driverCut1");
let driverCash2 = document.getElementById("driverCut2");
let driverCash3 = document.getElementById("driverCut3");
let driverCash4 = document.getElementById("driverCut4");
let driverCash5 = document.getElementById("driverCut5");
let driverCash6 = document.getElementById("driverCut6");
let driverCash7 = document.getElementById("driverCut7");
//Buttons//
let firstCalc = document.getElementById("firstBtn");
// Event Listeners for calculation on user input //
let fareInput = document.getElementById("fare");
let totalSeatsInput = document.getElementById("total_seats");
let paidInput1 = document.getElementById("p1");
let seatsInput1 = document.getElementById("s1");
let paidInput2 = document.getElementById("p2");
let seatsInput2 = document.getElementById("s2");
let paidInput3 = document.getElementById("p3");
let seatsInput3 = document.getElementById("s3");
let paidInput4 = document.getElementById("p4");
let seatsInput4 = document.getElementById("s4");
let paidInput5 = document.getElementById("p5");
let seatsInput5 = document.getElementById("s5");
let paidInput6 = document.getElementById("p6");
let seatsInput6 = document.getElementById("s6");
let paidInput7 = document.getElementById("p7");
let seatsInput7 = document.getElementById("s7");

fareInput.addEventListener("input", calculateChange);
totalSeatsInput.addEventListener("input", calculateChange);
paidInput1.addEventListener("input", calculateChange);
seatsInput1.addEventListener("input", calculateChange);
paidInput2.addEventListener("input", calculateChange);
seatsInput2.addEventListener("input", calculateChange);
paidInput3.addEventListener("input", calculateChange);
seatsInput3.addEventListener("input", calculateChange);
paidInput4.addEventListener("input", calculateChange);
seatsInput4.addEventListener("input", calculateChange);
paidInput5.addEventListener("input", calculateChange);
seatsInput5.addEventListener("input", calculateChange);
paidInput6.addEventListener("input", calculateChange);
seatsInput6.addEventListener("input", calculateChange);
paidInput7.addEventListener("input", calculateChange);
seatsInput7.addEventListener("input", calculateChange);

function calculateChange() {
  /// Variables ///
  let fare = parseFloat(fareInput.value);
  let seats = parseFloat(totalSeatsInput.value);
  let paid1 = parseFloat(paidInput1.value);
  let seats__row1 = parseFloat(seatsInput1.value);
  let paid2 = parseFloat(paidInput2.value);
  let seats__row2 = parseFloat(seatsInput2.value);
  let paid3 = parseFloat(paidInput3.value);
  let seats__row3 = parseFloat(seatsInput3.value);
  let paid4 = parseFloat(paidInput4.value);
  let seats__row4 = parseFloat(seatsInput4.value);
  let paid5 = parseFloat(paidInput5.value);
  let seats__row5 = parseFloat(seatsInput5.value);
  let paid6 = parseFloat(paidInput6.value);
  let seats__row6 = parseFloat(seatsInput6.value);
  let paid7 = parseFloat(paidInput7.value);
  let seats__row7 = parseFloat(seatsInput7.value);
  /// test cases before calculations ///
  if (!isNaN(fare) && !isNaN(seats)) {
    drivers.innerText = `R ${(fare * seats).toFixed(2)}`;
  } else {
    console.log("Incomplete inputs");
  }

  //// Yes i'm going the long way i know, this is screaming for some refactoring ////
  if (!isNaN(fare) && !isNaN(paid1) && !isNaN(seats__row1)) {
    change1.innerText = paid1 - fare * seats__row1;
    driverCash1.innerText = fare * seats__row1;
  } else {
    change1.innerText = "--";
    driverCash1.innerText = "--";
  }
  //// second row ////
  if (!isNaN(fare) && !isNaN(paid2) && !isNaN(seats__row2)) {
    change2.innerText = paid2 - fare * seats__row2;
    driverCash2.innerText = fare * seats__row2;
  } else {
    change2.innerText = "--";
    driverCash2.innerText = "--";
  }
  //// third row ////
  if (!isNaN(fare) && !isNaN(paid3) && !isNaN(seats__row3)) {
    console.log("looking good");
    change3.innerText = paid3 - fare * seats__row3;
    driverCash3.innerText = fare * seats__row3;
  } else {
    change3.innerText = "--";
    driverCash3.innerText = "--";
  }
  //// forth row ////
  if (!isNaN(fare) && !isNaN(paid4) && !isNaN(seats__row4)) {
    change4.innerText = paid4 - fare * seats__row4;
    driverCash4.innerText = fare * seats__row4;
  } else {
    change4.innerText = "--";
    driverCash4.innerText = "--";
  }
  //// fith row ////
  if (!isNaN(fare) && !isNaN(paid5) && !isNaN(seats__row5)) {
    change5.innerText = paid5 - fare * seats__row5;
    driverCash5.innerText = fare * seats__row5;
  } else {
    change5.innerText = "--";
    driverCash5.innerText = "--";
  }
  //// sixth row ////
  if (!isNaN(fare) && !isNaN(paid6) && !isNaN(seats__row6)) {
    console.log("looking good");
    change6.innerText = paid6 - fare * seats__row6;
    driverCash6.innerText = fare * seats__row6;
  } else {
    change6.innerText = "--";
    driverCash6.innerText = "--";
  }
  //// seventh row ////
  if (!isNaN(fare) && !isNaN(paid7) && !isNaN(seats__row7)) {
    console.log("seventh looking good");
    change7.innerText = paid7 - fare * seats__row7;
    driverCash7.innerText = fare * seats__row7;
  } else {
    change7.innerText = "--";
    driverCash7.innerText = "--";
    console.log("testing seventh");
  }
}

// This section is for updating the application frame when additional rows are added
let add2ndBtn = document.getElementById("add2ndBtn");
let add3rdBtn = document.getElementById("add3rdBtn");

add2ndBtn.addEventListener("click", add2ndFare);
add3rdBtn.addEventListener("click", add3rdFare);

function add2ndFare() {
  console.log("2nd row addition test");
  document.querySelector(".body").style.height = "200px";
  document.querySelector(".secondFare").style.height = "260px";
  document.querySelector(".background").style.height = "120vh";
  document.querySelector(".secondFare").style.display = "flex";
  document.querySelector(".frame").style.height = "700px";
  document.querySelector(".add3rd").style.display = "flex";
  document.querySelector(".add2nd").style.display = "none";
}
function add3rdFare() {
  console.log("hello world");
  document.querySelector(".body").style.height = "200px";
  document.querySelector(".thirdFare").style.height = "260px";
  document.querySelector(".background").style.height = "180vh";
  document.querySelector(".frame").style.margin = "200px 0px";
  document.querySelector(".thirdFare").style.display = "flex";
  document.querySelector(".frame").style.height = "950px";
  add3rdBtn.style.display = "none";
}
