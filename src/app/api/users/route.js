import clientPromise from "@/app/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('NNH');
    const collection = db.collection('users');


    const data = await collection.find({}).toArray();
    console.log("RRR",data);
    

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
