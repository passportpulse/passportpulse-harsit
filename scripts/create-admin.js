const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://mypassportpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/?appName=passportpulse";
const client = new MongoClient(uri);

async function createAdminUser() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    const usersCollection = db.collection('users');
    
    // Check if admin user already exists
    const existingAdmin = await usersCollection.findOne({ email: 'admin@passportpulse.com' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      return;
    }
    
    // Create admin user
    const adminUser = {
      name: 'Admin User',
      email: 'admin@passportpulse.com',
      password: '$2b$10$rQZ8ZqGqJqKqQqQqQqQqQu', // This is a bcrypt hash for 'admin123456'
      role: 'SUPER_ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await usersCollection.insertOne(adminUser);
    console.log('Admin user created successfully!');
    console.log('Email: admin@passportpulse.com');
    console.log('Password: admin123456');
    console.log('Role: SUPER_ADMIN');
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await client.close();
  }
}

createAdminUser();
