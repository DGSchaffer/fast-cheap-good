const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

fast.addEventListener("change", nurZwei);
cheap.addEventListener("change", nurZwei);
good.addEventListener("change", nurZwei);

let counts = 0;
let lastChecked;

function nurZwei(checkbox) {
  if (checkbox.target.checked === true) {
    counts++;
  } else {
    counts--;
  }
  if (counts === 3) {
    counts--;
    lastChecked.checked = false;
  }
  lastChecked = checkbox.target;
}
