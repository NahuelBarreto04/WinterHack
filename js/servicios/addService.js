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

  //   console.log(expiration.value.split("-").reverse().join("-"));
  //   serviceNameLenghtError(serviceName);
  //   console.log(serviceNameLenght(serviceName));
  //   balanceLenghtError(balance);
  //   expirationError(expiration);
  //   serviceNameLenghtError(serviceName);
  //   console.log(serviceNameLenghtError(serviceName));
  //   console.log(balanceLenght(balance));
  //   console.log(expirationTest);
  //   console.log(expiration.value !== "");
  console.log(serviceExist(activeUser, serviceName));
  if (!validateServiceAll(activeUser, serviceName, balance, expiration)) {
    serviceAlreadyExist(activeUser, serviceName);
    serviceNameLenghtError(serviceName);
    balanceLenghtError(balance);
    expirationError(expiration);
    return;
  } else {
    validationServiceAll(serviceName, balance, expiration);
    console.log("valid");
    const objService = {
      service: capitaliceStr(serviceName.value),
      balance: balance.value,
      expiration: expiration.value.split("-").reverse().join("-"),
      paid: false,
    };
    activeUser.services.push(objService);
    updateLocal("activeUser", activeUser);
    setTimeout(() => location.reload(), 200);
  }
};
const validationServiceAll = (serviceName, balance, expiration) => {
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
    !activeUser.services.some(
      (service) => service.name !== serviceName.value.trim()
    )
  ) {
    inputError(serviceName, "Este servicio ya existe", findData(serviceName));
  } else {
    validateInput(serviceName, findData(serviceName));
  }
};
const serviceExist = (activeUser, serviceName) => {
  if (activeUser.services.length === 0) {
    return;
  }
  activeUser.services.some(
    (servicio) => servicio.service !== serviceName.value.trim()
  );
};

const serviceNameLenghtError = (serviceName) => {
  serviceName.value === ""
    ? inputError(serviceName, "Completa el campo", findData(serviceName))
    : serviceName.value.length > 20
    ? inputError(
        serviceName,
        "el servicio no puede tener más de 20 caracteres",
        findData(serviceName)
      )
    : validateInput(serviceName, findData(serviceName));
};
