const updateLocal = (item, element) => {
  return localStorage.setItem(item, JSON.stringify(element));
};

const createForm = (form) => {
  formContainer.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = form();
  div.classList.add("form");
  if (form.name === "formLoginInner") {
    div.classList.add("form--login");
  }
  formContainer.appendChild(div);
};

// const validationRegister = ({ target }) => {
//   const formRegister = document.forms.formRegister;

//   const nameValue = inputName;
//   const surnameValue = inputSurname;
//   const userValue = inputUser.value;
//   const passValue = inputPass.value;
//   //   const  = formEmail.value;
//   //   const regExMail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
//   const regExPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
//   //   (?=.*[!@#$%^&*]) caracteres especiales
//   // console.log("asdasas");
//   switch (target.name) {
//     case "registerName":
//       if (nameValue !== "") {
//         inputName.classList.remove("form__error-validationInput");
//         inputName.classList.add("form__validate");
//       } else {
//         inputName.classList.add("form__error-validationInput");
//       }
//       break;
//     case "registerPass":
//       if (regExPass.test(passValue)) {
//         inputPass.classList.remove("form__error-validationInput");
//         inputPass.classList.add("form__validate");
//       } else {
//         inputPass.classList.add("form__error-validationInput");
//       }
//       break;
//   }
// };
const allInputsValid = (name, surname, user, pass) =>
  nameValid(name) &&
  allLengthValid(name, surname, user) &&
  nameDifSurname(name, surname) &&
  passwordValid(pass);
const noEmpty = (name, surname, user, pass) =>
  name.value !== "" &&
  surname.value !== "" &&
  user.value !== "" &&
  pass.value !== "";

// const nameValid = (name) => name.value.length >= 3;

const allLengthValid = (name, surname, user, pass) =>
  inputLength(name, 4, 30) &&
  inputLength(surname, 4, 30) &&
  inputLength(user, 4, 12) &&
  inputLength(pass, 0, 30);

const inputLength = (input, min, max) =>
  input.value.length >= min && input.value.length < max;
const nameDifSurname = (name, surname) => name.value !== surname.value;
// const userValid = (user) => user.value.length >= 4 && user.value.length < 8;
// const passwordValid = (pass) => {
//   const regExPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
//   return regExPass.test(pass.value);
// };

const validation = (name, surname, user, pass) => {
  console.log(pass.value);
  // console.log(userValid(user));
  // console.log(allLengthValid(name, surname, user));
  // console.log(nameDifSurname(name, surname));
  // console.log(name.tagName);
  // console.log(search(surname, "surname"));
  // console.log(passwordValid(pass));
  // if (!nameValid(name)) {
  if (!allLengthValid(name, surname, user, pass)) {
    lengthError(name, surname, user, pass);
    // passError(pass);
    // alert("malo");
  } else {
    // validationAll(name, surname, user, pass);
    alert("todo correcto");
  }
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
  console.log(inputSpan);
  inputSpan.innerHTML = mensaje;
  input.classList.add("form__error-validationInput");
}
const lengthError = (name, surname, user, pass) => {
  const higherMin = (input, mensagge, min, data) => {
    console.log(input.value.length);
    if (!(input.value.length >= min)) {
      return inputError(input, mensagge, data);
    } else {
      return validateInput(input, data);
    }
  };
  const minorMax = (input, mensagge, max, data) => {
    if (!(input.value.length <= max)) {
      return inputError(input, mensagge, data);
    }
  };
  higherMin(name, "El nombre debe tener minimo 4 caracteres", 4, "name");
  higherMin(surname, "El nombre debe tener minimo 4 caracteres", 4, "surname");
  higherMin(user, "El nombre debe tener minimo 4 caracteres", 4, "user");
  higherMin(
    pass,
    "La contraseña debe tener minimo 8 caracteres",
    8,
    "password"
  );
  minorMax(name, "El nombre debe tener menos 30 caracteres", 30, "name");
  minorMax(surname, "El nombre debe tener menos 30 caracteres", 30, "surname");
  minorMax(user, "El nombre debe tener menos 12 caracteres", 12, "user");
  minorMax(
    pass,
    "La contraseña debe tener menos 30 caracteres",
    30,
    "password"
  );
};

function showError() {
  alert("error");
}
const validateInput = (input, data) => {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = "";
  input.classList.remove("form__error-validationInput");
  input.classList.add("form__validate");
};

function validationAll(name, surname, user, pass) {
  console.log("ads");
}
