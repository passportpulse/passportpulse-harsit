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
    const { email, password } = body;
    
    // Connect to database
    const database = await connectToDatabase();
    
    if (!database) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      );
    }
    
    const usersCollection = database.collection('users');
    
    if (!usersCollection) {
      return NextResponse.json(
        { success: false, message: 'Users collection not found' },
        { status: 500 }
      );
    }
    
    // Find user by email
    const user = await usersCollection.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Check password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          ...userWithoutPassword,
          _id: user._id.toString()
        },
        accessToken: 'db_access_token_' + user._id.toString()
      }
    });
    
  } catch (error) {
    console.error('Auth DB Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Login failed',
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No token provided' },
        { status: 401 }
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
    
    if (!usersCollection) {
      return NextResponse.json(
        { success: false, message: 'Users collection not found' },
        { status: 500 }
      );
    }
    
    // Extract user ID from token
    const userId = token.replace('db_access_token_', '');
    
    // Find user by ID
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      success: true,
      message: 'User retrieved successfully',
      data: {
        ...userWithoutPassword,
        _id: user._id.toString()
      }
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to retrieve user',
        error: error.message
      },
      { status: 500 }
    );
  }
}
