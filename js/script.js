var body = document.querySelector("body");

var modal = document.querySelector(".write-us");
var btnShow = document.querySelector(".adress-btn");
var btnClose = modal.querySelector(".modal-close-btn");

var form = modal.querySelector("form");
var usrName = form.querySelector("[name=usr-name");
var email = form.querySelector("[name=email]");
var textarea = form.querySelector("textarea");

var isStorageSupport = true;
var emailStorage = "";
var nameStorage = "";

try {
    emailStorage = localStorage.getItem("email");
    nameStorage = localStorage.getItem("usrName");
} catch (err) {
    console.log("Хранилище не поддерживается(");
    isStorageSupport = false;
}


btnShow.addEventListener("click", function() {
    console.log("Показать форму");
    modal.classList.add("modal-show")
    if (nameStorage && emailStorage) {
        usrName.value = nameStorage;
        email.value = emailStorage;
        textarea.focus();
        console.log("Оба присутствуют");
    } else {
        usrName.focus();
    }
});

btnClose.addEventListener("click", function() {
    console.log("Убрать форму");
    modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal-show")) {
            evt.preventDefault();
            modal.classList.remove("modal-show");
            console.log("esc")
        }
    }
});

form.addEventListener("submit", function(evt) {
    if (!email.value || !usrName.value) {
        evt.preventDefault();
        console.log("Введите пожайлуста логин и пароль");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", email.value);
            localStorage.setItem("usrName", usrName.value);
        }
    }
});