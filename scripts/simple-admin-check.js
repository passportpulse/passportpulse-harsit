// Simple script to check admin user in database
console.log('=== CHECKING DATABASE ADMIN USER ===');

// Use the same connection as API routes
const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function checkAdmin() {
  try {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    
    const client = new MongoClient(mongoUrl, {
      serverApi: ServerApiVersion.v1,
    });
    
    await client.connect();
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Find admin users
    const adminUsers = await usersCollection.find({
      role: { $in: ["ADMIN", "SUPER_ADMIN"] }
    }).toArray();
    
    console.log('Total admin users found:', adminUsers.length);
    
    adminUsers.forEach((user, index) => {
      console.log(`\n--- Admin User ${index + 1} ---`);
      console.log('ID:', user._id);
      console.log('Name:', user.name);
      console.log('Email:', user.email);
      console.log('Role:', user.role);
      console.log('Password:', user.password ? '[SET]' : '[NOT SET]');
      console.log('Created:', user.createdAt);
    });
    
    await client.close();
    
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

checkAdmin();
