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
const p1 = document.querySelector(".panel1 ");
const loader1 = document.querySelector(".loader1");
const loader2 = document.querySelector(".loader2");
const cross = document.querySelector(".icon-times");
const warning = document.querySelector(".wrapper-warning");
const errorDes = document.querySelector(".p");
//Api Calls
async function apiCallBtn(location) {
  return fetch(
    `http://api.weatherstack.com/current?access_key=e4b00e1b14c307c6ce0e20daf670b56f&query=${location}& forecast_days = 1`
  );
}
async function apiCallGps(lat, long) {
  return fetch(
    `http://api.weatherstack.com/current?access_key=e4b00e1b14c307c6ce0e20daf670b56f&query=${lat},${long}& forecast_days = 1`
  );
}
//Common api
const commonApi = function (el) {
  if (el.success == false) {
    console.log("failed");
    warning.style.visibility = "visible";
    section1.style.filter = "blur(1rem)";
  } else {
    section2.style.transform = "translateX(0)";
    section2.style.visibility = "visible";
    section1.style.transform = "translateX(100vw)";
    section1.style.display = "none";
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
    const rain = [
      389, 386, 359, 356, 353, 314, 311, 308, 305, 302, 299, 296, 293, 284, 281,
      266, 263, 176,
    ];
    const ice = [
      395, 392, 377, 374, 371, 368, 365, 362, 350, 338, 335, 332, 329, 326, 323,
      320, 317, 248, 230, 227, 182, 179,
    ];
    const fog = [260, 248, 143, 122];
    const cloud = [119, 116];

    if (rain.includes(el.current.weather_code)) {
      console.log("yes");

      p1.style.backgroundImage =
        "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('rain.gif')";
    } else if (cloud.includes(el.current.weather_code)) {
      console.log("yes");

      p1.style.backgroundImage =
        "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('clod.jpg')";
    } else if (ice.includes(el.current.weather_code)) {
      console.log("yes");

      p1.style.backgroundImage =
        "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('snow.gif')";
    } else if (fog.includes(el.current.weather_code)) {
      console.log("yes");

      p1.style.backgroundImage =
        "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('mist.gif')";
    } else {
      console.log("yes");
      p1.style.backgroundImage =
        "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('sunny.gif')";
    }
    p1.style.backgroundSize = "cover";
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
    //loader
    setTimeout(function () {
      loader2.style.display = "none";
    }, 2000);
  }
};
//eventhandler for button
const buttonMechanisum = function (el) {
  el.preventDefault();
  apiCallBtn(landingForm.value)
    .then((el) => {
      console.log(el);

      return el.json();
    })
    .then((el) => {
      commonApi(el);
    })
    .catch((el) => {
      errorDes.textContent = "Check your network connection";
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
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
        errorDes.textContent = "Cannot locate your location";
        warning.style.visibility = "visible";
        section1.style.filter = "blur(1rem)";
      }
    );
  }
};
//calls................
document
  .querySelector(".landing_form")
  .addEventListener("submit", buttonMechanisum);
locationLan.addEventListener("click", locationMechanisum);
//loaded
window.addEventListener("load", (el) => {
  setTimeout(function () {
    loader1.style.display = "none";
  }, 3000);
});
//error handler
cross.addEventListener("click", (el) => {
  section1.style.filter = "blur(0)";
  warning.style.visibility = "hidden";
});
