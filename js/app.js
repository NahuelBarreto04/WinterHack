const welcome = "/index.html";
const home = "/html/home/home.html";
const services = "/html/servicios/servicios.html";
const deposito = "/html/deposito/deposito.html";
const consultas = "/html/consultas/consultas.html";
const transfer = "/html/transfer/transfer.html";
const updateLocal = (item, element) => {
  return localStorage.setItem(item, JSON.stringify(element));
};
const getLocal = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
let users = JSON.parse(localStorage.getItem("users")) || [];
const findData = (input) => {
  return input.getAttribute("data-input");
};
const searchSpan = (input, data) => {
  let formElements = input.parentNode.childNodes;
  let formSpans = [...formElements].filter((e) => e.tagName == "SPAN");
  let spanInput = formSpans.find(
    (span) => span.getAttribute("data-input") === data
  );
  return spanInput;
};
function inputError(input, mensaje, data) {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = `<i class="fa-solid fa-circle-xmark icon__error"></i> ${mensaje}`;
  input.classList.add("form__error-validationInput");
}
const validationAll = (name, surname, user, pass) => {
  const inputs = [name, surname, user, pass];
  const datas = ["name", "surname", "user", "password"];
  inputs.forEach((input) => {
    datas.forEach((data) => {
      validateInput(input, data);
    });
  });
};
const validateInput = (input, data) => {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = "";
  input.classList.remove("form__error-validationInput");
  input.classList.add("form__validate");
};

const firstLetterMayus = (strs) => {
  const str = strs.trim();
  const firstLetterUpper = str.charAt(0).toUpperCase();
  const sliceStr = str.slice(1);
  const strFirstLetterMayus = firstLetterUpper + sliceStr;
  return strFirstLetterMayus;
};
const capitaliceStr = (strs) => {
  const strsNormalice = strs.toLowerCase();
  const strArr = strsNormalice.split(" ");
  let capitaliceString = "";
  strArr.forEach((str) => (capitaliceString += `${firstLetterMayus(str)} `));
  return capitaliceString.trim();
};

const createUserAndLocal = (obj) => {
  users = [...users, obj];
  return updateLocal("users", users);
};

const createCbu = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cbu = "";
  for (let i = 0; i < 22; i++) {
    cbu += arr[parseInt(Math.random() * arr.length)];
  }
  return checkExistCbu(cbu);
};
const checkExistCbu = (cbu) => {
  if (users.length !== 0) {
    if (users.some((user) => user.cbu === cbu)) {
      return createCbu();
    } else {
      return cbu;
    }
  } else {
    return cbu;
  }
};
const checkUser = (userInput) => {
  if (users.length !== 0) {
    if (users.some((user) => user.user === userInput.value)) {
      return inputError(
        userInput,
        "Este usuario ya está registrado",
        findData(userInput)
      );
    } else {
      return allInputsValid(userInput, findData(userInput));
    }
  } else {
    return allInputsValid(userInput, findData(userInput));
  }
};

const goToPage = (root) => {
  return setTimeout(() => (window.location.href = root), 500);
};

const activeUser = (user) => {
  if (user) {
    updateLocal("activeUser", user);
  }
};
const updateChangesUser = () => {
  const activeUser = getLocal("activeUser");
  users = users.filter((user) => activeUser.user !== user.user);
  users = [...users, activeUser];
  updateLocal("users", users);
};
const userBalance = () => {
  const activeUser = getLocal("activeUser");
  return activeUser.balance;
};

const createAlert = (menssage, element) => {
  const div = document.createElement("div");
  div.innerHTML = ` <span class="spanAlert">${menssage}</span>`;
  div.classList.add("cardAlert");
  element.appendChild(div);
  setTimeout(() => div.remove(), 1000);
};
