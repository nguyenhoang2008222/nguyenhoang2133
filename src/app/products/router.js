import clientPromise from "../lib/mongodb";




export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('users');
    const collection = db.collection('users');




    const data = await collection.find({}).toArray();




    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}


