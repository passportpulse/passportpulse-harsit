const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function testQuery() {
  const client = new MongoClient(mongoUrl, {
    serverApi: ServerApiVersion.v1,
  });
  
  try {
    await client.connect();
    const db = client.db('passportpulse');
    const queriesCollection = db.collection('queries');
    
    // Get all queries
    const queries = await queriesCollection.find({}).toArray();
    console.log('Total queries:', queries.length);
    
    if (queries.length > 0) {
      const firstQuery = queries[0];
      console.log('First query ID:', firstQuery._id);
      console.log('First query ID type:', typeof firstQuery._id);
      console.log('First query ID toString():', firstQuery._id.toString());
      
      // Try to update by ObjectId
      const result = await queriesCollection.updateOne(
        { _id: firstQuery._id },
        { $set: { status: 'ACTIVE', updatedAt: new Date() } }
      );
      console.log('Update result:', result);
      
      // Get updated query
      const updatedQuery = await queriesCollection.findOne({ _id: firstQuery._id });
      console.log('Updated query status:', updatedQuery.status);
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

testQuery();
