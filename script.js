// VARIABLES....................................................
//temp
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.tubikstudio.com%2Fweather-in-ui-design-come-rain-or-shine%2F&psig=AOvVaw1y43NZi0flBnx2557IWAGS&ust=1646757413182000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjLyd23tPYCFQAAAAAdAAAAABAD
const rain = [
  300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511,
  520, 521, 522, 531, 200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
];
const ice = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
const fog = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
const cloud = [801, 802, 803, 804];
const panel3 = document.querySelector(".panel3");
const panel3Heading = document.querySelector(".panel3-heading-edit");
const panel3D1 = document.querySelector(".panel3-day1");
const panel3D2 = document.querySelector(".panel3-day2");
const panel3D3 = document.querySelector(".panel3-day3");
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
const boxh1 = document.querySelector(".box-h1");
const boxp = document.querySelector(".box-p");
const cross = document.querySelector(".icon-times");
const warning = document.querySelector(".wrapper-warning");
const errorDes = document.querySelector(".p");
const sunriseText = document.querySelector(".sunrise-text");
const sunsetText = document.querySelector(".sunset-text");
const box = document.querySelector(".box");
const searchForm = document.querySelector(".search-bar");
const searchFormInput = document.querySelector("#search-bar");
const section2Con = document.querySelector(".section2Con");
const mediaQuery = window.matchMedia("(max-width:560px)");
const loader2 = document.querySelector(".loader2");
const loader3 = document.querySelector(".loader3");
const loader4 = document.querySelector(".loader4");
let theMarker = undefined;
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const narrationContainer = document.querySelector(".nar-con");
const narDot = document.querySelector(".nar-dot");
const cloudIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>`;
const cloudRain = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cloud-drizzle" viewBox="0 0 16 16">
<path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
</svg>`;
const snowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cloud-snow" viewBox="0 0 16 16">
<path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z"/>
</svg>`;
const fogIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cloud-fog" viewBox="0 0 16 16">
<path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z"/>
</svg>`;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`;
let narratinArray = [];
let speak = "";
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
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//map marker
let theMarkericon = L.icon({
  iconUrl: "mapicon.png",

  iconSize: [50, 50], // size of the icon
});
let temp = 0;
//panelUI
const panelUI = function (el) {
  p1CityName.textContent = panel3Heading.textContent = el.name;
  const day = new Date(el.dt * 1000);

  p1Day.textContent = days[day.getDay()] + ",";

  if (rain.includes(el.weather[0].id)) {
    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('rain.gif')";
  } else if (cloud.includes(el.weather[0].id)) {
    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('clod.jpg')";
  } else if (ice.includes(el.weather[0].id)) {
    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('snow.gif')";
  } else if (fog.includes(el.weather[0].id)) {
    p1.style.backgroundImage =
      "linear-gradient(to right top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('mist.gif')";
  } else {
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
  //temp prec wind
  temp = el.main.temp;
  p1Temp.innerHTML =
    el.main.temp.toPrecision(3) + "&#176" + "<span class='degree'>C</span>";
  narratinArray = [
    el.name,
    temp,
    el.weather[0].description,
    el.main.humidity.toPrecision(2),
    days[day.getDay()],
    day.getHours(),
  ];
  speak = `${
    narratinArray[5] >= 12 && narratinArray[5] <= 24
      ? "Good Afternoon"
      : "Goodmorning"
  } user, in ${narratinArray[0]} its ${
    narratinArray[1]
  } degree celcius, Today weather condition would be ${
    narratinArray[2]
  }, with a humidity of ${narratinArray[3]} degree. Today`;

  p1Weather.textContent = el.weather[0].description;
  document.querySelector("#wind").textContent =
    " " + el.wind.speed.toPrecision(2) + " m/s";
  document.querySelector("#prec").textContent = " " + el.main.humidity + "%";
  //sunset sunrise
  const sunset = new Date(el.sys.sunset * 1000);
  const sunrise = new Date(el.sys.sunrise * 1000);
  sunriseText.textContent = sunrise.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  sunsetText.textContent = sunset.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

//map
const map = L.map("map").setView([22.9074872, 79.07306671], 5);
var Stamen_Toner = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20,
    ext: "png",
  }
);
map.addLayer(Stamen_Toner);
//common for geo and btn pollution
const pollutionUi = function (el) {
  const aqi = el.data.aqi;
  speak += ` ${
    aqi <= 150
      ? "there would be no need for a anti pollution mask"
      : "you would need a anti pollution mask"
  } as today's Air pollution index is ${aqi}`;
  speakText = new SpeechSynthesisUtterance(speak);
  boxh1.textContent = "API : " + aqi;
  if (aqi <= 150) {
    boxp.textContent = "Good Air";
    document.querySelector(".triangle-alt").style.backgroundColor = "#009966";
    box.style.backgroundColor = "#009966";
  } else if (aqi <= 100) {
    box.style.backgroundColor = "#FFDE33";
    boxp.textContent = "Moderate Air";
    document.querySelector(".triangle-alt").style.backgroundColor = "#FFDE33";
  } else if (aqi <= 150) {
    box.style.backgroundColor = "#FF9933";
    boxp.textContent = "Unhealthy Air";
    document.querySelector(".triangle-alt").style.backgroundColor = "#FF9933";
  } else if (aqi <= 200) {
    box.style.backgroundColor = "#CC0033";
    boxp.textContent = "Unhealthy Air";
    document.querySelector(".triangle-alt").style.backgroundColor = "#CC0033";
  } else if (aqi <= 300) {
    box.style.backgroundColor = "#660099";
    boxp.textContent = "Very Unhealthy Air";
    document.querySelector(".triangle-alt").style.backgroundColor = "#660099";
  } else {
    box.style.backgroundColor = "#7E0023";
    boxp.textContent = "Hazardous Air";
    document.querySelector(".triangle-alt").style.backgroundColor = "#7E0023";
  }
};

