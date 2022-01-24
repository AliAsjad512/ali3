const express = require("express");
const app = express();
const cors = require("cors");

const pool =require("./db");

app.use(express.json());
app.use(cors());



//Create all data

app.post("/to" , async(req,res) => {

    try{
        const{typesub,plan,currentdate,duedate}=(req.body);
       //  const{plan}=(req.body);
       //  const{duedate}=(req.body);
      // console.log(req.body);
      const newTodo=await pool.query("INSERT INTO sub (typesub,plan,currentdate,duedate) VALUES($1,$2,$3,$4) RETURNING *",
        [typesub,plan,currentdate,duedate]);

    res.json(newTodo.rows[0]);
 } catch(err){
        console.log(err.message);
    }

});





//Get all data


app.get("/to" , async(req,res) => {

    try{
        
       //  const{plan}=(req.body);
       //  const{duedate}=(req.body);
      // console.log(req.body);
       const allTodos=await pool.query("SELECT * FROM sub");

    res.json(allTodos.rows);
 } catch(err){
        console.log(err.message);
    }

});

app.get("/to/: id", async(req,res) => {

    try{
        
       //  const{plan}=(req.body);
       //  const{duedate}=(req.body);
      // console.log(req.body);
       const allTodos=await pool.query("SELECT * FROM sub");

    res.json(allTodos.rows);
 } catch(err){
        console.log(err.message);
    }

});

 // Get specific Data

 app.get("/to/:id", async(req,res) => {

    try{

        const {id} =req.params;
        const todo = await pool.query("SELECT * FROM sub WHERE sub_id = $1",[id]);
        res.json(todo.rows[0]);

    }catch (err){
        console.error(err.message)
    }


});
  

// update 


app.put("/to/:id", async(req,res) => {

    try{

        const {id} = req .params;
        const { typesub,plan,currentdate,duedate } =req.body;
        const update = await pool.query("UPDATE sub SET typesub= $1,plan=$2,currentdate=$3,duedate=$4 WHERE sub_id =$5 ",[typesub,plan,currentdate,duedate,id ] );
        res.json("Data has been updated");

    }catch (err){
        console.error(err.message)
    }


});


app.delete("/to/:id", async(req,res) => {

    try{

        const {id} = req .params;
        const {typesub,plan,currentdate,duedate  } =req.body;
        const deleteTodo = await pool.query("DELETE FROM sub WHERE sub_id =$1 ",[id ] );
        res.json("Data  was deleted");

    }catch (err){
        console.error(err.message)
    }


});
















app.listen(5000, () => {

    console.log("server has started on port 5000");
});

