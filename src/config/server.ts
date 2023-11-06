import mysql from "mysql2"

export const user = mysql.createConnection({
  host: "localhost",
  user: "vidora",
  password: "Vidora.12345"
});

user.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