//forcast UI
const forcastUI = function (el) {
  console.log(el.list[1].weather[0].id);
  for (let j = 1; j <= 3; j++) {
    if (rain.includes(el.list[j].weather[0].id)) {
      document.querySelector(`.panel3-icon-${j}`).innerHTML = cloudRain;
      document.querySelector(`.panel3-icon-${j}`).style.color = "darkblue";
    } else if (cloud.includes(el.list[j].weather[0].id)) {
      document.querySelector(`.panel3-icon-${j}`).innerHTML = cloudIcon;
      document.querySelector(`.panel3-icon-${j}`).style.color =
        "rgb(59, 170, 221)";
    } else if (ice.includes(el.list[j].weather[0].id)) {
      document.querySelector(`.panel3-icon-${j}`).innerHTML = snowIcon;
      document.querySelector(`.panel3-icon-${j}`).style.color = "white";
    } else if (fog.includes(el.list[j].weather[0].id)) {
      document.querySelector(`.panel3-icon-${j}`).innerHTML = fogIcon;
      document.querySelector(`.panel3-icon-${j}`).style.color = "gray";
    } else {
      document.querySelector(`.panel3-icon-${j}`).innerHTML = sunIcon;
      document.querySelector(`.panel3-icon-${j}`).style.color = "yellow";
    }

    document.querySelector(`.panel3-temp-${j}`).innerHTML =
      el.list[j].main.temp.toPrecision(3) +
      "&#176" +
      "<span class='degree'>C</span>";
    document.querySelector(`.panel3-weather-${j}`).textContent =
      el.list[j].weather[0].main;
  }
  let ind = 1;
  for (let j = 2; j <= 18; j += 8) {
    let dayz = new Date(el.list[j].dt_txt);
    document.querySelector(
      `.panel3-date-${ind}`
    ).innerHTML = `${dayz.getDate()} ${months[dayz.getMonth()]}`;
    document.querySelector(`.day${ind}`).textContent = days[dayz.getDay()];

    ind += 1;
  }
};
//forcast btn
async function forcastBtn(location) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&APPID=bf99cb0065e369f731cfedfe08b80061`
  );
}
//forcast gps
async function forcastGps(lat, long) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=bf99cb0065e369f731cfedfe08b80061`
  );
}
//forcast btn call
const forcastBtnCall = function (location) {
  forcastBtn(location)
    .then((el) => {
      if (el.status === 200) {
        return el.json();
      } else {
        throw "Something went wrong";
      }
    })
    .then((el) => {
      console.log(el);
      forcastUI(el);
    })
    .catch((el) => {
      errorDes.textContent = el;
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
      console.log(el);
    });
};
//forcast gps call
const forcastGpsCall = function (lat, long) {
  forcastGps(lat, long)
    .then((el) => {
      if (el.status === 200) {
        return el.json();
      } else {
        throw "Something went wrong";
      }
    })
    .then((el) => {
      forcastUI(el);
    })
    .catch((el) => {
      errorDes.textContent = el;
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
      console.log(el);
    });
};
//pollution btn
async function commonPollutionBtn(location) {
  return fetch(
    `https://api.waqi.info/feed/${location}/?token=ecc8f84608444f1c2ec4f7c31f24760a5aed80d9`
  );
}
//pollution gps
async function commonPollutionGps(lat, long) {
  return fetch(
    `https://api.waqi.info/feed/geo:${lat};${long}/?token=ecc8f84608444f1c2ec4f7c31f24760a5aed80d9`
  );
}
//pollution
const pollutionFunBtn = function (location) {
  commonPollutionBtn(location)
    .then((el) => {
      return el.json();
    })
    .then((el) => {
      pollutionUi(el);
    })
    .catch((el) => {
      errorDes.textContent = el;
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
      console.log(el);
    });
};
const pollutionFunGps = function (lat, long) {
  commonPollutionGps(lat, long)
    .then((el) => {
      return el.json();
    })
    .then((el) => {
      pollutionUi(el);
    })
    .catch((el) => {
      errorDes.textContent = el;
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
      console.log(el);
    });
};
//Api Calls
async function apiCallBtn(location) {
  pollutionFunBtn(location);
  forcastBtnCall(location);
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bf99cb0065e369f731cfedfe08b80061`
  );
}
async function apiCallGps(lat, long) {
  pollutionFunGps(lat, long);
  forcastGpsCall(lat, long);
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=bf99cb0065e369f731cfedfe08b80061`
  );
}
//Common api
const commonApi = function (el) {
  loader2.style.visibility = "visible";
  // document.getElementsByTagName("html")[0].style.overflow = "hidden";
  section2.classList.toggle("hidden");
  section1.style.display = "none";
  panelUI(el);
  // //loader
  setTimeout(function () {
    section2.style.visibility = "visible";
    loader1.style.display = "none";
    map.invalidateSize();
    loader2.style.visibility = "hidden";
    // document.getElementsByTagName("html")[0].style.overflow = "auto";
  }, 3000);
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
      map.setView([el.coord.lat, el.coord.lon], 12);
      if (theMarker != undefined) {
        map.removeLayer(theMarker);
      }
      //Add a marker to show where you clicked.
      theMarker = L.marker([el.coord.lat, el.coord.lon], {
        icon: theMarkericon,
      }).addTo(map);
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
            console.log(el);
            map.setView([el.coord.lat, el.coord.lon], 12);
            if (theMarker != undefined) {
              map.removeLayer(theMarker);
            }
            //Add a marker to show where you clicked.
            theMarker = L.marker([el.coord.lat, el.coord.lon], {
              icon: theMarkericon,
            }).addTo(map);
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
  section2Con.style.filter = "blur(0)";
});

