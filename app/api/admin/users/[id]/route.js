import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

// MongoDB connection
const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

let client;
let db;

async function connectToDatabase() {
  if (client) {
    return db;
  }
  
  try {
    client = new MongoClient(mongoUrl, {
      serverApi: ServerApiVersion.v1,
    });
    
    await client.connect();
    db = client.db('passportpulse');
    console.log('Database connected successfully');
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { role } = body;
    
    console.log('PUT request received for user role update:', { userId: id, role });
    
    // Connect to database
    const database = await connectToDatabase();
    const usersCollection = database.collection('users');
    
    // Update user role
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          role: role,
          updatedAt: new Date()
        }
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    console.log('Database: User role updated successfully:', {
      userId: id,
      newRole: role,
      updatedAt: new Date()
    });
    
    // Get updated user
    const updatedUser = await usersCollection.findOne({ _id: new ObjectId(id) });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'User role updated successfully',
        data: updatedUser
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Database role update error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update user role',
        error: error.message
      },
      { status: 500 }
    );
  }
}
