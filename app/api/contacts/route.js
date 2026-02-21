import { NextResponse } from 'next/server';

// Mock database for storing contact submissions
let contacts = [];

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { name, company, address, email, contact, interested_in } = body;
    
    // Validate required fields
    if (!name || !company || !address || !email || !contact || !interested_in) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Create new contact submission
    const newContact = {
      id: Date.now().toString(),
      name,
      company,
      address,
      email,
      contact,
      interested_in,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Add to mock database
    contacts.push(newContact);
    
    console.log('New contact submission:', newContact);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: newContact
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all contacts sorted by creation date (newest first)
    const sortedContacts = contacts.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contacts retrieved successfully',
        data: sortedContacts,
        total: sortedContacts.length
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