//Pollution wiki
box.addEventListener("click", (el) => {
  window.open("https://en.wikipedia.org/wiki/Air_Pollution_Index");
});
//nav Search
searchForm.addEventListener("submit", (el) => {
  el.preventDefault();
  const value = searchFormInput.value;
  searchFormInput.value = "";
  searchFormInput.blur();
  console.log(document.querySelector("#search-bar").value);
  apiCallBtn(value)
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
      section2Con.style.filter = "blur(1rem)";
      console.log(el);
    });
});
//focus search bar
searchFormInput.addEventListener("focusin", (el) => {
  console.log("sdf");

  if (mediaQuery.matches) {
    document.querySelector(".nav-title").style.visibility = "hidden";
    console.log("onfocus");
  }
});
searchFormInput.addEventListener("focusout", (el) => {
  if (mediaQuery.matches) {
    document.querySelector(".nav-title").style.visibility = "visible";
    console.log("onblur");
  }
});
//unit for temperature
let count = 1;
p1Temp.addEventListener("click", (el) => {
  if (count % 2 != 0) {
    p1Temp.innerHTML =
      (temp * 1.8 + 32).toPrecision(3) +
      "&#176" +
      "<span class='degree'>F</span>";
  } else {
    p1Temp.innerHTML =
      temp.toPrecision(3) + "&#176" + "<span class='degree'>C</span>";
  }
  count += 1;
});

