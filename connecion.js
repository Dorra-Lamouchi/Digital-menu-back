var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'digital_menu'
});
module.exports=connection;