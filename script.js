document.addEventListener("DOMContentLoaded", function () {
const button = document.getElementById("calculate");
const totalDisplay = document.getElementById("total");

if (!button || !totalDisplay) {
return;
}

button.addEventListener("click", function () {
const hours = Number(document.getElementById("hours").value) || 0;
const rate = Number(document.getElementById("rate").value) || 0;
const materials = Number(document.getElementById("materials").value) || 0;

const total = hours * rate + materials;

totalDisplay.textContent = "Total / Total: $" + total.toFixed(2);

});
});
