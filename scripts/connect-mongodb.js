const { MongoClient, ServerApiVersion } = require('mongodb');

// Correct MongoDB Atlas connection string
const mongoUrl = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function createAdminUser() {
  const client = new MongoClient(mongoUrl, {
    serverApi: ServerApiVersion.v1,
  });
  
  try {
    console.log('🔄 Connecting to MongoDB Atlas...');
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
    
    // Create test data for contacts and queries
    const contactsCollection = db.collection('contacts');
    const queriesCollection = db.collection('queries');
    
    // Insert sample data
    await contactsCollection.insertOne({
      name: "Test Contact",
      email: "test@example.com",
      company: "Test Company",
      address: "123 Test Street",
      contact: "9876543210",
      interested_in: "Web Development",
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    await queriesCollection.insertOne({
      name: "Test Query",
      email: "query@example.com",
      interested_in: "Graphic Design",
      message: "This is a test query from database",
      priority: "medium",
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('✅ Sample data inserted into contacts and queries collections');
    
  } catch (error) {
    console.error('❌ Connection Error:', error.message);
    console.error('Full error details:', error);
  } finally {
    try {
      await client.close();
      console.log('🔌 MongoDB connection closed');
    } catch (closeError) {
      console.error('Error closing connection:', closeError);
    }
  }
}

createAdminUser();
