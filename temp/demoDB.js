var mysql = require('mysql');

var con = mysql.createConnection({
    host: "45.227.112.141",
    user: "cleobilla",
    password: "MgQ5TGAFPfnIwNfH!",
    database: "cleobilla"	
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
    