//slider

//functions
let curSlide = 0;
const maxSlide = slides.length;

// Functions
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
// let timer = setInterval(nextSlide, 8000);

//mobile slider

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
let check = mobileCheck();
if (check) {
  btnLeft.style.display = "none";
  btnRight.style.display = "none";
}
slides.forEach((el) => {
  el.addEventListener(
    "touchstart",
    function (event) {
      touchstartX = event.changedTouches[0].screenX;
    },
    false
  );
});

slides.forEach((el) => {
  el.addEventListener(
    "touchend",
    function (event) {
      touchendX = event.changedTouches[0].screenX;

      handleGesture();
    },
    false
  );
});

function handleGesture() {
  if (touchendX < touchstartX) {
    console.log("Swiped Left");
    nextSlide();
    // clearInterval(timer);
    // timer = setInterval(nextSlide, 8000);
  }

  if (touchendX > touchstartX) {
    console.log("Swiped Right");
    prevSlide();
    // clearInterval(timer);
    // timer = setInterval(nextSlide, 8000);
  }
}

const slider = function () {
  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", (el) => {
    // clearInterval(timer);
    // timer = setInterval(nextSlide, 8000);
    nextSlide();
  });
  btnLeft.addEventListener("click", (el) => {
    // clearInterval(timer);
    // timer = setInterval(nextSlide, 8000);
    prevSlide();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//map click handler function
const forcastActive = function (i) {
  i += 1;
  document.querySelector(`.panel3-day${i}`).style.flex = "5";

  document.querySelector(`.panel3-icon-${i}`).classList.add("animation-sun");
  document.querySelector(`.panel3-temp-${i}`).style.transform = "translateY(0)";
  document.querySelector(`.panel3-date-${i}`).style.transform = "translateY(0)";
  document.querySelector(`.day${i}`).style.opacity = "1";

  document.querySelector(`.panel3-weather-${i}`).style.opacity = "1";
};
const forcastNotActive = function (i) {
  i += 1;
  document.querySelector(`.panel3-day${i}`).style.flex = "2";
  document.querySelector(`.panel3-icon-${i}`).classList.remove("animation-sun");
  document.querySelector(`.panel3-date-${i}`).style.transform =
    "translateY(2.3rem)";
  document.querySelector(`.panel3-temp-${i}`).style.transform =
    "translateY(2.3rem)";
  document.querySelector(`.day${i}`).style.opacity = "0";

  document.querySelector(`.panel3-weather-${i}`).style.opacity = "0";
};
const panelMapHandler = function (el) {
  for (let k = 0; k < 3; k++) {
    forcastNotActive(k);
  }
  panelUI(el);
  loader3.style.visibility = "visible";
  loader4.style.visibility = "visible";
  setTimeout((e) => {
    loader3.style.visibility = "hidden";
    loader4.style.visibility = "hidden";
  }, 2000);
};
//map click handler
let theMarker1 = null;
map.on("click", function (e) {
  lat = e.latlng.lat;
  lon = e.latlng.lng;

  console.log("You clicked the map at LAT: " + lat + " and LONG: " + lon);
  //Clear existing marker,

  if (theMarker != undefined) {
    map.removeLayer(theMarker);
  }

  //Add a marker to show where you clicked.
  theMarker = L.marker([lat, lon], { icon: theMarkericon }).addTo(map);
  apiCallGps(lat, lon)
    .then((el) => {
      return el.json();
    })
    .then((el) => {
      panelMapHandler(el);
    })
    .catch((el) => {
      errorDes.textContent = el;
      warning.style.visibility = "visible";
      section1.style.filter = "blur(1rem)";
      console.log(el);
    });
});

//narration

let narCount = 1;

narrationContainer.addEventListener("click", (el) => {
  if (narCount == 1) {
    window.speechSynthesis.speak(speakText);
  }
  if (narCount % 2 == 0) {
    narDot.style.backgroundColor = "red";
    window.speechSynthesis.pause();
  } else {
    narDot.style.backgroundColor = "green";
    window.speechSynthesis.resume();
  }
  speakText.addEventListener("end", (el) => {
    narDot.style.backgroundColor = "red";
    narCount = 1;
  });

  narCount++;
});

//test
// fetch(
//   `http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date=1527811200&opacity=0.9&fill_bound=true&appid=bf99cb0065e369f731cfedfe08b80061`
// )
//   .then((el) => {
//     return el.json();
//   })
//   .then((el) => {
//     console.log(el);
//   });

//Forcast panel

const panelAll3 = document.querySelectorAll(".panel-day");

panelAll3.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    for (let k = 0; k < 3; k++) {
      forcastNotActive(k);
    }
    forcastActive(i);
  });
});
//focus for slider
slides.forEach((e) => {
  e.addEventListener("focus", (el) => {
    clearInterval(timer);
    console.log("eeeee");
  });
});
slides.forEach((e) => {
  e.addEventListener("blur", (el) => {
    timer = setInterval(nextSlide, 8000);
  });
});
// Falling rain simulation using 2D canvas
// - vanilla JS, no frameworks
// - framerate independent physics
// - slow-mo / fast-forward support via demo.speed
// - supports high-DPI screens
// - falling rain particles are drawn as vector lines
// - splash particles are lazily pre-rendered so gradients aren't computed each frame
// - all particles make use of object pooling to further boost performance

