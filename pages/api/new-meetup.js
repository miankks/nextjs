// api/new-meetup
// POST api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.ethod === "POST") {
    const data = req.body;

    // send whole body object as we do not need to destructurize.
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://bilaljan:finished123@cluster0.cwszd.mongodb.net/nextjs?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
  }
}

export default handler;
