const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function () {
const hours = Number(document.getElementById("hours").value) || 0;
const rate = Number(document.getElementById("rate").value) || 0;
const materials = Number(document.getElementById("materials").value) || 0;

const total = hours * rate + materials;

document.getElementById("total").textContent =
"Total / Total: $" + total.toFixed(2);
});
