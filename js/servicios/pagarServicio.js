const boletasConteiner = document.querySelector(".containerboletas");
console.log(boletasConteiner);
document.addEventListener("DOMContentLoaded", () => {
  const activeUser = getLocal("activeUser");
  activeUser.services.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = boletaInner(
      element.service,
      element.balance,
      element.expiration
    );
    div.classList.add("boleta");
    boletasConteiner.appendChild(div);
    checkExpire(element.expiration);
    const vencimiento = document.querySelectorAll(`[data-expire="expired"]`);
    const noExpired = document.querySelectorAll(`[data-expire="notExpired"]`);
    spanStyle(vencimiento, noExpired);
  });
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      payService(e);
    });
  });
});

const spanIn = (expiration) => {
  if (checkExpire(expiration)) {
    return ` <span id="vencimiento" data-expire="expired">Al día</span>`;
  } else {
    return ` <span id="vencimiento" data-expire="notExpired">Al día</span>`;
  }
};
const checkExpire = (expiration) => {
  console.log(expiration);
  let date = new Date();
  let actualMonth = date.getMonth() + 1;
  let actualDay = date.getDate();
  let actualYear = date.getFullYear();
  let expirationDate = expiration.split("-");
  let expirationDay = Number(expirationDate[0]);
  let expirationMonth = Number(expirationDate[1]);
  let expirationYear = Number(expirationDate[2]);
  console.log(expirationYear);
  if (actualYear > expirationYear) {
    return true;
  }
  if (actualDay > expirationDay || actualMonth > expirationMonth) {
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
  const parent = target.parentNode;
  const firtsElement = parent.firstElementChild;
  const nameService = firtsElement.innerHTML;
  console.log(nameService);
  const activeUser = getLocal("activeUser");
  const finds = activeUser.services.find(
    (servi) => servi.service === nameService
  );
  console.log(finds);
};
