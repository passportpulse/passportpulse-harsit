const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const mongoUrl = "mongodb+srv://mypassortpulse_db_user:K4rGDFUP1zjXQl3U@passportpulse.p9dfwxn.mongodb.net/passportpulse?retryWrites=true&w=majority&appName=passportpulse";

async function checkAdminUser() {
  const client = new MongoClient(mongoUrl, {
    serverApi: ServerApiVersion.v1,
  });
  
  try {
    await client.connect();
    const db = client.db('passportpulse');
    const usersCollection = db.collection('users');
    
    // Find admin users
    const adminUsers = await usersCollection.find({
      role: { $in: ["ADMIN", "SUPER_ADMIN"] }
    }).toArray();
    
    console.log('=== ADMIN USERS IN DATABASE ===');
    console.log('Total admin users:', adminUsers.length);
    
    adminUsers.forEach((user, index) => {
      console.log(`\n--- Admin User ${index + 1} ---`);
      console.log('ID:', user._id);
      console.log('Name:', user.name);
      console.log('Email:', user.email);
      console.log('Role:', user.role);
      console.log('Created:', user.createdAt);
      console.log('Password:', user.password ? '[SET]' : '[NOT SET]');
      console.log('------------------------');
    });
    
    // Test login with each admin user
    console.log('\n=== TESTING LOGIN CREDENTIALS ===');
    for (const user of adminUsers) {
      console.log(`\nTesting: ${user.email}`);
      
      // Test with common passwords
      const testPasswords = ['admin123456', 'password', '123456', user.password];
      
      for (const testPass of testPasswords) {
        try {
          const testResult = await usersCollection.findOne({ 
            email: user.email, 
            password: testPass 
          });
          
          if (testResult) {
            console.log(`✅ SUCCESS: ${user.email} / ${testPass}`);
            console.log(`   User ID: ${testResult._id}`);
            console.log(`   Role: ${testResult.role}`);
            break;
          }
        } catch (error) {
          console.log(`❌ FAILED: ${user.email} / ${testPass}`);
        }
      }
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkAdminUser();