// initialize
document.addEventListener("DOMContentLoaded", function () {
  demo.init();
  window.addEventListener("resize", demo.resize);
});

// demo namespace
var demo = {
  // CUSTOMIZABLE PROPERTIES
  // - physics speed multiplier: allows slowing down or speeding up simulation
  speed: 1,
  // - color of particles
  color: {
    r: "80",
    g: "175",
    b: "255",
    a: "0.5",
  },

  // END CUSTOMIZATION
  // whether demo is running
  started: false,
  // canvas and associated context references
  canvas: null,
  ctx: null,
  // viewport dimensions (DIPs)
  width: 0,
  height: 0,
  // devicePixelRatio alias (should only be used for rendering, physics shouldn't care)
  dpr: window.devicePixelRatio || 1,
  // time since last drop
  drop_time: 0,
  // ideal time between drops (changed with mouse/finger)
  drop_delay: 25,
  // wind applied to rain (changed with mouse/finger)
  wind: 4,
  // color of rain (set in init)
  rain_color: null,
  rain_color_clear: null,
  // rain particles
  rain: [],
  rain_pool: [],
  // rain droplet (splash) particles
  drops: [],
  drop_pool: [],
};

// demo initialization (should only run once)
demo.init = function () {
  if (!demo.started) {
    demo.started = true;
    demo.canvas = document.getElementById("canvas");
    demo.ctx = demo.canvas.getContext("2d");
    var c = demo.color;
    demo.rain_color = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")";
    demo.rain_color_clear = "rgba(" + c.r + "," + c.g + "," + c.b + ",0)";
    demo.resize();
    Ticker.addListener(demo.step);

    //
    const gui = new dat.GUI();
    gui.add(demo, "speed", 0.2, 2);
  }
};

// (re)size canvas (clears all particles)
demo.resize = function () {
  // localize common references
  var rain = demo.rain;
  var drops = demo.drops;
  // recycle particles
  for (var i = rain.length - 1; i >= 0; i--) {
    rain.pop().recycle();
  }
  for (var i = drops.length - 1; i >= 0; i--) {
    drops.pop().recycle();
  }
  // resize
  demo.width = window.innerWidth;
  demo.height = window.innerHeight;
  demo.canvas.width = demo.width * demo.dpr;
  demo.canvas.height = demo.height * demo.dpr;
};

