"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
//환경변수 OS 상관없이 동일
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views"); 
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터 한글, 공백 등과 같은 문자가 포함될 경우 인식되지 않는 문제를 해결
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", home); //use -> 미들웨어를 등록해주는 메소드

module.exports = app;

