// let hourArrow = document.getElementById("hour");
// let minuteArrow = document.getElementById("min");
// let secondArrow = document.getElementById("sec");

// function displayTime() {
//   let date = new Date();
//   let hour = date.getHours() % 12; //0 to 23
//   let minute = date.getMinutes();
//   let second = date.getSeconds();

//   //   console.log(second);
//   //   console.log(hour);
//   //   console.log(minute);

//   let hourDeg = hour * 30 + 0.5 * minute; //each hour is 30 degrees (360 / 12)
//   //saat 3-dürsə, dəqiqə oxu tam olaraq 90 dərəcə, saat oxu isə 15 dərəcə (0,5 * 30 dərəcə) irəli sürüşür.
//   let minuteDeg = minute * 6 + 0.1 * second; //each minute is 6 degrees (360 / 60)
//   //dəqiqə 20-dirsə, saniyə oxu tam olaraq 120 dərəcə yerləşir, dəqiqə oxu isə 2 dərəcə (0,1 * 6 dərəcə) irəli sürüşür.
//   let secondDeg = second * 6; //each second is 6 degrees (360 / 60)

//   hourArrow.style.transform = "rotate(" + hourDeg + "deg)";
//   minuteArrow.style.transform = "rotate(" + minuteDeg + "deg)";
//   secondArrow.style.transform = "rotate(" + secondDeg + "deg)";

//   setTimeout(displayTime, 1000);
// }
// displayTime();

// let hourinput = document.getElementById("hourinput");
// let hourinputvalue = hourinput.value;
// let minuteinput = document.getElementById("minuteinput");
// let minuteinputalue = minuteinput.value;

// let set = document.getElementById("set");
// let snooze = document.getElementById("snooze");

// function alarm() {}

// alarm();

// // set.addEventListener("click", () => {

// // });