demo.step = function (time, lag) {
  // localize common references
  var demo = window.demo;
  var speed = demo.speed;
  var width = demo.width;
  var height = demo.height;
  var wind = demo.wind;
  var rain = demo.rain;
  var rain_pool = demo.rain_pool;
  var drops = demo.drops;
  var drop_pool = demo.drop_pool;

  // multiplier for physics
  var multiplier = speed * lag;

  // spawn drops
  demo.drop_time += time * speed;
  while (demo.drop_time > demo.drop_delay) {
    demo.drop_time -= demo.drop_delay;
    var new_rain = rain_pool.pop() || new Rain();
    new_rain.init();
    var wind_expand = Math.abs((height / new_rain.speed) * wind); // expand spawn width as wind increases
    var spawn_x = Math.random() * (width + wind_expand);
    if (wind > 0) spawn_x -= wind_expand;
    new_rain.x = spawn_x;
    rain.push(new_rain);
  }

  // rain physics
  for (var i = rain.length - 1; i >= 0; i--) {
    var r = rain[i];
    r.y += r.speed * r.z * multiplier;
    r.x += r.z * wind * multiplier;
    // remove rain when out of view
    if (r.y > height) {
      // if rain reached bottom of view, show a splash
      r.splash();
    }
    // recycle rain
    if (
      r.y > height + Rain.height * r.z ||
      (wind < 0 && r.x < wind) ||
      (wind > 0 && r.x > width + wind)
    ) {
      r.recycle();
      rain.splice(i, 1);
    }
  }

  // splash drop physics
  var drop_max_speed = Drop.max_speed;
  for (var i = drops.length - 1; i >= 0; i--) {
    var d = drops[i];
    d.x += d.speed_x * multiplier;
    d.y += d.speed_y * multiplier;
    // apply gravity - magic number 0.3 represents a faked gravity constant
    d.speed_y += 0.3 * multiplier;
    // apply wind (but scale back the force)
    d.speed_x += (wind / 25) * multiplier;
    if (d.speed_x < -drop_max_speed) {
      d.speed_x = -drop_max_speed;
    } else if (d.speed_x > drop_max_speed) {
      d.speed_x = drop_max_speed;
    }
    // recycle
    if (d.y > height + d.radius) {
      d.recycle();
      drops.splice(i, 1);
    }
  }

  demo.draw();
};

demo.draw = function () {
  // localize common references
  var demo = window.demo;
  var width = demo.width;
  var height = demo.height;
  var dpr = demo.dpr;
  var rain = demo.rain;
  var drops = demo.drops;
  var ctx = demo.ctx;

  // start fresh
  ctx.clearRect(0, 0, width * dpr, height * dpr);

  // draw rain (trace all paths first, then stroke once)
  ctx.beginPath();
  var rain_height = Rain.height * dpr;
  for (var i = rain.length - 1; i >= 0; i--) {
    var r = rain[i];
    var real_x = r.x * dpr;
    var real_y = r.y * dpr;
    ctx.moveTo(real_x, real_y);
    // magic number 1.5 compensates for lack of trig in drawing angled rain
    ctx.lineTo(
      real_x - demo.wind * r.z * dpr * 1.5,
      real_y - rain_height * r.z
    );
  }
  ctx.lineWidth = Rain.width * dpr;
  ctx.strokeStyle = demo.rain_color;
  ctx.stroke();

  // draw splash drops (just copy pre-rendered canvas)
  for (var i = drops.length - 1; i >= 0; i--) {
    var d = drops[i];
    var real_x = d.x * dpr - d.radius;
    var real_y = d.y * dpr - d.radius;
    ctx.drawImage(d.canvas, real_x, real_y);
  }
};

