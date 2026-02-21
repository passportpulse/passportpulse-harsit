// Direct database connection to update admin role
console.log('=== DIRECT DATABASE ROLE UPDATE ===');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function updateRoleDirectly() {
  let client;
  
  try {
    // Connect to MongoDB
    client = new MongoClient(mongoUrl, {
      serverApi: ServerApiVersion.v1,
    });
    
    console.log('Connecting to database...');
    await client.connect();
    console.log('✅ Database connected successfully');
    
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Find and update the admin user
    const userId = '699999e376cf98fd6be355c8';
    
    console.log('Updating user role for ID:', userId);
    
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { 
        $set: { 
          role: 'SUPER_ADMIN',
          updatedAt: new Date()
        }
      }
    );
    
    console.log('Update result:', result);
    
    if (result.matchedCount > 0) {
      console.log('✅ User role updated to SUPER_ADMIN');
      
      // Verify the update
      const updatedUser = await usersCollection.findOne({ _id: new ObjectId(userId) });
      
      if (updatedUser) {
        console.log('✅ Verification successful');
        console.log('Updated user role:', updatedUser.role);
        console.log('User email:', updatedUser.email);
        console.log('========================');
        console.log('🎉 ADMIN LOGIN READY:');
        console.log('Email: mypassortpulse@gmail.com');
        console.log('Password: admin123456');
        console.log('Role: SUPER_ADMIN');
        console.log('========================');
      } else {
        console.log('❌ Verification failed');
      }
    } else {
      console.log('❌ User not found for update');
    }
    
  } catch (error) {
    console.error('❌ Database operation failed:', error.message);
  } finally {
    if (client) {
      await client.close();
      console.log('Database connection closed');
    }
  }
}

updateRoleDirectly();
