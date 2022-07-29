const formContainer = document.getElementById("formContainer");
const formRegister = document.forms.formRegister;
const inputName = formRegister.elements.registerName;
const inputSurname = formRegister.elements.registerSurname;
const inputUser = formRegister.elements.registerUser;
const inputPass = formRegister.elements.registerPass;
document.addEventListener("DOMContentLoaded", () => {
  // createForm(formRegisterInner);
  const formRegister = document.forms.formRegister;
  const already = document.getElementById("already");

  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    validation(inputName, inputSurname, inputUser, inputPass);
  });
  already.addEventListener("click", () => {
    window.location.href = "/html/login/login.html";
  });
});
