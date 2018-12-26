var conn=require("../config/db_connection");
var connection=conn.getConnection();
connection.connect();
var express=require("express");
var router=express.Router();
router.post("/",function(req,res){

    connection.query("insert into products("+p_id+",'"+p_name+"',"+p_cost+")",function(err,res){
if(err){
    console.log("error while inserting the data");
}else{
    res.send({insert:"success"});
}
    });
});