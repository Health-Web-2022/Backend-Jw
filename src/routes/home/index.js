"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

//router를 app.js에서 사용할 수 있도록 외부로 보낸다.
module.exports = router;