const ageLabels = ["Teenager", "Young Adult", "Adult", "Middle-aged", "Older Adult", "Senior"];
const bpValues = [129, 131, 133, 136, 134, 128];
const colors = ["#2864e8", "#fb7815", "#f04449", "#09b5ce", "#16a34a", "#eab308"];
const chartDefaults = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { labels: { usePointStyle: true, boxWidth: 8, color: "#6e8098", font: { family: "DM Sans", size: 11 } } } },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#71819a", font: { family: "DM Sans", size: 11 } }, border: { color: "#dfe7f1" } },
    y: { beginAtZero: false, grid: { color: "#eaf0f7" }, ticks: { color: "#71819a", font: { family: "DM Sans", size: 11 } }, border: { display: false } }
  }
};
let bpChart, diseaseChart, lifestyleChart, trendChart;

function createCharts() {
  bpChart = new Chart(document.getElementById("bpChart"), {
    type: "bar",
    data: { labels: ageLabels, datasets: [{ label: "Average systolic BP (mmHg)", data: bpValues, backgroundColor: colors, borderRadius: 9, borderSkipped: false, maxBarThickness: 52 }] },
    options: { ...chartDefaults, plugins: { ...chartDefaults.plugins, legend: { display: false } }, scales: { ...chartDefaults.scales, y: { ...chartDefaults.scales.y, min: 0, max: 160, ticks: { stepSize: 20, color: "#71819a" } } } }
  });
  diseaseChart = new Chart(document.getElementById("diseaseChart"), {
    type: "doughnut",
    data: { labels: ["Cardiovascular", "Diabetes", "Respiratory", "Other / none"], datasets: [{ data: [28, 22, 16, 34], backgroundColor: ["#2864e8", "#12b8a6", "#fb8b36", "#a8b9d2"], borderWidth: 3, borderColor: "#fff", hoverOffset: 7 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: "64%", plugins: { legend: { position: "bottom", labels: { usePointStyle: true, padding: 16, boxWidth: 8, color: "#71819a", font: { family: "DM Sans", size: 10 } } } } }
  });
  lifestyleChart = new Chart(document.getElementById("lifestyleChart"), {
    type: "bar",
    data: { labels: ["Smoking", "Alcohol", "Fatigue", "Low exercise"], datasets: [{ label: "Illustrative indicator score", data: [34, 27, 43, 39], backgroundColor: ["#2864e8", "#fb7815", "#f04449", "#12b8a6"], borderRadius: 7, borderSkipped: false, maxBarThickness: 36 }] },
    options: { ...chartDefaults, indexAxis: "y", plugins: { ...chartDefaults.plugins, legend: { display: false } }, scales: { x: { ...chartDefaults.scales.x, min: 0, max: 50 }, y: { ...chartDefaults.scales.y, grid: { display: false } } } }
  });
  trendChart = new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: { labels: ageLabels, datasets: [
      { label: "Average systolic BP", data: bpValues, borderColor: "#2864e8", backgroundColor: "#2864e81c", fill: true, tension: .35, pointRadius: 4, pointBackgroundColor: "#2864e8" },
      { label: "Illustrative wellness score", data: [82, 79, 75, 71, 68, 63], borderColor: "#12b8a6", backgroundColor: "transparent", tension: .35, pointRadius: 4 }
    ] },
    options: { ...chartDefaults, scales: { ...chartDefaults.scales, y: { ...chartDefaults.scales.y, min: 0, max: 160 } } }
  });
}
function renderHeatmap(selectedAge = "all") {
  const container = document.getElementById("heatmap");
  container.innerHTML = "";
  const factors = ["Smoking", "Alcohol", "Fatigue", "Exercise"];
  const scores = {
    "Teenager": [18, 12, 25, 20], "Young Adult": [30, 24, 33, 29],
    "Adult": [35, 29, 38, 36], "Middle-aged": [39, 31, 42, 40],
    "Older Adult": [33, 25, 37, 34], "Senior": [24, 19, 31, 28]
  };
  container.appendChild(Object.assign(document.createElement("div"), { className: "heat-head", textContent: "Age group" }));
  factors.forEach(f => container.appendChild(Object.assign(document.createElement("div"), { className: "heat-head", textContent: f })));
  ageLabels.filter(a => selectedAge === "all" || a === selectedAge).forEach(age => {
    container.appendChild(Object.assign(document.createElement("div"), { className: "heat-label", textContent: age }));
    scores[age].forEach(score => {
      const cell = document.createElement("div");
      cell.className = "heat-cell " + (score < 25 ? "low" : score < 35 ? "medium" : "high");
      cell.textContent = score;
      cell.title = `${age} · ${score} illustrative score`;
      container.appendChild(cell);
    });
  });
}
function updateCharts() {
  const age = document.getElementById("ageFilter").value;
  const indicator = document.getElementById("indicatorFilter").value;
  const indices = age === "all" ? ageLabels.map((_, i) => i) : [ageLabels.indexOf(age)];
  const labels = indices.map(i => ageLabels[i]);
  bpChart.data.labels = labels;
  bpChart.data.datasets[0].data = indices.map(i => bpValues[i]);
  bpChart.data.datasets[0].backgroundColor = indices.map(i => colors[i]);
  bpChart.update();
  trendChart.data.labels = labels;
  trendChart.data.datasets.forEach(ds => ds.data = indices.map(i => ds.label.includes("blood") ? bpValues[i] : [82,79,75,71,68,63][i]));
  trendChart.update();
  renderHeatmap(age);
  document.querySelectorAll("[data-chart]").forEach(card => {
    card.style.display = indicator === "all" || card.dataset.chart === indicator ? "" : "none";
  });
  // Keep a useful layout when filtering leaves only one chart type.
  document.getElementById("chartGrid").classList.toggle("filtered-grid", indicator !== "all");
}
document.getElementById("ageFilter").addEventListener("change", updateCharts);
document.getElementById("indicatorFilter").addEventListener("change", updateCharts);
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("ageFilter").value = "all";
  document.getElementById("indicatorFilter").value = "all";
  updateCharts();
});
document.getElementById("printBtn").addEventListener("click", () => window.print());
document.getElementById("menuBtn").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open")));
createCharts();
renderHeatmap();
