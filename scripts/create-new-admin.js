// Create new admin user in database
console.log('=== CREATING NEW ADMIN USER ===');

const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function createNewAdminUser() {
  try {
    const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
    
    const client = new MongoClient(mongoUrl, {
      serverApi: ServerApiVersion.v1,
    });
    
    await client.connect();
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Create new admin user
    const newAdminUser = {
      name: "Admin User",
      email: "mypassortpulse@gmail.com",
      password: "admin123456", // Set the password
      role: "SUPER_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    console.log('Creating admin user:', {
      name: newAdminUser.name,
      email: newAdminUser.email,
      password: newAdminUser.password,
      role: newAdminUser.role
    });
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({
      email: newAdminUser.email
    });
    
    if (existingUser) {
      console.log('User already exists, updating password...');
      
      // Update existing user
      await usersCollection.updateOne(
        { email: newAdminUser.email },
        { 
          $set: {
            password: newAdminUser.password,
            role: newAdminUser.role,
            updatedAt: new Date()
          }
        }
      );
      
      console.log('✅ Admin user updated successfully');
    } else {
      // Insert new user
      const result = await usersCollection.insertOne(newAdminUser);
      console.log('✅ Admin user created successfully');
      console.log('User ID:', result.insertedId);
    }
    
    // Verify the created user
    const verifyUser = await usersCollection.findOne({
      email: newAdminUser.email
    });
    
    if (verifyUser) {
      console.log('\n=== VERIFICATION ===');
      console.log('✅ User found in database');
      console.log('Email:', verifyUser.email);
      console.log('Password:', verifyUser.password);
      console.log('Role:', verifyUser.role);
      console.log('ID:', verifyUser._id);
      console.log('==================');
      
      console.log('\n=== LOGIN CREDENTIALS ===');
      console.log('Email:', verifyUser.email);
      console.log('Password:', verifyUser.password);
      console.log('========================');
    } else {
      console.log('❌ User verification failed');
    }
    
    await client.close();
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createNewAdminUser();
