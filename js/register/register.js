const allInputsValid = (name, surname, user, pass) =>
  noEmpty(name, surname, user, pass) &&
  allLengthValid(name, surname, user, pass) &&
  nameDifSurname(name, surname) &&
  !alreadyUser(user);
const noEmpty = (name, surname, user, pass) =>
  name.value !== "" &&
  surname.value !== "" &&
  user.value !== "" &&
  pass.value !== "";
const allLengthValid = (name, surname, user, pass) =>
  inputLength(name, 4, 30) &&
  inputLength(surname, 4, 30) &&
  inputLength(user, 4, 12) &&
  inputLength(pass, 8, 30);

const inputLength = (input, min, max) =>
  input.value.length >= min && input.value.length < max;
const nameDifSurname = (name, surname) =>
  name.value.toLowerCase() !== surname.value.toLowerCase();
const alreadyUser = (userInput) => {
  return users.some((user) => user.user === userInput.value);
};
const nameDifSurnameError = (name, surname) => {
  if (!nameDifSurname(name, surname)) {
    inputError(
      surname,
      "El apellido y el nombre no pueden ser iguales",
      findData(surname)
    );
    inputError(
      name,
      "El apellido y el nombre no pueden ser iguales",
      findData(name)
    );
  } else {
    return;
  }
};
const emptyError = (name, surname, user, pass) => {
  const validateEmpty = (input) => {
    if (input.value === "") {
      inputError(input, "Complete el campo", findData(input));
    }
  };
  validateEmpty(name);
  validateEmpty(surname);
  validateEmpty(user);
  validateEmpty(pass);
};
const lengthError = (name, surname, user, pass) => {
  const higherMin = (input, mensagge, min, data) => {
    // console.log(input.value.length);
    if (!(input.value.length >= min)) {
      return inputError(input, mensagge, data);
    } else {
      return validateInput(input, data);
    }
  };
  const minorMax = (input, mensagge, max, data) => {
    if (!(input.value.length <= max)) {
      return inputError(input, mensagge, data);
    }
  };
  higherMin(
    name,
    "El nombre debe tener minimo 4 caracteres",
    4,
    findData(name)
  );
  higherMin(
    surname,
    "El nombre debe tener minimo 4 caracteres",
    4,
    findData(surname)
  );
  higherMin(
    user,
    "El nombre debe tener minimo 4 caracteres",
    4,
    findData(user)
  );
  higherMin(
    pass,
    "La contraseña debe tener minimo 8 caracteres",
    8,
    findData(pass)
  );
  minorMax(
    name,
    "El nombre debe tener menos 30 caracteres",
    30,
    findData(name)
  );
  minorMax(
    surname,
    "El nombre debe tener menos 30 caracteres",
    30,
    findData(surname)
  );
  minorMax(
    user,
    "El nombre debe tener menos 12 caracteres",
    12,
    findData(user)
  );
  minorMax(
    pass,
    "La contraseña debe tener menos 30 caracteres",
    30,
    findData(pass)
  );
};

const validateInput = (input, data) => {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = "";
  input.classList.remove("form__error-validationInput");
  input.classList.add("form__validate");
};

const validationAll = (name, surname, user, pass) => {
  const inputs = [name, surname, user, pass];
  const datas = ["name", "surname", "user", "password"];
  inputs.forEach((input) => {
    datas.forEach((data) => {
      validateInput(input, data);
    });
  });
};
const validation = (name, surname, user, pass) => {
  console.log(alreadyUser(user));
  if (!allInputsValid(name, surname, user, pass)) {
    lengthError(name, surname, user, pass);
    nameDifSurnameError(name, surname);
    emptyError(name, surname, user, pass);
    checkUser(user);
  } else {
    validationAll(name, surname, user, pass);
    const obj = {
      name: capitaliceStr(name.value),
      surname: capitaliceStr(surname.value),
      user: user.value,
      password: pass.value,
      cbu: createCbu(),
    };
    console.log("wtf", obj.cbu);
    // console.log("asddas");
    // updateLocal("users", obj);
    createUserAndLocal(obj);
  }
};
