const adherir = "/html/servicios/adherirservicio.html";
const desvincular = "/html/servicios/desvincular.html";
const pagar = "/html/servicios/pagar.html";
const comprobantes = "/html/servicios/comprobantes.html";

const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(home);
});
const buttonsService = document.querySelectorAll(".btn");

buttonsService.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML.toLowerCase() === "adherir servicios") {
      return goToPage(adherir);
    } else if (btn.innerHTML.toLowerCase() === "desvincular servicios") {
      return goToPage(desvincular);
    } else if (btn.innerHTML.toLowerCase() === "pagar servicios") {
      return goToPage(pagar);
    } else {
      return goToPage(comprobantes);
    }
  });
});
