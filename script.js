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
let theMarker = undefined;
//map marker
let theMarkericon = L.icon({
  iconUrl: "mapicon.png",

  iconSize: [50, 50], // size of the icon
});
let temp = 0;
//panelUI
const panelUI = function (el) {
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
  // speechSynthesis.speak(
  //   new SpeechSynthesisUtterance(`Hello, temperature is ${temp} celcius`)
  // );
  p1Temp.innerHTML =
    el.main.temp.toPrecision(3) + "&#176" + "<span class='degree'>C</span>";

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
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Jasmeet';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(map);

//common for geo and btn pollution
const pollutionUi = function (el) {
  const aqi = el.data.aqi;

  boxh1.textContent = "API : " + aqi;
  if (aqi <= 50) {
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
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bf99cb0065e369f731cfedfe08b80061`
  );
}
async function apiCallGps(lat, long) {
  pollutionFunGps(lat, long);
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
const panelMapHandler = function (el) {
  panelUI(el);
  loader3.style.visibility = "visible";

  setTimeout((e) => {
    loader3.style.visibility = "hidden";
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

// fetch(
//   `https://api.openweathermap.org/data/2.5/forecast?q=delhi&APPID=bf99cb0065e369f731cfedfe08b80061`
// )
//   .then((el) => {
//     return el.json();
//   })
//   .then((el) => {
//     console.log(el);
//   });
