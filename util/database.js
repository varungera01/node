/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;



const mongoConnect = callback => {
MongoClient.connect('mongodb+srv://varun__gera:Amroha@01@cluster0.e7oms.mongodb.net/test?retryWrites=true&w=majority').
then(client=>
    {
         console.log('connected');
         callback(client);
    }).catch(err=>{
    console.log(err);
});
};

module.exports = mongoConnect;


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
*/
const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://varun__gera:Amroa@01@cluster0.e7oms.mongodb.net/test?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



