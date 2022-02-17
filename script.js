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
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bf99cb0065e369f731cfedfe08b80061`
  );
}
async function apiCallGps(lat, long) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=bf99cb0065e369f731cfedfe08b80061`
  );
}
//Common api
const commonApi = function (el) {
  section2.style.transform = "translateX(0)";
  section2.style.visibility = "visible";
  section1.style.transform = "translateX(100vw)";
  section1.style.display = "none";
  p1CityName.textContent = el.name;
  const day = new Date(el.dt * 1000);
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
    300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511,
    520, 521, 522, 531, 200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
  ];
  const ice = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
  const fog = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  const cloud = [801, 802, 803, 804];

  if (rain.includes(el.weather.id)) {
    console.log("yes");

    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('rain.gif')";
  } else if (cloud.includes(el.weather.id)) {
    console.log("yes");

    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('clod.jpg')";
  } else if (ice.includes(el.weather.id)) {
    console.log("yes");

    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('snow.gif')";
  } else if (fog.includes(el.weather.id)) {
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
  //temp
  p1Temp.innerHTML =
    el.main.temp.toPrecision(3) + "&#176" + "<span class='degree'>c</span>";
  p1Weather.textContent = el.weather.description;
  document.querySelector("#prec").textContent = " " + el.main.humidity + "%";
  // //loader
  setTimeout(function () {
    loader2.style.display = "none";
  }, 2000);
};
//eventhandler for button
const buttonMechanisum = function (el) {
  el.preventDefault();
  apiCallBtn(landingForm.value)
    .then((el) => {
      if (el.statusText == "Not Found") {
        throw new Error("No such place exists");
      }
      return el.json();
    })
    .then((el) => {
      console.log(el);
      commonApi(el);
    })
    .catch((el) => {
      errorDes.textContent = el;
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
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
        apiCallGps(latitude, longitude)
          .then((el) => {
            return el.json();
          })
          .then((el) => {
            commonApi(el);
          })
          .catch((el) => {
            errorDes.textContent = el;
            warning.style.visibility = "visible";
            section1.style.filter = "blur(1rem)";
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
