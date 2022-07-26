const formContainer = document.getElementById("formContainer");
document.addEventListener("DOMContentLoaded", () => {
  createForm(formLoginInner);
  const noAccBtn = document.getElementById("noAccount");
  console.log("asd");
  noAccBtn.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
});
