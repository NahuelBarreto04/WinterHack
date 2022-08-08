const desvinContainer = document.querySelector(".comprobantecontainer");

const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(services);
});

document.addEventListener("DOMContentLoaded", () => {
  createComprobant();
});

const createComprobant = () => {
  const activeUser = getLocal("activeUser");
  activeUser.services.forEach((element) => {
    if (element.paid === true) {
      const div = document.createElement("div");
      div.innerHTML = comprobanteInner(
        element.service,
        element.balance,
        element.datePay
      );
      div.classList.add("comprobante");
      desvinContainer.appendChild(div);
    }
    console.log(element.datePay);
  });
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteService(e);
    });
  });
};
