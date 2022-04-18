var body = document.querySelector("body"),
    modal = document.querySelector(".write-us"),
    btnShow = document.querySelector(".adress-btn"),
    btnClose = modal.querySelector(".modal-close-btn"),
    form = modal.querySelector("form"),
    usrName = form.querySelector("[name=usr-name"),
    email = form.querySelector("[name=email]"),
    textarea = form.querySelector("textarea"),
    isStorageSupport = !0,
    emailStorage = "",
    nameStorage = "";
try { emailStorage = localStorage.getItem("email"), nameStorage = localStorage.getItem("usrName") } catch (e) { console.log("Хранилище не поддерживается("), isStorageSupport = !1 }
btnShow.addEventListener("click", function() { console.log("Показать форму"), modal.classList.add("modal-show"), nameStorage && emailStorage ? (usrName.value = nameStorage, email.value = emailStorage, textarea.focus(), console.log("Оба присутствуют")) : usrName.focus() }), btnClose.addEventListener("click", function() { console.log("Убрать форму"), modal.classList.remove("modal-show") }), window.addEventListener("keydown", function(e) { 27 === e.keyCode && modal.classList.contains("modal-show") && (e.preventDefault(), modal.classList.remove("modal-show"), console.log("esc")) }), form.addEventListener("submit", function(e) { email.value && usrName.value ? isStorageSupport && (localStorage.setItem("email", email.value), localStorage.setItem("usrName", usrName.value)) : (e.preventDefault(), console.log("Введите пожайлуста логин и пароль")) });