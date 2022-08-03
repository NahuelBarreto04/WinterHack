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
      <form name="formCuentaTerceros" class="form__inputs-container">
          <label class="form__label" for="registerName"><i class="fa-solid fa-hexagon-xmark"></i>CBU*</label>
          <input class="form__input" type="text" data-input="cbu" name="" id="">
          <span class="input__span-error" data-input="name"></span>
          <label class="form__label" for="surname">Monto*:</label>
          <input class="form__input" type="text" data-input="surname" name="registerSurname" id="surname">
          <span class="input__span-error" data-input="surname"></span>
          <label class="form__label" for="registerUser">Motivo:</label>
          <select name="" id="formSelect" class="form__input">
              <option value="Estudios">Estudios</option>
              <option value="Alquiler">Alquiler</option>
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
  <form name="formCuentaPropia" class="form__inputs-container">
      <label class="form__label" for="userCbu"><i class="fa-solid fa-hexagon-xmark"></i>CBU</label>
      <input class="form__input" type="text" data-input="cbu" name="userCbu" id="userCbu" readonly>
      <span class="input__span-error" data-input="cbu"></span>
      <label class="form__label" for="userBalance">Monto*:</label>
      <input class="form__input" type="text" data-input="balance" name="userBalance" id="userBalance">
      <span class="input__span-error" data-input="balance"></span>
      <label class="form__label" for="userMotive">Motivo:</label>
      <select name="userMotive" id="userMotive" class="form__input">
          <option value="asdadassad">asdas</option>
          <option value="asdadassad">asdaasdsdas</option>
      </select>
      <span class="input__span-error" data-input="user"></span>
      <button class="btn" type="submit">Depositar</button>
  </form>
</div>`;
};
