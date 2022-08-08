const boletasConteiner = document.querySelector(".containerboletas");
document.addEventListener("DOMContentLoaded", () => {
  createCards();
});
const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(services);
});

const spanIn = (expiration) => {
  if (checkExpire(expiration)) {
    return ` <span id="vencimiento" data-expire="expired"></span>`;
  } else {
    return ` <span id="vencimiento" data-expire="notExpired"></span>`;
  }
};
const checkExpire = (expiration) => {
  let date = new Date();
  let actualMonth = date.getMonth() + 1;
  let actualDay = date.getDate();
  let actualYear = date.getFullYear();
  let expirationDate = expiration.split("-");
  let expirationDay = Number(expirationDate[0]);
  let expirationMonth = Number(expirationDate[1]);
  let expirationYear = Number(expirationDate[2]);
  console.log(expirationMonth, actualMonth);
  if (actualYear > expirationYear) {
    return true;
  }
  if (actualMonth >= expirationMonth && actualDay >= expirationDay) {
    return true;
  } else {
    return false;
  }
};

const spanStyle = (expired, noExpired) => {
  expired.forEach((element) => {
    element.innerHTML = "vencido";
    element.classList.add("red-span");
  });
  noExpired.forEach((element) => {
    element.innerHTML = "Al día";
    element.classList.add("green-span");
  });
};

const payService = ({ target }) => {
  const activeUser = getLocal("activeUser");
  const parent = target.parentNode;
  const firtsElement = parent.firstElementChild;
  const nameService = firtsElement.innerHTML;
  const findService = activeUser.services.find(
    (servi) => servi.service === nameService
  );
  if (findService.balance > activeUser.balance) {
    createAlert("Fondos Insuficientes", boletasConteiner);
  } else {
    findService.paid = true;
    findService.datePay = getDayPay();
    activeUser.services = activeUser.services.filter(
      (servi) => servi.service !== nameService
    );
    activeUser.services = [...activeUser.services, findService];
    activeUser.balance -= findService.balance;
    updateLocal("activeUser", activeUser);
    createAlert("Servicio Pagado", boletasConteiner);
    setTimeout(() => {
      boletasConteiner.innerHTML = "";
      createCards();
    }, 1000);
    updateChangesUser();
  }
};

const createCards = () => {
  const activeUser = getLocal("activeUser");
  if (activeUser.services.length > 0) {
    activeUser.services.forEach((element) => {
      if (element.paid === false) {
        const div = document.createElement("div");
        div.innerHTML = boletaInner(
          element.service,
          element.balance,
          element.expiration
        );
        div.classList.add("boleta");
        boletasConteiner.appendChild(div);
        checkExpire(element.expiration);
        const vencimiento = document.querySelectorAll(
          `[data-expire="expired"]`
        );
        const noExpired = document.querySelectorAll(
          `[data-expire="notExpired"]`
        );
        spanStyle(vencimiento, noExpired);
      }
    });
  }
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      payService(e);
    });
  });
};

const getDayPay = () => {
  let date = new Date();
  let actualMonth = date.getMonth() + 1;
  let actualDay = date.getDate();
  let actualYear = date.getFullYear();
  return [actualDay, actualMonth, actualYear].join("/");
};
