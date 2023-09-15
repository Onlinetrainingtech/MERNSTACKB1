const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:admin@cluster0.ax16utm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('employee');
    const collection = db.collection('mycollection');
    
    //Update

    const cursorupdate=await collection.updateOne({"name":"azar1"},{"$set":{"name":"xyz"}});

    console.log(cursorupdate.modifiedCount);

    //Display 

    const cursorFind=collection.find();
    const data=await cursorFind.toArray();
    console.table(data);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);