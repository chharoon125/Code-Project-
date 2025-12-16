function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // 12-hour format

  // Pad with leading zeros
  const hStr = String(hours).padStart(2, "0");
  const mStr = String(minutes).padStart(2, "0");
  const sStr = String(seconds).padStart(2, "0");

  document.getElementById("hours").textContent = hStr;
  document.getElementById("minutes").textContent = mStr;
  document.getElementById("seconds").textContent = sStr;
  document.getElementById("ampm").textContent = ampm;
}

// run immediately and then update every second
updateClock();
setInterval(updateClock, 1000);
