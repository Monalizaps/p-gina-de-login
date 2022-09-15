const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.textContent = "Hide";
        showBtn.style.color = "#3498db";
    } else {
        pass_field.type = "password";
        showBtn.textContent = "Show";
        showBtn.style.color = "#222";
    }
});

function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        // document.getElementById("msgEmail").innerHTML = "Email válido!";
    } else {
        document.getElementById("msgEmail").innerHTML = "Email inválido!"
        alert("Digite um email válido!");
    }
}