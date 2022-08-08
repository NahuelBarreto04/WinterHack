const selectForm = document.getElementById("formSelect");
const [propioBtn, tercerosBtn] = document.querySelectorAll(".deposito__btn");
const mainContainer = document.querySelector(".main");
const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(home);
});
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
  if (!allValid(cbu, balance)) {
    notEmptyError(cbu, balance);
    cbuLenghtError(cbu);
  } else {
    console.log("sdsjakl");
    validateAll(cbu, balance);
    depositInUser(cbu, balance);
  }
};

const allValid = (cbu, balance) => noEmpty(cbu, balance) && cbuLenght(cbu);
const cbuLenght = (cbu) => cbu.value.length === 22 && cbu.value.length < 23;

const noEmpty = (cbu, balance) => cbu.value !== "" && balance.value !== "";
const notEmptyError = (cbu, balance) => {
  if (balance.value === "") {
    return inputError(balance, "Completa el campo", findData(balance));
  } else {
    validateInput(balance, findData(balance));
  }
  if (cbu.value === "") {
    inputError(cbu, "Completa el campo", findData(cbu));
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
  if (findUserCbu) {
    console.log(findUserCbu);
    findUserCbu.balance += Number(balance.value);
    users = users.filter((user) => findUserCbu.user !== user.user);
    users = [...users, findUserCbu];
    updateLocal("users", users);
    updateChangesUser();
    setTimeout(() => document.querySelector(".form__deposito").remove(), 500);
  } else {
    setTimeout(() => document.querySelector(".form__deposito").remove(), 500);
  }
};
