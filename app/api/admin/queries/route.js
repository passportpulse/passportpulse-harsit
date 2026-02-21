import { NextResponse } from 'next/server';

// Admin-specific queries storage
let adminQueries = [];

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Extract query data
    const { name, email, subject, message, interested_in, status, priority } = body;
    
    // Create new query entry
    const newQuery = {
      id: Date.now().toString(),
      name: name?.trim() || '',
      email: email?.trim().toLowerCase() || '',
      subject: subject?.trim() || '',
      message: message?.trim() || '',
      interested_in: interested_in?.trim() || '',
      priority: priority || 'medium',
      status: status || 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Store query
    adminQueries.push(newQuery);
    
    console.log('Admin: New query added:', {
      id: newQuery.id,
      name: newQuery.name,
      email: newQuery.email,
      subject: newQuery.subject,
      interested_in: newQuery.interested_in,
      priority: newQuery.priority
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Query added successfully',
        data: newQuery
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Admin queries API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process query' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all queries sorted by newest first
    const sortedQueries = adminQueries.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Queries retrieved successfully',
        data: sortedQueries,
        total: sortedQueries.length,
        stats: {
          pending: sortedQueries.filter(q => q.status === 'pending').length,
          inProgress: sortedQueries.filter(q => q.status === 'in-progress').length,
          resolved: sortedQueries.filter(q => q.status === 'resolved').length,
          closed: sortedQueries.filter(q => q.status === 'closed').length,
          high: sortedQueries.filter(q => q.priority === 'high').length,
          medium: sortedQueries.filter(q => q.priority === 'medium').length,
          low: sortedQueries.filter(q => q.priority === 'low').length
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error fetching admin queries:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to retrieve queries' 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status, priority } = body;
    
    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Query ID is required' 
        },
        { status: 400 }
      );
    }
    
    // Find and update query
    const queryIndex = adminQueries.findIndex(q => q.id === id);
    if (queryIndex === -1) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Query not found' 
        },
        { status: 404 }
      );
    }
    
    adminQueries[queryIndex] = {
      ...adminQueries[queryIndex],
      status: status || adminQueries[queryIndex].status,
      priority: priority || adminQueries[queryIndex].priority,
      updatedAt: new Date().toISOString()
    };
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Query updated successfully',
        data: adminQueries[queryIndex]
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error updating query:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update query' 
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
          message: 'Query ID is required' 
        },
        { status: 400 }
      );
    }
    
    // Remove query
    const initialLength = adminQueries.length;
    adminQueries = adminQueries.filter(query => query.id !== id);
    
    if (adminQueries.length === initialLength) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Query not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Query deleted successfully' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error deleting query:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete query' 
      },
      { status: 500 }
    );
  }
}
