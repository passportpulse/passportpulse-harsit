// Script to get admin password from database
console.log('=== GETTING ADMIN PASSWORD FROM DATABASE ===');

const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function getAdminPassword() {
  try {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    
    const client = new MongoClient(mongoUrl, {
      serverApi: ServerApiVersion.v1,
    });
    
    await client.connect();
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Find admin user by email
    const adminUser = await usersCollection.findOne({
      email: "mypassortpulse@gmail.com"
    });
    
    if (adminUser) {
      console.log('\n=== ADMIN USER FOUND ===');
      console.log('ID:', adminUser._id);
      console.log('Name:', adminUser.name);
      console.log('Email:', adminUser.email);
      console.log('Password:', adminUser.password);
      console.log('Role:', adminUser.role);
      console.log('Created:', adminUser.createdAt);
      console.log('Updated:', adminUser.updatedAt);
      console.log('\n=== LOGIN CREDENTIALS ===');
      console.log('Email:', adminUser.email);
      console.log('Password:', adminUser.password);
      console.log('========================');
    } else {
      console.log('❌ Admin user not found in database');
    }
    
    await client.close();
    
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

getAdminPassword();
