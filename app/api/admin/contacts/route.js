import { NextResponse } from 'next/server';

// Admin-specific contacts storage
let adminContacts = [];

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Extract form data
    const { name, company, address, email, contact, interested_in, status } = body;
    
    // Create new contact entry
    const newContact = {
      id: Date.now().toString(),
      name: name?.trim() || '',
      company: company?.trim() || '',
      address: address?.trim() || '',
      email: email?.trim().toLowerCase() || '',
      contact: contact?.trim() || '',
      interested_in: interested_in || '',
      status: status || 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Store contact
    adminContacts.push(newContact);
    
  
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact added successfully',
        data: newContact
      },
      { status: 201 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process contact' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all contacts sorted by newest first
    const sortedContacts = adminContacts.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contacts retrieved successfully',
        data: sortedContacts,
        total: sortedContacts.length,
        stats: {
          new: sortedContacts.filter(c => c.status === 'new').length,
          contacted: sortedContacts.filter(c => c.status === 'contacted').length,
          inProgress: sortedContacts.filter(c => c.status === 'in-progress').length,
          completed: sortedContacts.filter(c => c.status === 'completed').length,
          closed: sortedContacts.filter(c => c.status === 'closed').length
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to retrieve contacts' 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    if (!id || !status) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Contact ID and status are required' 
        },
        { status: 400 }
      );
    }
    
    // Find and update contact
    const contactIndex = adminContacts.findIndex(c => c.id === id);
    if (contactIndex === -1) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Contact not found' 
        },
        { status: 404 }
      );
    }
    
    adminContacts[contactIndex] = {
      ...adminContacts[contactIndex],
      status,
      updatedAt: new Date().toISOString()
    };
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact status updated successfully',
        data: adminContacts[contactIndex]
      },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update contact' 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Contact ID is required' 
        },
        { status: 400 }
      );
    }
    
    // Remove contact
    const initialLength = adminContacts.length;
    adminContacts = adminContacts.filter(contact => contact.id !== id);
    
    if (adminContacts.length === initialLength) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Contact not found' 
        },
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
        message: 'Failed to delete contact' 
      },
      { status: 500 }
    );
  }
}
