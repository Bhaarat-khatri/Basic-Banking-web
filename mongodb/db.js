const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URL ||"mongodb://localhost:27017/CustomerData",{useNewUrlParser : true ,  useUnifiedTopology: true  },(err)=>
{
    if(!err) 
    {console.log("u are connected with mongoose");}
    else 
    {console.log("u r failed"+err);}
});
