// const date = new Date();

// console.log(date);

// const currentDate = date.setDate(10);

// console.log(currentDate)

const date = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Date of the day in the countDown

const countDownDate = new Date("August 13, 2022 15:0:0").getTime();

// console.log(countDownDate);

let x = setInterval(() => {
  //Date of today in ms

  const today = new Date().getTime();

//   console.log(today);

  // today and day we want difference in ms

  const difference = countDownDate - today;

  let day = Math.floor(difference / (1000 * 60 * 60 *24));

  let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  date.innerHTML = day;
  hour.innerHTML = hour;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}, 1000);