// Rain definition
function Rain() {
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.speed = 25;
  this.splashed = false;
}
Rain.width = 2;
Rain.height = 40;
Rain.prototype.init = function () {
  this.y = Math.random() * -100;
  this.z = Math.random() * 0.5 + 0.5;
  this.splashed = false;
};
Rain.prototype.recycle = function () {
  demo.rain_pool.push(this);
};
// recycle rain particle and create a burst of droplets
Rain.prototype.splash = function () {
  if (!this.splashed) {
    this.splashed = true;
    var drops = demo.drops;
    var drop_pool = demo.drop_pool;

    for (var i = 0; i < 16; i++) {
      var drop = drop_pool.pop() || new Drop();
      drops.push(drop);
      drop.init(this.x);
    }
  }
};

// Droplet definition
function Drop() {
  this.x = 0;
  this.y = 0;
  this.radius = Math.round(Math.random() * 2 + 1) * demo.dpr;
  this.speed_x = 0;
  this.speed_y = 0;
  this.canvas = document.createElement("canvas");
  this.ctx = this.canvas.getContext("2d");

  // render once and cache
  var diameter = this.radius * 2;
  this.canvas.width = diameter;
  this.canvas.height = diameter;

  var grd = this.ctx.createRadialGradient(
    this.radius,
    this.radius,
    1,
    this.radius,
    this.radius,
    this.radius
  );
  grd.addColorStop(0, demo.rain_color);
  grd.addColorStop(1, demo.rain_color_clear);
  this.ctx.fillStyle = grd;
  this.ctx.fillRect(0, 0, diameter, diameter);
}

Drop.max_speed = 5;

Drop.prototype.init = function (x) {
  this.x = x;
  this.y = demo.height;
  var angle = Math.random() * Math.PI - Math.PI * 0.5;
  var speed = Math.random() * Drop.max_speed;
  this.speed_x = Math.sin(angle) * speed;
  this.speed_y = -Math.cos(angle) * speed;
};
Drop.prototype.recycle = function () {
  demo.drop_pool.push(this);
};

// handle interaction
demo.mouseHandler = function (evt) {
  demo.updateCursor(evt.clientX, evt.clientY);
};
demo.touchHandler = function (evt) {
  evt.preventDefault();
  var touch = evt.touches[0];
  demo.updateCursor(touch.clientX, touch.clientY);
};
demo.updateCursor = function (x, y) {
  x /= demo.width;
  y /= demo.height;
  var y_inverse = 1 - y;

  demo.drop_delay = y_inverse * y_inverse * y_inverse * 100 + 2;
  demo.wind = (x - 0.5) * 50;
};

document.addEventListener("mousemove", demo.mouseHandler);
document.addEventListener("touchstart", demo.touchHandler);
document.addEventListener("touchmove", demo.touchHandler);

// Frame ticker helper module
var Ticker = (function () {
  var PUBLIC_API = {};

  // public
  // will call function reference repeatedly once registered, passing elapsed time and a lag multiplier as parameters
  PUBLIC_API.addListener = function addListener(fn) {
    if (typeof fn !== "function")
      throw "Ticker.addListener() requires a function reference passed in.";

    listeners.push(fn);

    // start frame-loop lazily
    if (!started) {
      started = true;
      queueFrame();
    }
  };

  // private
  var started = false;
  var last_timestamp = 0;
  var listeners = [];
  // queue up a new frame (calls frameHandler)
  function queueFrame() {
    if (window.requestAnimationFrame) {
      requestAnimationFrame(frameHandler);
    } else {
      webkitRequestAnimationFrame(frameHandler);
    }
  }
  function frameHandler(timestamp) {
    var frame_time = timestamp - last_timestamp;
    last_timestamp = timestamp;
    // make sure negative time isn't reported (first frame can be whacky)
    if (frame_time < 0) {
      frame_time = 17;
    }
    // - cap minimum framerate to 15fps[~68ms] (assuming 60fps[~17ms] as 'normal')
    else if (frame_time > 68) {
      frame_time = 68;
    }

    // fire custom listeners
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].call(window, frame_time, frame_time / 16.67);
    }

    // always queue another frame
    queueFrame();
  }

  return PUBLIC_API;
})();
