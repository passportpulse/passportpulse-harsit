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
    const { name, email, password } = body;
    
    // Connect to database
    const database = await connectToDatabase();
    const usersCollection = database.collection('users');
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 400 }
      );
    }
    
    // Create new user
    const newUser = {
      name: name?.trim() || '',
      email: email?.trim().toLowerCase() || '',
      password: password, // You should hash this in production
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Store user in database
    const result = await usersCollection.insertOne(newUser);
    
    console.log('Database: New user registered:', {
      id: result.insertedId,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    });
    
    // Return with database ID
    const responseData = {
      ...newUser,
      id: result.insertedId.toString(),
      _id: result.insertedId.toString()
    };
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'User registered successfully',
        data: responseData
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Database registration error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to register user',
        error: error.message
      },
      { status: 500 }
    );
  }
}
