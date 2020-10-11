var express=require("express")

let mysql = require('mysql');
let connection = mysql.createConnection({
     host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

// connect to the MySQL server
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    let createTodos = `create table if not exists todos(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          completed varchar(1) not null default 0
                      )`;

    connection.query(createTodos, function (err, results, fields) {
        if (err) {
            console.log(err.message);
        }
    });

    connection.end(function (err) {
        if (err) {
            return console.log(err.message);
        }
    });
});




var app=express()


app.get("/",(req,res,next)=>{
    res.send({
        message:"You Are Very Lucy"
    })
})












const PORT=process.env.PORT||4001
app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`)

})