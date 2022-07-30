const formContainer = document.getElementById("formContainer");
const formLogin = document.forms.formLogin;
const userLogin = formLogin.elements.loginUser;
const passLogin = formLogin.elements.loginPass;
console.log(userLogin, passLogin);
const noAccBtn = document.getElementById("noAccount");
noAccBtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  checkLoginUser(userLogin, passLogin);
  emptyErrorLogin(userLogin, passLogin);
});
const checkLoginUser = (userInput, passInput) => {
  const userFind = users.find((user) => user.user === userInput.value);
  if (!userFind) {
    inputError(
      userInput,
      "El usuario ingresado no existe",
      findData(userInput)
    );
    inputError(
      passInput,
      "Asegurece del que el usuario esté bien",
      findData(passInput)
    );
    return;
  } else {
    validateInput(userInput, findData(userInput));
  }
  if (userFind.password === passInput.value) {
    validateInput(passInput, findData(passInput));
    setTimeout(() => (window.location.href = "/html/home/home.html"), 1000);
  } else {
    inputError(passInput, "Contraseña invalida", findData(passInput));
  }
};

const emptyErrorLogin = (user, pass) => {
  if (user.value === "") {
    inputError(user, "Complete el campo", findData(user));
  }
  if (pass.value === "") {
    inputError(pass, "Complete el campo", findData(pass));
  }
};
