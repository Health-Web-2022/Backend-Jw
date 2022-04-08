"use strict";

const email = document.querySelector("#email"),
    psword = document.querySelector("#password"),
    passwordCheck = document.querySelector("#passwordCheck"),
    name = document.querySelector("#name"),
    people = document.querySelector("#type_people"),
    teacher = document.querySelector("#type_teacher"),
    registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
    if (!email.value) return alert("email 입력");
    if (psword.value !== passwordCheck.value) return alert ("비밀번호 일치 안함");

    const req = { 
        email: email.value,
        psword: psword.value,
        name: name.value,
        people: people.value,
        teacher: teacher.value,
        registerBtn: registerBtn.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        }  else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}