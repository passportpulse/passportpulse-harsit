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

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, interested_in, message, status, priority } = body;
    
    // Connect to database
    const database = await connectToDatabase();
    const queriesCollection = database.collection('queries');
    
    // Create new query entry
    const newQuery = {
      name: name?.trim() || '',
      email: email?.trim().toLowerCase() || '',
      subject: '',
      message: message?.trim() || '',
      interested_in: interested_in?.trim() || '',
      priority: priority || 'medium',
      status: status || 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Store query in database
    const result = await queriesCollection.insertOne(newQuery);
    

    
    // Return with database ID
    const responseData = {
      ...newQuery,
      id: result.insertedId.toString(),
      _id: result.insertedId.toString()
    };
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Query added successfully to database',
        data: responseData
      },
      { status: 201 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to add query to database',
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    
    // Connect to database
    const database = await connectToDatabase();
    const queriesCollection = database.collection('queries');
    
    
    // Fetch all queries from database
    const queries = await queriesCollection.find({}).sort({ createdAt: -1 }).toArray();
    
    
    // Convert ObjectId to string for JSON serialization
    const formattedQueries = queries.map(query => ({
      ...query,
      id: query._id.toString(),
      _id: query._id.toString()
    }));
    
    // Calculate stats
    const stats = {
      pending: formattedQueries.filter(q => q.status === 'pending').length,
      inProgress: formattedQueries.filter(q => q.status === 'inProgress').length,
      resolved: formattedQueries.filter(q => q.status === 'resolved').length,
      closed: formattedQueries.filter(q => q.status === 'closed').length,
      high: formattedQueries.filter(q => q.priority === 'high').length,
      medium: formattedQueries.filter(q => q.priority === 'medium').length,
      low: formattedQueries.filter(q => q.priority === 'low').length
    };
    
    const response = {
      success: true,
      message: 'Queries retrieved successfully from database',
      data: formattedQueries,
      total: formattedQueries.length,
      stats
    };
    
    
    return NextResponse.json(response);
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch queries from database',
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status, priority } = body;
    
    // Connect to database
    const database = await connectToDatabase();
    const queriesCollection = database.collection('queries');
    
    // Update query in database
    const result = await queriesCollection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status: status || 'pending',
          priority: priority || 'medium',
          updatedAt: new Date()
        }
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Query not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Query updated successfully in database'
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update query in database',
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // Connect to database
    const database = await connectToDatabase();
    const queriesCollection = database.collection('queries');
    
    // Try with ObjectId first, then with string
    let result;
    try {
      const objectId = new ObjectId(id);
      result = await queriesCollection.deleteOne({ _id: objectId });
    } catch (objectIdError) {
      // If ObjectId fails, try with string ID
      result = await queriesCollection.deleteOne({ id: id });
    }
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Query not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Query deleted successfully from database'
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete query from database',
        error: error.message
      },
      { status: 500 }
    );
  }
}
