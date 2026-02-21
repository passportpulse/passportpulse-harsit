import { NextResponse } from 'next/server';

// Simple in-memory storage for contact submissions
// In production, you'd use a database like MongoDB, PostgreSQL, etc.
let contactSubmissions = [];

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Extract form data
    const { name, company, address, email, contact, interested_in } = body;
    
    // Basic validation
    if (!name || !company || !address || !email || !contact || !interested_in) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'All fields are required. Please fill out the complete form.' 
        },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address.' 
        },
        { status: 400 }
      );
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[+]?[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(contact) || contact.length < 10) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid phone number (at least 10 digits).' 
        },
        { status: 400 }
      );
    }
    
    // Create new submission
    const newSubmission = {
      id: Date.now().toString(),
      name: name.trim(),
      company: company.trim(),
      address: address.trim(),
      email: email.trim().toLowerCase(),
      contact: contact.trim(),
      interested_in,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Store submission
    contactSubmissions.push(newSubmission);
    
    console.log('New contact submission received:', {
      id: newSubmission.id,
      name: newSubmission.name,
      email: newSubmission.email,
      company: newSubmission.company,
      interested_in: newSubmission.interested_in,
      timestamp: newSubmission.createdAt
    });
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will contact you soon.',
        data: {
          id: newSubmission.id,
          name: newSubmission.name,
          email: newSubmission.email
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Server error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all submissions sorted by newest first
    const sortedSubmissions = contactSubmissions.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact submissions retrieved successfully',
        data: sortedSubmissions,
        total: sortedSubmissions.length
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to retrieve contact submissions' 
      },
      { status: 500 }
    );
  }
}

// Optional: DELETE method to remove submissions
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Submission ID is required' 
        },
        { status: 400 }
      );
    }
    
    // Remove submission
    const initialLength = contactSubmissions.length;
    contactSubmissions = contactSubmissions.filter(submission => submission.id !== id);
    
    if (contactSubmissions.length === initialLength) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Submission not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Submission deleted successfully' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete submission' 
      },
      { status: 500 }
    );
  }
}
