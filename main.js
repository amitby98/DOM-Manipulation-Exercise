const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
  const item = input.value;
  input.value = "";
  const liEl = document.createElement("li");
  const spanEl = document.createElement("span");
  const buttonEl = document.createElement("button");
  liEl.appendChild(spanEl);
  liEl.appendChild(buttonEl);
  spanEl.textContent = item;
  buttonEl.textContent = "Delete";
  ul.appendChild(liEl);

  buttonEl.onclick = function removeItem() {
    ul.removeChild(liEl);
    input.focus();
  };
}
