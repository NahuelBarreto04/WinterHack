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
const validationRegister = ({ target }) => {
  console.log(target.name);
  const nameValue = inputName;
  const surnameValue = inputSurname;
  const userValue = inputUser.value;
  const passValue = inputPass.value;
  //   const  = formEmail.value;
  //   const regExMail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  const regExPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  //   (?=.*[!@#$%^&*]) caracteres especiales
  // console.log("asdasas");
  switch (target.name) {
    case "registerName":
      if (nameValue !== "") {
        inputName.classList.remove("form__error-validationInput");
        inputName.classList.add("form__validate");
      } else {
        inputName.classList.add("form__error-validationInput");
      }
      break;
    case "registerPass":
      if (regExPass.test(passValue)) {
        inputPass.classList.remove("form__error-validationInput");
        inputPass.classList.add("form__validate");
      } else {
        inputPass.classList.add("form__error-validationInput");
      }
      break;
  }
};
