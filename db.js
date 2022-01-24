const Pool = require("pg").Pool;

const pool =new Pool(
{
    user :"postgres",
    password: "Khushab#123",
    host :"localhost",
    port :5432,
    database :"subcription"
}

)
module.exports=pool;