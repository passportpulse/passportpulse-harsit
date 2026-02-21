const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection with all possible solutions
const connections = [
  {
    name: "Primary Connection",
    url: "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse",
    options: { serverApi: ServerApiVersion.v1 }
  },
  {
    name: "Direct Connection",
    url: "mongodb://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net:27017/passportpulse",
    options: { ssl: true, sslValidate: false }
  },
  {
    name: "Local MongoDB",
    url: "mongodb://localhost:27017/passportpulse",
    options: {}
  }
];

async function testConnection(connection) {
  const client = new MongoClient(connection.url, connection.options);
  
  try {
    console.log(`🔄 Testing ${connection.name}...`);
    await client.connect();
    console.log(`✅ ${connection.name} successful!`);
    
    const db = client.db('passportpulse');
    
    // Create collections if they don't exist
    await db.createCollection('users');
    await db.createCollection('contacts');
    await db.createCollection('queries');
    
    const usersCollection = db.collection('users');
    
    // Check and create admin user
    const existingAdmin = await usersCollection.findOne({ email: "admin@passportpulse.com" });
    
    if (!existingAdmin) {
      const adminUser = {
        name: "Admin User",
        email: "admin@passportpulse.com",
        password: "admin123456",
        role: "SUPER_ADMIN",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await usersCollection.insertOne(adminUser);
      console.log('✅ Admin user created in database!');
    } else {
      console.log('✅ Admin user already exists in database!');
    }
    
    // Insert sample data
    const contactsCollection = db.collection('contacts');
    const queriesCollection = db.collection('queries');
    
    await contactsCollection.insertOne({
      name: "DB Contact Test",
      email: "dbcontact@test.com",
      company: "DB Test Company",
      address: "Database Street",
      contact: "9999999999",
      interested_in: "Database Development",
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    await queriesCollection.insertOne({
      name: "DB Query Test",
      email: "dbquery@test.com",
      interested_in: "Database Query",
      message: "This query is from real database!",
      priority: "high",
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('✅ Sample data inserted into database!');
    
    await client.close();
    return true;
    
  } catch (error) {
    console.log(`❌ ${connection.name} failed:`, error.message);
    return false;
  }
}

async function setupDatabase() {
  console.log('🚀 Setting up MongoDB database...');
  
  for (const connection of connections) {
    const success = await testConnection(connection);
    if (success) {
      console.log(`🎉 Database setup complete with ${connection.name}!`);
      console.log('📝 Now update your .env.local with working connection string');
      console.log(`✨ Working URL: ${connection.url}`);
      break;
    }
  }
}

setupDatabase();
