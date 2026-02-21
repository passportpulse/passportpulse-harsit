// Get admin user ID and password from database
console.log('=== GETTING ADMIN USER ID AND PASSWORD ===');

async function getAdminCredentials() {
  try {
    const axios = require('axios');
    
    // Try to login with the known credentials to get user details
    console.log('Testing login with known credentials...');
    
    const loginResponse = await axios.post('http://localhost:3000/api/auth-db', {
      email: 'mypassortpulse@gmail.com',
      password: 'admin123456'
    });
    
    if (loginResponse.data.success) {
      console.log('✅ Login successful!');
      console.log('User ID:', loginResponse.data.data.user._id);
      console.log('User Email:', loginResponse.data.data.user.email);
      console.log('User Name:', loginResponse.data.data.user.name);
      console.log('User Role:', loginResponse.data.data.user.role);
      console.log('User Password:', '[HIDDEN - Stored in database]');
      console.log('Access Token:', loginResponse.data.data.accessToken);
      
      console.log('\n=== LOGIN CREDENTIALS ===');
      console.log('📧 Email:', loginResponse.data.data.user.email);
      console.log('🔑 Password:', 'admin123456');
      console.log('🆔 User ID:', loginResponse.data.data.user._id);
      console.log('👤 Role:', loginResponse.data.data.user.role);
      console.log('========================');
      
      console.log('\n🎯 READY TO LOGIN:');
      console.log('1. Go to: http://localhost:3000/login');
      console.log('2. Enter Email: mypassortpulse@gmail.com');
      console.log('3. Enter Password: admin123456');
      console.log('4. Click Login');
      console.log('5. You will be redirected to admin dashboard');
      
    } else {
      console.log('❌ Login failed:', loginResponse.data.message);
      
      // Try to find user in database by checking all possible passwords
      console.log('\n=== TRYING TO FIND USER IN DATABASE ===');
      
      // Try common passwords
      const commonPasswords = ['admin123456', 'password', '123456', 'admin', 'mypassortpulse'];
      
      for (const password of commonPasswords) {
        try {
          const testResponse = await axios.post('http://localhost:3000/api/auth-db', {
            email: 'mypassortpulse@gmail.com',
            password: password
          });
          
          if (testResponse.data.success) {
            console.log(`\n🎉 FOUND WORKING PASSWORD: ${password}`);
            console.log('User ID:', testResponse.data.data.user._id);
            console.log('User Role:', testResponse.data.data.user.role);
            console.log('========================');
            
            console.log('\n🎯 LOGIN CREDENTIALS:');
            console.log('📧 Email:', testResponse.data.data.user.email);
            console.log('🔑 Password:', password);
            console.log('🆔 User ID:', testResponse.data.data.user._id);
            console.log('👤 Role:', testResponse.data.data.user.role);
            console.log('========================');
            return;
          }
        } catch (error) {
          console.log(`❌ Failed with password: ${password}`);
        }
      }
      
      console.log('\n❌ No working password found in common passwords');
      console.log('User may need to be created or password reset in database');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getAdminCredentials();
