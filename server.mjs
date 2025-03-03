import { parse } from 'url';
import next from 'next';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Initialize Next.js app
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Proxy API requests to the backend server (replace with actual backend URL)
  server.use('/api', createProxyMiddleware({
    target: 'http://fix.ambeautyboutique.com', // Replace with actual API URL
    changeOrigin: true,
    logLevel: 'debug',  // Log proxy actions
  }));

  // Handle all other requests via Next.js
  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    console.log(`Request received: ${req.url}`);
    handle(req, res, parsedUrl);
  });

  // Start the server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
  });
});
