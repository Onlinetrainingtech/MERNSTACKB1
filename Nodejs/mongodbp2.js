const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:admin@cluster0.ax16utm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('employee');
    const collection = db.collection('mycollection');
    var myobj=[{name:"azar3",age:33,email:"azar3@gmail.com",salary:2000},
    {name:"azar2",age:33,email:"azar2@gmail.com",salary:1000}];
    // Find the first document in the collection
    const first = await collection.insertMany(myobj);
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);