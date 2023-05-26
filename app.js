let hourArrow = document.getElementById("hour");
let minuteArrow = document.getElementById("min");
let secondArrow = document.getElementById("sec");

let hourinput = document.getElementById("hourinput");
let minuteinput = document.getElementById("minuteinput");

let set = document.getElementById("set");
let snooze = document.getElementById("snooze");

let alarmTime = null; // alarm melumatini saxlamaq ucun
let snoozeTime = 5 * 60 * 1000; // nece deqiqelik snuz elesin (millisaniya olacaq ama)
let snoozeTimeoutId = null; // snuz timer ucun

function displayTime() {
  let date = new Date();
  let hour = date.getHours() % 12; // 0 to 23
  let minute = date.getMinutes();
  let second = date.getSeconds();

  //   console.log(second);
  //   console.log(hour);
  //   console.log(minute);

  let hourDeg = hour * 30 + 0.5 * minute; 
  //saat 3dusə, dəqiqə oxu tam olaraq 90 dərəcə, saat oxu isə 15 dərəcə (0,5 * 30 dərəcə) irəli sürüşür.
  let minuteDeg = minute * 6 + 0.1 * second; 
  //dəqiqə 20disə, saniyə oxu tam olaraq 120 dərəcə yerləşir, dəqiqə oxu isə 2 dərəcə (0,1 * 6 dərəcə) irəli sürüşür.
  let secondDeg = second * 6; 
  //saniye 15drse, 15 vur 6 olmalidi

  hourArrow.style.transform = "rotate(" + hourDeg + "deg)";
  minuteArrow.style.transform = "rotate(" + minuteDeg + "deg)";
  secondArrow.style.transform = "rotate(" + secondDeg + "deg)";

  // Check if alarm time is reached
  if (alarmTime !== null && date >= alarmTime) {
    showAlarm();
    alarmTime = null; // alarnmi sifirlayir
  }

  setTimeout(displayTime, 1000);
}

function showAlarm() {
  alert("Vaxtdır!");
  snooze.disabled = false; // snuzu acir
}

set.addEventListener("click", function () {
  // inputun valuesunu alarma oturur
  let hourValue = parseInt(hourinput.value);
  let minuteValue = parseInt(minuteinput.value);

  // alarmi set edirik
  let currentDate = new Date();
  alarmTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hourValue,
    minuteValue,
    0
  );

  hourinput.value = "";
  minuteinput.value = "";

  console.log(hourValue + ":" + minuteValue);
});

snooze.addEventListener("click", function () {
  snooze.disabled = true;

  // snuz edenden sonra yeniden set alarm elemek ucun
  let currentDate = new Date();
  let newAlarmTime = new Date(currentDate.getTime() + snoozeTime);

  alarmTime = newAlarmTime;
  console.log("Alaram 5 dəqiqəlik dayandırıldı.");
});

displayTime();
