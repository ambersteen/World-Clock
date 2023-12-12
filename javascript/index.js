
function updateTime() {
// Australia/Melbourne
let melbourneElement = document.querySelector("#melbourne");
let melbourneDateElement = melbourneElement.querySelector(".date");
let melbourneTimeElement = melbourneElement.querySelector(".time");
let melbourneTime = moment().tz("Australia/Melbourne");

melbourneDateElement.innerHTML = melbourneTime.format("dddd, MMMM Do, YYYY");
melbourneTimeElement.innerHTML = melbourneTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// Europe/Budapest
let budapestElement = document.querySelector("#budapest");
let budapestDateElement = budapestElement.querySelector(".date");
let budapestTimeElement = budapestElement.querySelector(".time");
let budapestTime = moment().tz("Europe/Budapest");

budapestDateElement.innerHTML = budapestTime.format("dddd, MMMM Do, YYYY");
budapestTimeElement.innerHTML = budapestTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

//America/Los_Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}
updateTime();
setInterval(updateTime, 1000);