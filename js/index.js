const formContainer = document.getElementById("formContainer");
document.addEventListener("DOMContentLoaded", () => {
  // createForm(formRegisterInner);
  const formRegister = document.forms.formRegister;
  const already = document.getElementById("already");

  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
  });
  formRegister.addEventListener("keydown", (e) => {
    validationRegister(e);
  });
  already.addEventListener("click", () => {
    window.location.href = "/html/login/login.html";
  });
});
