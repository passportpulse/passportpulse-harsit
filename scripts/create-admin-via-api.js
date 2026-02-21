// Create admin user via API route
console.log('=== CREATING ADMIN USER VIA API ===');

async function createAdminViaAPI() {
  try {
    const axios = require('axios');
    
    // Create admin user via registration API
    const newAdminUser = {
      name: "Admin User",
      email: "mypassortpulse@gmail.com",
      password: "admin123456",
      role: "SUPER_ADMIN"
    };
    
    console.log('Creating admin user via API:', newAdminUser);
    
    const response = await axios.post('http://localhost:3000/api/auth-db/register', newAdminUser);
    
    if (response.data.success) {
      console.log('✅ Admin user created successfully via API');
      console.log('Response:', response.data);
      
      // Now test login
      console.log('\n=== TESTING LOGIN ===');
      const loginResponse = await axios.post('http://localhost:3000/api/auth-db', {
        email: newAdminUser.email,
        password: newAdminUser.password
      });
      
      if (loginResponse.data.success) {
        console.log('✅ Login successful');
        console.log('Token:', loginResponse.data.data.accessToken);
        console.log('User:', loginResponse.data.data.user);
        
        console.log('\n=== FINAL CREDENTIALS ===');
        console.log('Email:', newAdminUser.email);
        console.log('Password:', newAdminUser.password);
        console.log('========================');
      } else {
        console.log('❌ Login failed:', loginResponse.data.message);
      }
    } else {
      console.log('❌ User creation failed:', response.data.message);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createAdminViaAPI();
