const formTransfer = document.forms.formTransfer;
const accountInput = formTransfer.elements.userAccount;
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
  // validationTransfer()
});

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
  console.log(popUp);
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
  if (cbu.value === "") {
    return inputError(cbu, "Complete el campo", findData(cbu));
  } else if (cbuLenght(cbu)) {
    cbuLenghtError(cbu);
  }
  if (!userCbuFind) {
    return inputError(cbu, "Cuenta no encontrada", findData(cbu));
  } else {
    validateInput(cbu, findData(cbu));
    document.querySelector(".search-container").remove();
    saveUser(userCbuFind);
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

const saveUser = (user) => {
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
  const objAlias = {
    cbu: user.cbu,
    alias: aliasValue,
  };
  if (checkAliasExist(aliasValue, activeUser)) {
    activeUser.usersCbu.push(objAlias);
    console.log(activeUser.usersCbu);
    updateLocal("activeUser", activeUser);
    updateChangesUser();
  }
};

const checkAliasExist = (aliasValue, activeUser) => {
  activeUser.usersCbu.forEach((cbuUserSaved) => {
    if (aliasValue === cbuUserSaved.alias) {
      return true;
    }
  });
};
