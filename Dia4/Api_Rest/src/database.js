let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sil_delabarrera:Atl4sdb0723.@silbc.g7pamq1.mongodb.net/', 
                 {useNewUrlParser: true, 
                  useUnifiedTopology: true } )
.then((db)=> {
    console.log("database connected on " + db.connection.host)
}) 
.catch((error) => {
    console.log(error)
})