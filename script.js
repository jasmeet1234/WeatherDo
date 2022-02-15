// VARIABLES....................................................
const btnLanding = document.querySelector(".btn-landing");
const section2 = document.querySelector(".section2");
const landingForm = document.querySelector("#name");
const section1 = document.querySelector(".landing_page");
const locationLan = document.querySelector(".landingLocationCon");
const p1CityName = document.querySelector(".panel1-cityName");
const p1Day = document.querySelector(".panel1-DateTime-day");
const p1Time = document.querySelector(".panel1-DateTime-time");
const p1Month = document.querySelector(".panel1-DateTime-Month");
const p1Date = document.querySelector(".panel1-DateTime-Date");
const p1Temp = document.querySelector(".panel1-temp");
const p1Weather = document.querySelector(".panel1-weather");
const p1 = document.querySelector(".panel1");

//Api Calls
async function apiCallBtn(location) {
  return fetch(
    `http://api.weatherstack.com/current?access_key=e4b00e1b14c307c6ce0e20daf670b56f&query=${location}&forecast_days=3`
  );
}
async function apiCallGps(lat, long) {
  return fetch(
    `http://api.weatherstack.com/current?access_key=e4b00e1b14c307c6ce0e20daf670b56f&query=${lat},${long}&forecast_days=3`
  );
}
//Common api
const commonApi = function (el) {
  console.log(el);
  p1CityName.textContent = el.location.name;
  const day = new Date(el.location.localtime);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  p1Day.textContent = days[day.getDay()] + ",";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (day.getHours() > 6 && day.getHours() <= 19) {
    section2.style.backgroundImage =
      "linear-gradient(to right top, rgba(126, 212, 255, 0.5), rgba(73, 99, 217, 0.5) ),url('panel1bg.png')";
  } else {
    section2.style.backgroundImage =
      "linear-gradient(to right top, rgba(145, 147, 148, 0.5), rgba(25, 25, 26, 0.5) ),url('panel1bg.png')";
  }
  p1Month.textContent = months[day.getMonth()] + " ";
  p1Date.textContent = day.getDate() + ", " + day.getFullYear();
  p1Temp.innerHTML =
    el.current.temperature + "&#176" + "<span class='degree'>c</span>";
  p1Weather.textContent = el.current.weather_descriptions;
  document.querySelector("#prec").textContent = el.current.precip + "mm";
};
//eventhandler for button
const buttonMechanisum = function (el) {
  el.preventDefault();
  section2.style.transform = "translateX(0)";
  console.log(landingForm.value);
  section1.style.transform = "translateX(100vw)";
  section1.style.display = "none";
  apiCallBtn(landingForm.value)
    .then((el) => {
      console.log(el);

      return el.json();
    })
    .then((el) => {
      commonApi(el);
    })
    .catch((el) => {
      console.log(el);
    });
};
//eventhandler for GPS
const locationMechanisum = function (el) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        const { longitude } = position.coords;
        const { latitude } = position.coords;
        section2.style.transform = "translateX(0)";
        console.log(landingForm.value);
        section1.style.transform = "translateX(100vw)";
        apiCallGps(latitude, longitude)
          .then((el) => {
            return el.json();
          })
          .then((el) => {
            commonApi(el);
          })
          .catch((el) => {
            console.log(el);
          });
      },
      function () {
        console.log("failed"); //failedd for getting location
      }
    );
  }
};
//calls................
document
  .querySelector(".landing_form")
  .addEventListener("submit", buttonMechanisum);
locationLan.addEventListener("click", locationMechanisum);
document
  .querySelector(".landing_form")
  .addEventListener("touchstart", buttonMechanisum);
locationLan.addEventListener("touchstart", locationMechanisum);
