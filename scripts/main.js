var form = document.getElementById("myForm");

function registerValidate() {

    var acumErrores = 0;

    form.classList.remove = ("is-invalid");

    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    var password_confirm = document.getElementById("password_confirm");



    if (usuario.value == "") {
        usuario.classList.add("is-invalid");
        document.getElementById("usuario_error").textContent = "El usuario es obligatorio";
        acumErrores++;

    }
    if (password.value == "") {
        password.classList.add("is-invalid");
        document.getElementById("password_error").textContent = "El campo es obligatorio";
        acumErrores++;

    } else if (password.value.length < 6) {
        password.classList.add("is-invalid");
        document.getElementById("password_error").textContent = "El campo necesita 6 caracteres";
        acumErrores++;

    }
    if (password_confirm.value == "") {
        password_confirm.classList.add("is-invalid");
        document.getElementById("password_confirm_error").textContent = "El campo es obligartorio";
        acumErrores++;

    } else if (password_confirm.value !== password.value) {
        password_confirm.classList.add("is-invalid");
        document.getElementById("password_confirm_error").textContent = "los campos contrasenya tienen que coincidir";
        acumErrores++;

    }


    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }



}

form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
        //registerValidate();

    }

}, true);