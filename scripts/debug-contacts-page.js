// Debug contacts page home redirect issue
console.log('=== DEBUGGING CONTACTS PAGE HOME REDIRECT ===');

async function debugContactsPage() {
  try {
    const axios = require('axios');
    
    // First login to get token
    console.log('1. Getting authentication token...');
    const loginResponse = await axios.post('http://localhost:3000/api/auth-db', {
      email: 'mypassortpulse@gmail.com',
      password: 'admin123456'
    });
    
    if (!loginResponse.data.success) {
      console.log('❌ Login failed:', loginResponse.data.message);
      return;
    }
    
    const token = loginResponse.data.data.accessToken;
    console.log('✅ Token obtained:', token);
    
    // Test contacts API directly
    console.log('\n2. Testing contacts API directly...');
    try {
      const contactsResponse = await axios.get('http://localhost:3000/api/admin/contacts-db', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log('Contacts API Response:', contactsResponse.data);
      
      if (contactsResponse.data.success) {
        console.log('✅ Contacts API working');
        console.log('   Total contacts:', contactsResponse.data.data.length);
        console.log('   First contact:', contactsResponse.data.data[0]);
      } else {
        console.log('❌ Contacts API failed:', contactsResponse.data.message);
      }
    } catch (error) {
      console.log('❌ Contacts API error:', error.message);
    }
    
    // Test status update API
    console.log('\n3. Testing status update API...');
    if (contactsResponse.data.success && contactsResponse.data.data.length > 0) {
      const contactId = contactsResponse.data.data[0].id;
      
      try {
        const updateResponse = await axios.put(`http://localhost:3000/api/admin/contacts-db/${contactId}`, {
          status: 'contacted'
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        console.log('Status Update Response:', updateResponse.data);
        
        if (updateResponse.data.success) {
          console.log('✅ Status update API working');
        } else {
          console.log('❌ Status update API failed:', updateResponse.data.message);
        }
      } catch (error) {
        console.log('❌ Status update error:', error.message);
      }
    }
    
    // Check for potential issues
    console.log('\n4. Potential Issues Check:');
    console.log('- If page redirects to home, check:');
    console.log('  a) useEffect dependencies');
    console.log('  b) Router navigation issues');
    console.log('  c) Authentication state changes');
    console.log('  d) JavaScript errors in browser console');
    console.log('  e) API call failures');
    console.log('  f) Missing error handling');
    
    console.log('\n5. Manual Test Instructions:');
    console.log('1. Open browser dev tools (F12)');
    console.log('2. Go to /admin/contacts');
    console.log('3. Check Network tab for failed requests');
    console.log('4. Check Console tab for JavaScript errors');
    console.log('5. Try clicking status dropdown');
    console.log('6. Try clicking delete button');
    
  } catch (error) {
    console.error('Debug script failed:', error.message);
  }
}

debugContactsPage();
