const selectForm = document.getElementById("formSelect");
const [propioBtn, tercerosBtn] = document.querySelectorAll(".deposito__btn");
const mainContainer = document.querySelector(".main");

propioBtn.addEventListener("click", () => {
  depositProp();
  formPropAccount();
});
tercerosBtn.addEventListener("click", () => {
  depositTer();
  tercerosSubmit();
});

const depositProp = () => {
  const div = document.createElement("div");
  div.innerHTML = depositPropioInner();
  div.classList.add("form__deposito");
  mainContainer.appendChild(div);
};

const formPropAccount = () => {
  const form = document.forms.formCuentaPropia;
  const closeForm = document.querySelector(".form__close");
  const [inputCBu, inputBalance] = form.elements;
  const activeUser = getLocal("activeUser");
  inputCBu.value = activeUser.cbu;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validationPropDeposit(activeUser, inputBalance);
  });
  closeForm.addEventListener("click", () => {
    document.querySelector(".form__deposito").remove();
  });
};
const validationPropDeposit = (activeUser, balance) => {
  if (balance.value !== "" && Number(balance.value) !== 0) {
    console.log("asdas");
    activeUser.balance += Number(balance.value);
    updateLocal("activeUser", activeUser);
    updateChangesUser();
    validateInput(balance, findData(balance));
    setTimeout(() => document.querySelector(".form__deposito").remove(), 500);
  } else {
    inputError(balance, "Ingresa un monto", findData(balance));
  }
};

const depositTer = () => {
  const div = document.createElement("div");
  div.innerHTML = depositTerceroInner();
  div.classList.add("form__deposito");
  mainContainer.appendChild(div);
};
const tercerosSubmit = () => {
  const form = document.forms.formCuentaTerceros;
  const [inputCBu, inputBalance] = form.elements;
  const closeForm = document.querySelector(".form__close");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validationTerceary(inputCBu, inputBalance);
  });
  closeForm.addEventListener("click", () => {
    document.querySelector(".form__deposito").remove();
  });
};
const validationTerceary = (cbu, balance) => {
  const notEmpty = cbu.value !== "" && balance.value !== "";
  const cbuLenght = cbu.value.length === 22 && cbu.value.length < 23;
  if (!notEmpty && !cbuLenght) {
    notEmptyError(cbu, balance);
    cbuLenghtError(cbu);
  } else {
    validateAll(cbu, balance);
    depositInUser(cbu, balance);
  }
};
const notEmptyError = (cbu, balance) => {
  if (cbu.value === "") {
    inputError(cbu, "Completa el campo", findData(cbu));
  }
  if (balance.value === "") {
    inputError(balance, "Completa el campo", findData(balance));
  } else {
    validateInput(balance, findData(balance));
  }
};
const cbuLenghtError = (cbu) => {
  if (cbu.value.length !== 22 || cbu.value.length > 22) {
    inputError(cbu, "El cbu debe tener 22 digitos", findData(cbu));
  } else {
    validateInput(cbu, findData(cbu));
  }
};
const validateAll = (cbu, balance) => {
  validateInput(cbu, findData(cbu));
  validateInput(balance, findData(balance));
};
const depositInUser = (cbu, balance) => {
  const findUserCbu = users.find((user) => user.cbu === cbu.value);
  const activeUser = getLocal("activeUser");
  if (findUserCbu) {
    activeUser.balance += Number(balance.value);
    updateLocal("activeUser", activeUser);
    updateChangesUser();
    setTimeout(() => document.querySelector(".form__deposito").remove(), 500);
  } else {
    setTimeout(() => document.querySelector(".form__deposito").remove(), 500);
  }
};
