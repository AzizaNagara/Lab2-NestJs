const jwt = require('jsonwebtoken');

// Generate a token with a payload containing a userId
const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });

// Output the token to the console
console.log('Generated Token:', token);
