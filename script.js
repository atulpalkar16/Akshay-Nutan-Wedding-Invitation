"use strict";

const countdown = () => {
  const now = new Date().getTime();
  const target = new Date("June 1, 2025 11:30:00").getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "The wedding day is here!";
    clearInterval(timer);
    return;
  }

  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

const timer = setInterval(countdown, 1000);
countdown();
