// Test dashboard navigation and identify issues
console.log('=== TESTING DASHBOARD NAVIGATION ===');

async function testNavigation() {
  try {
    const axios = require('axios');
    
    // First login to get token
    console.log('1. Logging in...');
    const loginResponse = await axios.post('http://localhost:3000/api/auth-db', {
      email: 'mypassortpulse@gmail.com',
      password: 'admin123456'
    });
    
    if (!loginResponse.data.success) {
      console.log('❌ Login failed:', loginResponse.data.message);
      return;
    }
    
    const token = loginResponse.data.data.accessToken;
    console.log('✅ Login successful, token:', token);
    
    // Test each dashboard page
    const pages = [
      '/admin',
      '/admin/contacts',
      '/admin/queries'
    ];
    
    for (const page of pages) {
      console.log(`\n2. Testing page: ${page}`);
      
      try {
        const response = await axios.get(`http://localhost:3000/api/auth-db?token=${token}`);
        
        if (response.data.success) {
          console.log(`✅ User authenticated for ${page}`);
          console.log(`   User role: ${response.data.data.role}`);
          console.log(`   Should access: ${response.data.data.role === 'USER' || response.data.data.role === 'ADMIN' || response.data.data.role === 'SUPER_ADMIN' ? 'YES' : 'NO'}`);
        } else {
          console.log(`❌ Authentication failed for ${page}`);
        }
      } catch (error) {
        console.log(`❌ Error testing ${page}:`, error.message);
      }
    }
    
    console.log('\n3. Navigation Test Results:');
    console.log('- All pages should be accessible with USER role after layout fix');
    console.log('- If pages are redirecting to login, check layout.js');
    console.log('- If pages are showing blank, check for JavaScript errors');
    
  } catch (error) {
    console.error('Navigation test failed:', error.message);
  }
}

testNavigation();
