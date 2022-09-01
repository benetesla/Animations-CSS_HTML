function resete() {
    document.getElementById("form").reset();
}
//metodo submit
function enviar() {
    document.getElementById("form").submit();
}
//focus
function focus() {
    document.getElementById("nome").focus();
}
//blur
function blur() {
    document.getElementById("nome").blur();
}
//eventos onloada page 
function onload() {
    alert("Página carregada");
}
//validar senha com regex
function validarSenha() {
    var senha = document.getElementById("senha").value;
    var regex = /^[a-zA-Z0-9]{6,}$/;
    if (regex.test(senha)) {
        alert("Senha válida");
    } else {
        alert("Senha inválida");
    }
}
//validar email com regex
function validarEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(email)) {
        alert("Email válido");
    } else {
        alert("Email inválido");
    }
}