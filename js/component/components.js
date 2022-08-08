const formRegisterInner = () => {
  return `  <span class="form__error-validation" id="spanError"></span>
    <form action="" name="formRegister" class="form__inputs-container">
        <label class="form__label" for="registerName">Nombre:</label>
        <input class="form__input" type="text" name="registerName" id="registerName">
        <label class="form__label" for="surname">Apellido:</label>
        <input class="form__input" type="text" name="registerSurname" id="surname">
        <label class="form__label" for="registerUser">Usuario:</label>
        <input class="form__input" type="text" name="registerUser" id="registerUser">
        <label class="form__label" for="registerPass">Contraseña:</label>
        <input class="form__input" type="password" name="registerPass" id="registerPass">
        <button class="btn" type="submit">Registrarse</button>
    </form>
    <button class="form__already" id="already">ya tengo cuenta<span class="form__already-span">,
            ingresar</span></button>`;
};

const formLoginInner = () => {
  return `   <span class="form__error-validation" id="spanError"></span>
    <form action="" name="formLogin" class="form__inputs-container">
        <label class="form__label" for="loginUser">Usuario:</label>
        <input class="form__input" type="text" name="loginUser" id="loginUser">
        <label class="form__label" for="loginPass">Contraseña:</label>
        <input class="form__input" type="password" name="loginPass" id="loginPass">
        <button class="btn" type="submit">Iniciar Sesión</button>
    </form>
    <button class="form__already" id="noAccount">no tengo cuenta<span class="form__already-span">, registrarme</span></button> 
   `;
};

const depositTerceroInner = () => {
  return `  
  <div class="form">
  <div class="form__close"><i class="fa-solid fa-xmark"></i></div>
      <form name="formCuentaTerceros" class="form__inputs-container">
      <label class="form__label" for="userCbu"><i class="fa-solid fa-hexagon-xmark"></i>CBU</label>
      <input class="form__input form__input--text-center" type="number" data-input="cbu" name="userCbu" id="userCbu">
      <span class="input__span-error" data-input="cbu"></span>
      <label class="form__label" for="userBalance">Monto*:</label>
      <input class="form__input" type="number" data-input="balance" step="0.01" name="userBalance" id="userBalance">
      <span class="input__span-error" data-input="balance"></span>
      <label class="form__label" for="userMotive">Motivo:</label>
          <select name="userMotive" id="userMotive" class="form__input">
           <option value="estudios">Estudios</option>
           <option selected value="alquiler">Alquiler</option>
           <option value="bienesServicios">Bienes y Servicios</option>
           <option value="prestamos">Prestamos</option>
           <option value="gastosPersonales">Gastos Personales</option>
        </select>
          <span class="input__span-error" data-input="user"></span>
          <button class="btn" type="submit">Depositar</button>
      </form>
  </div>
`;
};
const depositPropioInner = () => {
  return ` 
  <div class="form">
  <div class="form__close"><i class="fa-solid fa-xmark"></i></div>
  <form name="formCuentaPropia" class="form__inputs-container">
      <label class="form__label" for="userCbu"><i class="fa-solid fa-hexagon-xmark"></i>CBU*</label>
      <input class="form__input form__input--text-center" type="text" data-input="cbu" name="userCbu" id="userCbu" readonly>
      <span class="input__span-error" data-input="cbu"></span>
      <label class="form__label" for="userBalance">Monto*:</label>
      <input class="form__input" type="number" data-input="balance" step="0.01" name="userBalance" id="userBalance">
      <span class="input__span-error" data-input="balance"></span>
      <label class="form__label" for="userMotive">Motivo:</label>
      <select name="userMotive" id="userMotive" class="form__input">
          <option value="estudios">Estudios</option>
          <option selected value="alquiler">Alquiler</option>
          <option value="bienesServicios">Bienes y Servicios</option>
          <option value="prestamos">Prestamos</option>
          <option value="gastosPersonales">Gastos Personales</option>
      </select>
      <span class="input__span-error" data-input="user"></span>
      <button class="btn" type="submit">Depositar</button>
  </form>
</div>`;
};

const popUpBalanceInner = () => {
  return `<div class="consultas_card">
  <div class="close__popup"><i class="fa-solid fa-xmark"></i></div>

  <p class="card__text">Su saldo es: $<span id="balanceSpan"></span></p>`;
};
const popUpCbuInner = () => {
  return `<div class="consultas_card">
  <div class="close__popup"><i class="fa-solid fa-xmark"></i></div>

  <p class="card__text">Su CBU es: <span id="cbuSpan"></span></p>`;
};

const popUpSearchCbuInner = () => {
  return `  
  <form name="formSearchCbu" class="search__card">
  <div class="form__close" id="close_search"><i class="fa-solid fa-xmark"></i></div>
  <label class="form__label" for="userCbu"><i class="fa-solid fa-hexagon-xmark"></i>CBU:</label>
  <input class="form__input form__input--text-center" type="number" data-input="cbu" name="userCbu"
      id="userCbu">
  <span class="input__span-error" data-input="cbu"></span>
  <button class="btn" type="submit">Buscar</button>
</form>`;
};

const popUpSaveUserInner = () => {
  return `   <div class="form form--search">
  <div class="form__close" id="close_search2"><i class="fa-solid fa-xmark"></i></div>
  <form name="formSaveUser" class="form__inputs-container">
      <label class="form__label" for="userCbu"><i class="fa-solid fa-hexagon-xmark"></i>CBU</label>
      <input class="form__input form__input--text-center" type="number" data-input="cbu"
          name="userCbu" id="userCbu">
      <span class="input__span-error" data-input="cbu"></span>
      <div class="dataUser">
          <h2 class="dataUser__p">Propietario:
          </h2>
          <p class="dataUserName"></p>
      </div>
      <label class="form__label" for="userBalance">Nombre y Apellido*:</label>
      <input class="form__input" type="text" data-input="alias" name="userAlias"
          id="userBalance">
      <span class="input__span-error" data-input="alias"></span>
      <button class="btn" type="submit">Guardar</button>
  </form>
</div>
</div>`;
};

const boletaInner = (service, balance, expiration) => {
  return ` <span id="servicio" class="nombre">${service}</span>
  <span id="precio" class="precio"> $${balance}</span>
  <span id="fecha" class="vencimiento">Vencimiento ${expiration}</span>
  ${spanIn(expiration)}
  <button class="btn pagar-btn">Pagar</button>`;
};

const desvincularInner = (service, balance, expiration) => {
  return `<p class="titulo">${service}</p>
  <span class="precio">$${balance}</span>
  <span class="fecha">Fecha de vencimiento: ${expiration}</span>
  <button class="btn">Desvincular</button>`;
};

const comprobanteInner = (service, balance, payDay) => {
  return `<span class="titulo">${service}</span>
  <span class="precio">$${balance}</span>
  <span class="fecha">Fecha de pago: ${payDay}</span>`;
};
