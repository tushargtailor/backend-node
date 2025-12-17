const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://tusharNode:sLek161ZZl3YC5MS@tusharnode.ym8lebh.mongodb.net/";

const client = new MongoClient(url);

const dbName = "FirstDB";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const data = {
    firstName: "Mohit",
    lastName: "Tailor",
    city: "Silvassa",
    phnNo: "0123456789",
  };

  const res = await collection.findOneAndUpdate({firstName: "Mohit"}, { $set: {firstName: "Jack"}});
  console.log(res)
//   const insertResult = await collection.insertMany([data]);
//   console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
