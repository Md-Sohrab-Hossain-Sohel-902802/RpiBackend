let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Rpi'
});

// connect to the MySQL server
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    let createUserTable = `create table if not exists users(
                          id int primary key auto_increment,
                          name varchar(255)not null,
                          institutename varchar(255)not null,
                          image varchar(255)not null,
                          gender varchar(255)not null,
                          usertype varchar(255)not null,
                          password varchar(255)not null,
                          email varchar(255)not null,
                          phone varchar(255)not null
                         
                      )`;

    connection.query(createUserTable, function (err, results, fields) {
        if (err) {
            console.log(err.message);
        }
        else{
            console.log("Database Connected")
        }
    });
});








loginAdmin = (req, res, next) => {
    let { email, password,usertype} = req.body
        if (email && password) {

            let SQL = `SELECT * FROM users WHERE email = \'${email}\' AND usertype=\'${usertype}\'`
      
            connection.query(SQL, function (error, user, fields) {
              if (user.length > 0) {

                    if(password!=user[0].password){
                         res.json({
                                message: "Password Doesn\'t Match",
                                "result": "p"
                            })
                        }
                        else {
                        res.json({
                            message: "Login Successfull",
                              user
                        })
                        }

                } else {
                    res.json({ message: 'Incorrect Email', result: "e" })
                }
            })

        }
}


module.exports={
    loginAdmin
}