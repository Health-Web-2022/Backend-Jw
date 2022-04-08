"use strict";

const db = require("../config/db");

class UserStorage {

    //디비접근후 로그인기능
    static getUserInfo(email) {
        //성공 시 reslove, 실패 시 reject
        //Promise 시간이 오래 걸릴때
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users2 WHERE email = ?;";
            db.query(query, [email], (err, data) => {
                if (err) reject(`${err}`);
                resolve (data[0]);
            });
        });
    }


    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users2(email, name, psword) VALUES (?, ?, ?);";
            db.query(
                query, 
                [userInfo.email, userInfo.name, userInfo.psword], 
                (err) => {
                if (err) reject(`${err}`);
                resolve ({ success: true });
            });
        });
    }

}

module.exports = UserStorage; 