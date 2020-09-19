const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onNameOutput);
function onNameOutput(event) {
  nameOutputEl.textContent = event.currentTarget.value;
}
