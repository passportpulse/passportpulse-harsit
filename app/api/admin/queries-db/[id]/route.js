import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

// MongoDB connection
const mongoUrl = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

let client;
let db;

async function connectToDatabase() {
  if (client) {
    return db;
  }
  
  client = new MongoClient(mongoUrl, {
    serverApi: ServerApiVersion.v1,
  });
  
  await client.connect();
  db = client.db('passportpulse');
  return db;
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;
    
    console.log('PUT request received:', { queryId: id, status });
    
    // Validate status
    const validStatuses = ['pending', 'ACTIVE', 'CONNECTED', 'LOST', 'CONVERT'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }
    
    // Connect to database
    const database = await connectToDatabase();
    const queriesCollection = database.collection('queries');
    
    // First, let's see what queries exist
    const allQueries = await queriesCollection.find({}).toArray();
    console.log('Total queries in DB:', allQueries.length);
    console.log('First query ID:', allQueries[0]?._id);
    console.log('Looking for ID:', id);
    
    // Try with ObjectId first, then with string
    let result;
    try {
      const objectId = new ObjectId(id);
      console.log('Trying with ObjectId:', objectId);
      result = await queriesCollection.updateOne(
        { _id: objectId },
        { 
          $set: { 
            status: status,
            updatedAt: new Date()
          }
        }
      );
      console.log('ObjectId update result:', result);
    } catch (objectIdError) {
      console.log('ObjectId failed, trying with string ID:', objectIdError.message);
      // If ObjectId fails, try with string ID
      result = await queriesCollection.updateOne(
        { id: id },
        { 
          $set: { 
            status: status,
            updatedAt: new Date()
          }
        }
      );
      console.log('String ID update result:', result);
    }
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Query not found' },
        { status: 404 }
      );
    }
    
    console.log('Database: Query status updated:', {
      queryId: id,
      status: status,
      updatedAt: new Date()
    });
    
    // Get updated query
    let updatedQuery;
    try {
      updatedQuery = await queriesCollection.findOne({ _id: new ObjectId(id) });
    } catch (objectIdError) {
      updatedQuery = await queriesCollection.findOne({ id: id });
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Query status updated successfully',
        data: updatedQuery
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Database status update error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update query status',
        error: error.message
      },
      { status: 500 }
    );
  }
}
