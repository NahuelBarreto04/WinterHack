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

const allLengthValid = (name, surname, user) =>
  inputLength(name, 4, 30) &&
  inputLength(surname, 4, 30) &&
  inputLength(user, 4, 12);

const inputLength = (input, min, max) =>
  input.value.length >= min && input.value.length < max;
const nameDifSurname = (name, surname) => name.value !== surname.value;
const userValid = (user) => user.value.length >= 4 && user.value.length < 8;
const passwordValid = (pass) => {
  const regExPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  return regExPass.test(pass.value);
};

const validation = (name, surname, user, pass) => {
  // console.log(userValid(user));
  // console.log(allLengthValid(name, surname, user));
  // console.log(nameDifSurname(name, surname));
  // console.log(name.tagName);
  // console.log(search(surname, "surname"));
  // console.log(passwordValid(pass));
  // if (!nameValid(name)) {
  if (!allLengthValid(name, surname, user)) {
    lengthError(name, surname, user);
  } else {
    alert("todo correcto");
  }
  // }
  // console.log(allInputsValid(name, surname, user, pass));
  // if (namesValid(name, surname)) {
  //   alert("holaaa");
  // } else {
  //   alert("nono");
  // }
};
function searchSpan(input, data) {
  let formElements = input.parentNode.childNodes;
  let formSpans = [...formElements].filter((e) => e.tagName == "SPAN");
  let spanInput = formSpans.find(
    (span) => span.getAttribute("data-input") === data
  );
  return spanInput;
}
function inputError(input, mensaje, data) {
  const inputSpan = searchSpan(input, data);
  console.log(inputSpan);
  inputSpan.innerHTML = mensaje;
  input.classList.add("form__error-validationInput");
}
function lengthError(name, surname, user) {
  // const mayor5 = (input,data)=> {
  //   input >=4 ? inputError(name, "El nombre debe tener minimo 4 caracteres", data): return;
  // }
  const nameLenght = name.value.length;
  const surNameLenght = user.value.length;
  // console.log(nameLenght);
  // if (!(nameLenght >= 4)) {
  //   console.log("asd");
  //   inputError(name, "El nombre debe tener minimo 4 caracteres");
  // }

  !(nameLenght >= 4)
    ? inputError(name, "El nombre debe tener minimo 4 caracteres", "name")
    : !(nameLenght < 30)
    ? inputError(name, "El nombre debe tener menos de 30 caracteres", "name")
    : undefined;
  !(surNameLenght >= 4)
    ? inputError(
        surname,
        "El apellido debe tener minimo 4 caracteres",
        "surname"
      )
    : !(surNameLenght <= 30)
    ? inputError(
        surname,
        "El apellido debe tener menos de 30 caracteres",
        "surname"
      )
    : console.log("asd");
}
function showError() {
  alert("error");
}
