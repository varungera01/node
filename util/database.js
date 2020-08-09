const  MongoClient  = require("mongodb").MongoClient;

// Connection URI
const uri =
  "mongodb+srv://varun__gera:Amroa@01@cluster0.e7oms.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, { useUnifiedTopology: true}).then(() => {
  console.log("Connected successfully to database");
}).catch((err) => {
  console.log(err);
  console.log("Connection failed to database");
});


