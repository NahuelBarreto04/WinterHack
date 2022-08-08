const formTransfer = document.forms.formTransfer;
const accountInput = formTransfer.elements.userAccount;
const selectInput = formTransfer.elements.userCbu;
const balanceInput = formTransfer.elements.userBalance;
const addCbuBtn = document.querySelector(".btn__addCbu");
const sectionHero = document.querySelector(".hero");
const backBbtn = document.querySelector(".btn-back");
backBbtn.addEventListener("click", () => goToPage(home));
document.addEventListener("DOMContentLoaded", () => {
  const activeUser = getLocal("activeUser");
  accountInput.value = activeUser.cbu;
});

formTransfer.addEventListener("submit", (e) => {
  e.preventDefault();
  validationTransfer(balanceInput, selectInput);
});

const validationTransfer = (balanceInput, selectInput) => {
  const activeUser = getLocal("activeUser");
  if (!allValidTransfer(activeUser, balanceInput)) {
    balanceTransferError(activeUser, balanceInput);
    checkOptionCbuError(selectInput);
    return;
  } else {
    validateInput(balanceInput, findData(balanceInput));
    validateInput(selectInput, findData(selectInput));
    tranferBalance(activeUser, selectInput, balanceInput);
  }
};

const tranferBalance = (activeUser, selectInput, balanceInput) => {
  const userToTransfer = users.find((user) => user.cbu === selectInput.value);
  activeUser.balance -= Number(balanceInput.value);
  userToTransfer.balance += Number(balanceInput.value);
  users = users.filter((filter) => filter.cbu !== selectInput.value);
  users = [...users, userToTransfer];
  updateLocal("activeUser", activeUser);
  updateLocal("users", users);
  updateChangesUser();
  setTimeout(() => location.reload(), 200);
};
const allValidTransfer = (activeUser, balanceInput) =>
  checkBalance(activeUser, balanceInput);
const checkBalance = (activeUser, balanceInput) =>
  Number(balanceInput.value) !== 0 &&
  Number(balanceInput.value) <= activeUser.balance;

const checkOptionCbu = (activeUser, selectInput) =>
  selectInput.childNodes.length > 0 &&
  activeUser.usersCbu.some((user) => user.cbu === selectInput.value);
const checkOptionCbuError = (selectInput) => {
  selectInput.childNodes.length < 0
    ? inputError(selectInput, "Agregue un cbu", findData(selectInput))
    : validateInput(selectInput, findData(selectInput));
};
const balanceTransferError = (activeUser, balanceInput) => {
  if (Number(balanceInput.value) === 0) {
    return inputError(
      balanceInput,
      "Ingrese fondos por favor",
      findData(balanceInput)
    );
  } else if (Number(balanceInput.value) > activeUser.balance) {
    inputError(balanceInput, "Fondos insuficientes", findData(balanceInput));
  } else {
    return validateInput(balanceInput, findData(balanceInput));
  }
};

// *SEARCH CBU
addCbuBtn.addEventListener("click", () => {
  createPopUp(popUpSearchCbuInner);
  popUpSearchCbu();
  const closeBtn = document.querySelector("#close_search");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".search-container").remove();
  });
});

const createPopUp = (popUp) => {
  const article = document.createElement("article");
  article.innerHTML = popUp();
  sectionHero.appendChild(article);
  article.classList.add("search-container");
};

const popUpSearchCbu = () => {
  const formSearchCbu = document.forms.formSearchCbu;
  const cbuInput = formSearchCbu.elements.userCbu;
  formSearchCbu.addEventListener("submit", (e) => {
    e.preventDefault();
    validationSearch(cbuInput);
  });
};
const validationSearch = (cbu) => {
  const userCbuFind = users.find((user) => user.cbu === cbu.value);
  const activeUser = getLocal("activeUser");
  if (cbu.value === "") {
    return inputError(cbu, "Complete el campo", findData(cbu));
  } else if (cbuLenght(cbu)) {
    cbuLenghtError(cbu);
  }
  if (activeUser.usersCbu.some((user) => user.cbu === cbu.value)) {
    return inputError(cbu, "Este cbu ya tiene un alias", findData(cbu));
  }
  if (!userCbuFind) {
    return inputError(cbu, "Cuenta no encontrada", findData(cbu));
  } else {
    validateInput(cbu, findData(cbu));
    document.querySelector(".search-container").remove();
    saveAliasUser(userCbuFind);
  }
};

const cbuLenght = (cbu) => cbu.value.length === 22 && cbu.value.length < 23;

const cbuLenghtError = (cbu) => {
  if (cbu.value.length !== 22 || cbu.value.length > 22) {
    inputError(cbu, "El cbu debe tener 22 digitos", findData(cbu));
  } else {
    return validateInput(cbu, findData(cbu));
  }
};

const saveAliasUser = (user) => {
  createPopUp(popUpSaveUserInner);
  const formSave = document.forms.formSaveUser;
  const userCbu = formSave.elements.userCbu;
  const userPropietarySpan = document.querySelector(".dataUserName");
  const userAlias = formSave.elements.userAlias;
  userCbu.value = user.cbu;
  userPropietarySpan.innerHTML = `${user.name} ${user.surname}`;
  const closeBtn = document.querySelector("#close_search2");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".search-container").remove();
  });

  formSave.addEventListener("submit", (e) => {
    e.preventDefault();
    saveUserAlias(userAlias, user);
  });
};

const saveUserAlias = (alias, user) => {
  const aliasValue = alias.value;
  const activeUser = getLocal("activeUser");
  if (activeUser.usersCbu.some((user) => user.alias === aliasValue)) {
    return inputError(alias, "Este Alias ya existe", findData(alias));
  } else {
    validateInput(alias, findData(alias));
  }
  const objAlias = {
    cbu: user.cbu,
    alias: aliasValue,
  };
  activeUser.usersCbu.push(objAlias);
  updateLocal("activeUser", activeUser);
  updateChangesUser();
  document.querySelector(".search-container").remove();
  createCbuOptions();
};

const createCbuOptions = () => {
  const activeUser = getLocal("activeUser");
  const selectInput = document.getElementById("userCbu");
  selectInput.innerHTML = "";
  activeUser.usersCbu.forEach((users) => {
    const option = document.createElement("option");
    option.value = users.cbu;
    option.innerHTML = users.alias;
    selectInput.prepend(option);
  });
};
createCbuOptions();
