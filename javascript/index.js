
function updateTime() {
// Australia/Melbourne
let melbourneElement = document.querySelector("#melbourne");
if (melbourneElement) {
let melbourneDateElement = melbourneElement.querySelector(".date");
let melbourneTimeElement = melbourneElement.querySelector(".time");
let melbourneTime = moment().tz("Australia/Melbourne");

melbourneDateElement.innerHTML = melbourneTime.format("dddd, MMMM Do, YYYY");
melbourneTimeElement.innerHTML = melbourneTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}
// Europe/Budapest
let budapestElement = document.querySelector("#budapest");
if (budapestElement) {
let budapestDateElement = budapestElement.querySelector(".date");
let budapestTimeElement = budapestElement.querySelector(".time");
let budapestTime = moment().tz("Europe/Budapest");

budapestDateElement.innerHTML = budapestTime.format("dddd, MMMM Do, YYYY");
budapestTimeElement.innerHTML = budapestTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}

//America/Los_Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (budapestElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}
}

function updateCity(event) {
    let cityTimezone = event.target.value;
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += `
    <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )}<small> ${cityTime.format("A")}</small></div>
      </div>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity);