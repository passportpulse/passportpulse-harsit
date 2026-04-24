import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

// MongoDB connection
const mongoUrl = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

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
    return db;
  } catch (error) {
    throw error;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;
    
    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }
    
    // Connect to database
    const database = await connectToDatabase();
    
    if (!database) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      );
    }
    
    const usersCollection = database.collection('users');
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create new user
    const newUser = {
      name: name?.trim() || '',
      email: email?.trim().toLowerCase() || '',
      password: hashedPassword,
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Store user in database
    const result = await usersCollection.insertOne(newUser);
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;
    
    // Return with database ID
    const responseData = {
      ...userWithoutPassword,
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
    console.error('Registration Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to register user',
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
