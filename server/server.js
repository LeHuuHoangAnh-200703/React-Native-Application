const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Middleware để log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Route mặc định cho đường dẫn gốc
app.get('/', (req, res) => {
  console.log('Client accessed root route');
  res.json({ 
    message: 'Welcome to API Server',
    status: 'running'
  });
});

// Test API endpoint
app.get('/api/test', (req, res) => {
  console.log('Client tested connection');
  res.json({ 
    message: 'Kết nối thành công đến server!',
    timestamp: new Date().toISOString()
  });
});

// Test API với POST request
app.post('/api/hello', (req, res) => {
  const { name } = req.body;
  console.log(`Received hello request from: ${name || 'Anonymous'}`);
  res.json({ 
    message: `Xin chào, ${name || 'Người dùng'}!`,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại port ${PORT}`);
});