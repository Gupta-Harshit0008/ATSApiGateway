// const express = require('express');
// const proxy = require('express-http-proxy');
// const app = express();
// const PORT = 80; // Or any other common port like 443 for HTTPS

// // Proxy requests to the AuthService
// app.use('/auth', proxy('http://172.17.0.4:8001', {
//   // Optional: Add request or response modifications if needed
//   // proxyReqOptDecorator: (proxyReqOpts, originalReq) => { ... },
//   // proxyResOptDecorator: (proxyRes, originalReq, res) => { ... },
// }));

// // Proxy requests to the AIService
// app.use('/ai', proxy('http://localhost:8000', {
//   // Optional: Add request or response modifications if needed
//   // proxyReqOptDecorator: (proxyReqOpts, originalReq) => { ... },
//   // proxyResOptDecorator: (proxyRes, originalReq, res) => { ... },
// }));

const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const cors = require('cors');
const PORT = 80;

// --- CORS Configuration ---
// Configure CORS options to allow requests from your Angular application's origin
const corsOptions = {
    origin: 'http://localhost:4200', // IMPORTANT: This must match your Angular app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'], // Allow common HTTP methods
    credentials: true, // Allow cookies (if you use HttpOnly cookies for auth, this is crucial)
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers from the client
};
app.use(cors(corsOptions)); 

app.use(express.json())

app.use('/auth', proxy('http://auth-service:8001', {
  // ... other proxy options
}));

app.use('/ai', proxy('http://ai-service:8000', {
  // ... other proxy options
}));

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});