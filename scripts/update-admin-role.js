// Update admin user role to SUPER_ADMIN
console.log('=== UPDATING ADMIN USER ROLE ===');

async function updateAdminRole() {
  try {
    const axios = require('axios');
    
    // First login to get token
    const loginResponse = await axios.post('http://localhost:3000/api/auth-db', {
      email: 'mypassortpulse@gmail.com',
      password: 'admin123456'
    });
    
    if (loginResponse.data.success) {
      const token = loginResponse.data.data.accessToken;
      console.log('Login successful, token:', token);
      
      // Get current user details
      const userResponse = await axios.get(`http://localhost:3000/api/auth-db?token=${token}`);
      
      if (userResponse.data.success) {
        const currentUser = userResponse.data.data;
        console.log('Current user role:', currentUser.role);
        
        // Update user role to SUPER_ADMIN
        const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
        const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";
        
        const client = new MongoClient(mongoUrl, {
          serverApi: ServerApiVersion.v1,
        });
        
        await client.connect();
        const db = client.db('passportpulse');
        const usersCollection = db.collection('users');
        
        // Update user role
        const updateResult = await usersCollection.updateOne(
          { _id: new ObjectId(currentUser._id) },
          { 
            $set: {
              role: "SUPER_ADMIN",
              updatedAt: new Date()
            }
          }
        );
        
        console.log('✅ User role updated to SUPER_ADMIN');
        console.log('Updated result:', updateResult);
        
        await client.close();
        
        // Verify the update
        console.log('\n=== VERIFYING UPDATE ===');
        const verifyResponse = await axios.get(`http://localhost:3000/api/auth-db?token=${token}`);
        
        if (verifyResponse.data.success) {
          console.log('✅ Updated user role:', verifyResponse.data.data.role);
        }
      } else {
        console.log('❌ Failed to get user details');
      }
    } else {
      console.log('❌ Login failed');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

updateAdminRole();
