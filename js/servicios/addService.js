const formService = document.forms.formAddService;
const nameInput = formService.elements.nombre;
const balanceInput = formService.elements.monto;
const expirationDate = formService.elements.vencimiento;
const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
  goToPage(services);
});
formService.addEventListener("submit", (e) => {
  e.preventDefault();
  validationSercice(nameInput, balanceInput, expirationDate);
});

const validationSercice = (serviceName, balance, expiration) => {
  const activeUser = getLocal("activeUser");
  if (!validateServiceAll(activeUser, serviceName, balance, expiration)) {
    expirationError(expiration);
    serviceNameLenghtError(serviceName);
    balanceLenghtError(balance);
    serviceAlreadyExist(activeUser, serviceName);
    return;
  } else {
    validationServices(serviceName, balance, expiration);
    const objService = {
      service: capitaliceStr(serviceName.value),
      balance: Number(balance.value),
      expiration: expiration.value.split("-").reverse().join("-"),
      paid: false,
    };
    activeUser.services.push(objService);
    updateLocal("activeUser", activeUser);
    updateChangesUser();
    setTimeout(() => location.reload(), 200);
  }
};
const validationServices = (serviceName, balance, expiration) => {
  const inputs = [serviceName, balance, expiration];
  const datas = ["name", "monto", "date"];
  inputs.forEach((input) => {
    datas.forEach((data) => {
      validateInput(input, data);
    });
  });
};
const validateServiceAll = (activeUser, serviceName, balance, expiration) =>
  serviceNameLenght(serviceName) &&
  balanceLenght(balance) &&
  expirationTest(expiration) &&
  serviceExist(activeUser, serviceName);
const serviceNameLenght = (serviceName) =>
  serviceName.value !== "" && serviceName.value.length < 20;
const balanceLenght = (balance) =>
  balance.value !== "" && Number(balance.value) !== 0;

const expirationTest = (expiration) => expiration.value !== "";
const expirationError = (expiration) => {
  expiration.value !== ""
    ? validateInput(expiration, findData(expiration))
    : inputError(expiration, "Completa el campo", findData(expiration));
};
const balanceLenghtError = (balance) => {
  balance.value === ""
    ? inputError(balance, "Completa el campo", findData(balance))
    : Number(balance.value) === 0
    ? inputError(balance, "Ingresa monto a pagar", findData(balance))
    : validateInput(balance, findData(balance));
};
const serviceAlreadyExist = (activeUser, serviceName) => {
  if (
    activeUser.services.some(
      (servicio) =>
        servicio.service.toLowerCase() === serviceName.value.toLowerCase()
    ) &&
    serviceName.value !== ""
  ) {
    return inputError(
      serviceName,
      "Este servicio ya existe",
      findData(serviceName)
    );
  }
};
const serviceExist = (activeUser, serviceName) => {
  return activeUser.services.every(
    (servi) => servi.service.toLowerCase() !== serviceName.value.toLowerCase()
  );
};
const serviceNameLenghtError = (serviceName) => {
  if (serviceName.value === "") {
    return inputError(serviceName, "Completa el campo", findData(serviceName));
  } else if (serviceName.value.length > 20) {
    return inputError(
      serviceName,
      "el servicio no puede tener más de 20 caracteres",
      findData(serviceName)
    );
  } else {
    validateInput(serviceName, findData(serviceName));
  }
};
