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
    ).innerHTML = `${dayz.getDate()} ${
      months[dayz.getMonth()]
    } <span id='day${ind}'> ${days[dayz.getDay()]}</span>`;

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
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

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
  setInterval(nextSlide, 8000);

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

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
  document.querySelector(`.panel3-icon-${i}`).style.transform =
    "translateY(1.3rem) ";
  document.querySelector(`.panel3-icon-${i}`).style.transform =
    "translateY(1.3)";
  document.querySelector(`#day${i}`).style.opacity = "1";

  document.querySelector(`.panel3-weather-${i}`).style.opacity = "1";
};
const forcastNotActive = function (i) {
  i += 1;
  document.querySelector(`.panel3-day${i}`).style.flex = "2";
  document.querySelector(`.panel3-icon-${i}`).style.transform = "translateY(0)";
  document.querySelector(`#day${i}`).style.opacity = "0";

  document.querySelector(`.panel3-icon-${i}`).style.transform = "translateY(0)";
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
