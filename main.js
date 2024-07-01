const time = document.getElementById("time");
const timeit = `${new Date().toUTCString()}`;
time.textContent = timeit;
const day = document.getElementById("day");

const current =
  new Date().getDay() == 0
    ? "Sunday"
    : new Date().getDay() == 1
    ? "Monday"
    : new Date().getDay() == 2
    ? "Tuesday"
    : new Date().getDay() == 3
    ? "Wednesday"
    : new Date().getDay() == 4
    ? "Thursday"
    : new Date().getDay() == 5
    ? "Friday"
    : "Saturday";

day.textContent = current;
