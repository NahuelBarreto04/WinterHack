const homeActiveText = document.getElementById("userActiveHome");
const leaveBtn = document.querySelector("#leaveBtn");
const buttonsHome = document.querySelectorAll(".home__btn");
document.addEventListener("DOMContentLoaded", () => {
  const activeUser = getLocal("activeUser");
  if (activeUser) {
    homeActiveText.innerHTML = activeUser.name;
  }
});
const exitSesion = () => {
  const questionExit = confirm("Estás seguro que quieres salir?");
  if (questionExit) {
    localStorage.removeItem("activeUser");
    setTimeout(() => (window.location.href = welcome), 500);
  }
};

leaveBtn.addEventListener("click", exitSesion);
buttonsHome.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    if (btn.innerHTML.toLowerCase() === "servicios") {
      window.location.href = services;
    }
  });
});
