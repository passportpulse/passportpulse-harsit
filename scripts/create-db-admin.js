const { MongoClient } = require('mongodb');

const mongoUrl = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/?appName=passportpulse";

async function createAdminUser() {
  const client = new MongoClient(mongoUrl);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');
    
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Check if admin user already exists
    const existingAdmin = await usersCollection.findOne({ email: "admin@passportpulse.com" });
    
    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin);
    } else {
      // Create admin user
      const adminUser = {
        name: "Admin User",
        email: "admin@passportpulse.com",
        password: "$2b$10$YourHashedPasswordHere", // You should hash this properly
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
    console.log(allUsers);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

createAdminUser();
