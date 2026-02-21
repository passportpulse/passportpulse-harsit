// Get admin password through API route
console.log('=== GETTING ADMIN PASSWORD VIA API ===');

async function getAdminPasswordViaAPI() {
  try {
    const axios = require('axios');
    
    // First, get the token by trying to login with a test password
    console.log('Testing login to get token...');
    
    const loginResponse = await axios.post('http://localhost:3000/api/auth-db', {
      email: 'mypassortpulse@gmail.com',
      password: 'test123' // Try with test password first
    });
    
    if (loginResponse.data.success) {
      console.log('Login successful with test password');
      console.log('Token:', loginResponse.data.data.accessToken);
      
      // Now get user details with the token
      const userResponse = await axios.get(`http://localhost:3000/api/auth-db?token=${loginResponse.data.data.accessToken}`);
      
      if (userResponse.data.success) {
        console.log('\n=== ADMIN USER DETAILS FROM API ===');
        console.log('ID:', userResponse.data.data._id);
        console.log('Name:', userResponse.data.data.name);
        console.log('Email:', userResponse.data.data.email);
        console.log('Password:', '[HIDDEN - Check database directly]');
        console.log('Role:', userResponse.data.data.role);
        console.log('Created:', userResponse.data.data.createdAt);
        console.log('\n=== LOGIN CREDENTIALS ===');
        console.log('Email:', userResponse.data.data.email);
        console.log('Password: [HIDDEN - Stored in database]');
        console.log('========================');
        
        // Try to find the actual password by testing common ones
        console.log('\n=== TRYING COMMON PASSWORDS ===');
        const commonPasswords = ['admin123456', 'password', '123456', 'admin', 'mypassportpulse'];
        
        for (const password of commonPasswords) {
          try {
            const testResponse = await axios.post('http://localhost:3000/api/auth-db', {
              email: 'mypassortpulse@gmail.com',
              password: password
            });
            
            if (testResponse.data.success) {
              console.log(`\n🎉 FOUND PASSWORD: ${password}`);
              console.log('========================');
              return;
            }
          } catch (error) {
            console.log(`❌ Failed: ${password}`);
          }
        }
        
        console.log('\n❌ No common password worked. Password is custom.');
      } else {
        console.log('❌ Failed to get user details');
      }
    } else {
      console.log('❌ Login failed with test password');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getAdminPasswordViaAPI();
