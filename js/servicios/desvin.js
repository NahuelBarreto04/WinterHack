const desvinContainer = document.querySelector(".comprobantecontainer");
document.addEventListener("DOMContentLoaded", () => {
  createDesvin();
});
const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(services);
});

const deleteService = ({ target }) => {
  const activeUser = getLocal("activeUser");
  const parent = target.parentNode;
  const spanService = parent.firstElementChild.innerHTML;
  activeUser.services = activeUser.services.filter(
    (servi) => servi.service !== spanService
  );
  createAlert("Servicio Desvinculado", desvinContainer);
  updateLocal("activeUser", activeUser);
  updateChangesUser();
  setTimeout(() => {
    desvinContainer.innerHTML = "";
    createDesvin();
  }, 1000);
};

const createDesvin = () => {
  const activeUser = getLocal("activeUser");
  activeUser.services.forEach((element) => {
    if (element.paid === false) {
      const div = document.createElement("div");
      div.innerHTML = desvincularInner(
        element.service,
        element.balance,
        element.expiration
      );
      div.classList.add("comprobante");
      desvinContainer.appendChild(div);
    }
  });
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      deleteService(e);
    });
  });
};
