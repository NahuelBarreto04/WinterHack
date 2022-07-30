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
