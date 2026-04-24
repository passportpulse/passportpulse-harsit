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
    
    
    // Validate status
    const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'lost'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }
    
    // Connect to database
    const database = await connectToDatabase();
    const contactsCollection = database.collection('contacts');
    
    // First, let's see what contacts exist
    const allContacts = await contactsCollection.find({}).toArray();
   
    
    // Try with ObjectId first, then with string
    let result;
    try {
      const objectId = new ObjectId(id);
      result = await contactsCollection.updateOne(
        { _id: objectId },
        { 
          $set: { 
            status: status,
            updatedAt: new Date()
          }
        }
      );
    } catch (objectIdError) {
      // If ObjectId fails, try with string ID
      result = await contactsCollection.updateOne(
        { id: id },
        { 
          $set: { 
            status: status,
            updatedAt: new Date()
          }
        }
      );
    }
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    

    
    // Get updated contact
    let updatedContact;
    try {
      updatedContact = await contactsCollection.findOne({ _id: new ObjectId(id) });
    } catch (objectIdError) {
      updatedContact = await contactsCollection.findOne({ id: id });
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact status updated successfully',
        data: updatedContact
      },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update contact status',
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    
    // Connect to database
    const database = await connectToDatabase();
    const contactsCollection = database.collection('contacts');
    
    // Try with ObjectId first, then with string
    let result;
    try {
      const objectId = new ObjectId(id);
      result = await contactsCollection.deleteOne({ _id: objectId });
    } catch (objectIdError) {
      // If ObjectId fails, try with string ID
      result = await contactsCollection.deleteOne({ id: id });
    }
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    

    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact deleted successfully'
      },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete contact',
        error: error.message
      },
      { status: 500 }
    );
  }
}
