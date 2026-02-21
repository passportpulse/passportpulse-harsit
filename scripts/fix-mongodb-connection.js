const { MongoClient, ServerApiVersion } = require('mongodb');

// Updated connection string with proper SSL settings
const mongoUrl = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function createAdminUser() {
  const client = new MongoClient(mongoUrl, {
    serverApi: ServerApiVersion.v1,
    ssl: true,
    sslValidate: false, // Temporarily disable SSL validation
    maxPoolSize: 10,
    minPoolSize: 5,
    maxIdleTimeMS: 30000,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });
  
  try {
    console.log('Connecting to MongoDB Atlas...');
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas successfully!');
    
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Check if admin user already exists
    const existingAdmin = await usersCollection.findOne({ email: "admin@passportpulse.com" });
    
    if (existingAdmin) {
      console.log('✅ Admin user already exists:', existingAdmin.email);
    } else {
      // Create admin user
      const adminUser = {
        name: "Admin User",
        email: "admin@passportpulse.com",
        password: "admin123456", // You should hash this in production
        role: "SUPER_ADMIN",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const result = await usersCollection.insertOne(adminUser);
      console.log('✅ Admin user created successfully:', result.insertedId);
    }
    
    // Show all users
    const allUsers = await usersCollection.find({}).toArray();
    console.log('📋 All users in database:');
    allUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email}) - ${user.role}`);
    });
    
    // Test collections and data
    const collections = await db.listCollections().toArray();
    console.log('📁 Available collections:', collections.map(c => c.name));
    
  } catch (error) {
    console.error('❌ Connection Error:', error.message);
    
    // Try alternative connection
    console.log('🔄 Trying alternative connection...');
    tryAlternativeConnection();
    
  } finally {
    try {
      await client.close();
      console.log('🔌 MongoDB connection closed');
    } catch (closeError) {
      console.error('Error closing connection:', closeError);
    }
  }
}

async function tryAlternativeConnection() {
  const { MongoClient } = require('mongodb');
  
  // Alternative connection without SSL validation
  const altUrl = "mongodb://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@ac-hvufhcu-shard-00-00.p9dfwxn.mongodb.net:27017,ac-hvufhcu-shard-00-01.p9dfwxn.mongodb.net:27017,ac-hvufhcu-shard-00-02.p9dfwxn.mongodb.net:27017/passportpulse?ssl=true&replicaSet=atlas-a2nadd-shard-0&authSource=admin";
  
  const client = new MongoClient(altUrl);
  
  try {
    await client.connect();
    console.log('✅ Alternative connection successful!');
    
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    const adminUser = {
      name: "Admin User",
      email: "admin@passportpulse.com",
      password: "admin123456",
      role: "SUPER_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    await usersCollection.insertOne(adminUser);
    console.log('✅ Admin user created via alternative connection!');
    
  } catch (error) {
    console.error('❌ Alternative connection failed:', error.message);
  } finally {
    await client.close();
  }
}

createAdminUser();
