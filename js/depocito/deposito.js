const selectForm = document.getElementById("formSelect");
const [propioBtn, tercerosBtn] = document.querySelectorAll(".deposito__btn");
const mainContainer = document.querySelector(".main");
console.log(mainContainer);

console.log(propioBtn, tercerosBtn);
propioBtn.addEventListener("click", () => {
  depositProp();
  // const form = document.forms;
  validateProp();
});
tercerosBtn.addEventListener("click", () => {
  depositTer();
});
const depositTer = () => {
  const div = document.createElement("div");
  div.innerHTML = depositTerceroInner();
  div.classList.add("form__deposito");
  mainContainer.appendChild(div);
};

const depositProp = () => {
  const div = document.createElement("div");
  div.innerHTML = depositPropioInner();
  div.classList.add("form__deposito");
  mainContainer.appendChild(div);
};

const validateProp = () => {
  const form = document.forms.formCuentaPropia;
  const [inputCBu, inputMonto] = form.elements;
  console.log(inputCBu, inputMonto);
  const activeUser = getLocal("activeUser");
  inputCBu.value = activeUser.cbu;
  form.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
  });

  // if()
};
