const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.onsubmit = function (event) {
  // prevent form submission default behavior
  event.preventDefault();

  const name = form.contactName.value;
  const phone = form.contactPhone.value;

  const newLi = document.createElement("li");

  newLi.innerHTML = `
  <div>
    <p>${name}</p>
    <span>x</span>
  </div>
  <p>${phone}</p>`;

  ul.append(newLi);

  newLi.setAttribute("id", phone);

  const newLiSpan = newLi.querySelector("span");

  newLiSpan.onclick = function () {
    const liClicked = document.getElementById(phone);
    ul.removeChild(liClicked);
  };

  form.contactName.value = "";
  form.contactPhone.value = "";
};
