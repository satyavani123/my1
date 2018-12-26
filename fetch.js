var conn=require("../config/db_connection");
var connection=conn.getConnection();
connection.connect();
var express=require("express");

var router=expess.Router();
router.get("/",function(req,res){
    connection.query("select",function(err,recordsArray,fields){
        if(err){
            console.log("error while fetching the data");
        }else{
            res.send(recordsArray);
        }
    });
});
module.exports=router;