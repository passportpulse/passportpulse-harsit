const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoUrl = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/?appName=passportpulse";

async function createAdminUser() {
  const client = new MongoClient(mongoUrl, {
    serverApi: ServerApiVersion.v1,
    tls: true,
    tlsAllowInvalidCertificates: true,
    retryWrites: true,
    w: 'majority'
  });
  
  try {
    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB successfully');
    
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Check if admin user already exists
    const existingAdmin = await usersCollection.findOne({ email: "admin@passportpulse.com" });
    
    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin);
    } else {
      // Create admin user with plain password (you should hash this in production)
      const adminUser = {
        name: "Admin User",
        email: "admin@passportpulse.com",
        password: "admin123456", // Plain text for testing - hash in production
        role: "SUPER_ADMIN",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const result = await usersCollection.insertOne(adminUser);
      console.log('Admin user created:', result);
    }
    
    // Show all users
    const allUsers = await usersCollection.find({}).toArray();
    console.log('All users in database:');
    console.log(JSON.stringify(allUsers, null, 2));
    
  } catch (error) {
    console.error('Connection Error:', error.message);
    console.error('Full Error:', error);
  } finally {
    try {
      await client.close();
      console.log('MongoDB connection closed');
    } catch (closeError) {
      console.error('Error closing connection:', closeError);
    }
  }
}

createAdminUser();
