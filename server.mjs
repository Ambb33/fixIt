import { parse } from 'url';
import next from 'next';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Proxy API requests
  server.use('/api', createProxyMiddleware({
    target: 'http://fix.ambeautyboutique.com',
    changeOrigin: true,
    logLevel: 'debug'  // Add this line to enable logging for the proxy
  }));

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    console.log(`Request received: ${req.url}`);
    handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    );
  });
});
