const getTime = () => {
  const seconds = document.getElementById("seconds");
  const minutes = document.getElementById("minutes");
  const hours = document.getElementById("hours");
  let session = document.getElementById("session");

  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hr = hr < 10 ? "0" + hr : hr;

  /*   if (hr === 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    session.innerText = "PM";
  } */

  seconds.textContent = sec;
  minutes.textContent = min;
  hours.textContent = hr;
};

setInterval(getTime, 1000);
