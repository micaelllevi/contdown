const countEl = document.getElementById("count");
const labelEl = document.getElementById("label");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let n = parseInt(localStorage.getItem("contador") || "0");
render();

function render() {
  countEl.textContent = n;
  labelEl.textContent = n === 1 ? "vez" : "vezes";
  saveToday(n);
  localStorage.setItem("contador", n);
}

function saveToday(value) {
  const today = new Date().toISOString().split("T")[0];
  let history = JSON.parse(localStorage.getItem("history") || "{}");
  history[today] = value;
  localStorage.setItem("history", JSON.stringify(history));
}

plusBtn.onclick = () => { n++; render(); };
minusBtn.onclick = () => { if(n>0) n--; render(); };
resetBtn.onclick = () => { n=0; render(); };

document.body.addEventListener("click", e => {
  if (!e.target.closest("button")) { n++; render(); }
});

// PWA service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
