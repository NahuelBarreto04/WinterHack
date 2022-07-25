const formContainer = document.getElementById("formContainer");
const formRegister = document.forms.formRegister;
const inputName = formRegister.elements.registerName;
const inputSurname = formRegister.elements.registerSurname;
const inputUser = formRegister.elements.registerUser;
const inputPass = formRegister.elements.registerPass;
const already = document.getElementById("already");
document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    // validationRegister(e);
  });
  formRegister.addEventListener("keydown", (e) => {
    validationRegister(e);
    console.log("asd");
  });
  already.addEventListener("click", () => {
    createForm(formLoginInner);
  });
});
