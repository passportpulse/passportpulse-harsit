// Mock admin user for testing
// This simulates the admin user data structure

const mockAdminUser = {
  _id: "mock_admin_id_12345",
  name: "Admin User",
  email: "admin@passportpulse.com",
  role: "SUPER_ADMIN",
  createdAt: new Date(),
  updatedAt: new Date()
};

console.log('=== MOCK ADMIN USER CREATED ===');
console.log('Email: admin@passportpulse.com');
console.log('Password: admin123456');
console.log('Role: SUPER_ADMIN');
console.log('User ID:', mockAdminUser._id);
console.log('');
console.log('To test admin login:');
console.log('1. Go to http://localhost:3000/login');
console.log('2. Enter email: admin@passportpulse.com');
console.log('3. Enter password: admin123456');
console.log('4. You should be redirected to /admin dashboard');
console.log('');
console.log('Note: This is a mock user. For production, you need to:');
console.log('- Fix MongoDB connection issues');
console.log('- Create actual admin user in database');
console.log('- Ensure proper password hashing');
