function loadHistory() {
  return JSON.parse(localStorage.getItem("history") || "{}");
}

const history = loadHistory();
const labels = Object.keys(history).slice(-7); // últimos 7 dias
const data = Object.values(history).slice(-7);

new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Vezes por dia",
      data,
      backgroundColor: "#4caf50"
    }]
  }
});

const ul = document.getElementById("history");
for (let day in history) {
  const li = document.createElement("li");
  li.textContent = `${day}: ${history[day]} vezes`;
  ul.appendChild(li);
}
