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
    const { name, email, company, address, contact, interested_in, status } = body;
    
    // Connect to database
    const database = await connectToDatabase();
    const contactsCollection = database.collection('contacts');
    
    // Create new contact entry
    const newContact = {
      name: name?.trim() || '',
      email: email?.trim().toLowerCase() || '',
      company: company?.trim() || '',
      address: address?.trim() || '',
      contact: contact?.trim() || '',
      interested_in: interested_in?.trim() || '',
      status: status || 'new',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Store contact in database
    const result = await contactsCollection.insertOne(newContact);
    

    
    // Return with database ID
    const responseData = {
      ...newContact,
      id: result.insertedId.toString(),
      _id: result.insertedId.toString()
    };
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact added successfully to database',
        data: responseData
      },
      { status: 201 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to add contact to database',
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
    const contactsCollection = database.collection('contacts');
    
    // Fetch all contacts from database
    const contacts = await contactsCollection.find({}).sort({ createdAt: -1 }).toArray();
    
    // Convert ObjectId to string for JSON serialization
    const formattedContacts = contacts.map(contact => ({
      ...contact,
      id: contact._id.toString(),
      _id: contact._id.toString()
    }));
    
    // Calculate stats
    const stats = {
      total: formattedContacts.length,
      new: formattedContacts.filter(c => c.status === 'new').length,
      contacted: formattedContacts.filter(c => c.status === 'contacted').length,
      qualified: formattedContacts.filter(c => c.status === 'qualified').length,
      converted: formattedContacts.filter(c => c.status === 'converted').length,
      lost: formattedContacts.filter(c => c.status === 'lost').length
    };
    
    return NextResponse.json({
      success: true,
      message: 'Contacts retrieved successfully from database',
      data: formattedContacts,
      total: formattedContacts.length,
      stats
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch contacts from database',
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    // Validate status
    const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'lost'];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }
    
    // Connect to database
    const database = await connectToDatabase();
    const contactsCollection = database.collection('contacts');
    
    // Update contact in database
    const result = await contactsCollection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status: status || 'new',
          updatedAt: new Date()
        }
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact updated successfully in database'
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update contact in database',
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
    const contactsCollection = database.collection('contacts');
    
    // Delete contact from database
    const result = await contactsCollection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact deleted successfully from database'
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete contact from database',
        error: error.message
      },
      { status: 500 }
    );
  }
}
