// Simple script to update admin role to SUPER_ADMIN
console.log('=== UPDATE ADMIN ROLE TO SUPER_ADMIN ===');

// Use fetch to call the API instead of direct database connection
async function updateAdminRole() {
  try {
    const response = await fetch('http://localhost:3000/api/admin/users/699999e376cf98fd6be355c8', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: 'SUPER_ADMIN'
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Admin role updated to SUPER_ADMIN');
      console.log('Updated user:', result.data);
    } else {
      console.log('❌ Failed to update role:', result.message);
    }
    
    // Test login after role update
    console.log('\n=== TESTING LOGIN AFTER ROLE UPDATE ===');
    const loginResponse = await fetch('http://localhost:3000/api/auth-db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'mypassortpulse@gmail.com',
        password: 'admin123456'
      })
    });
    
    const loginResult = await loginResponse.json();
    
    if (loginResult.success) {
      console.log('✅ Login successful after role update!');
      console.log('User role:', loginResult.data.user.role);
      console.log('Token:', loginResult.data.data.accessToken);
      
      if (loginResult.data.user.role === 'SUPER_ADMIN' || loginResult.data.user.role === 'ADMIN') {
        console.log('🎉 Dashboard access should work now!');
      }
    } else {
      console.log('❌ Login still failed:', loginResult.message);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

updateAdminRole();
