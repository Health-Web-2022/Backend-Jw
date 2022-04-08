"use strict";

//서버 가동하는 실행파일

const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
})