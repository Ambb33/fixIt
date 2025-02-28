const express = require('express');
const next = require('next');

const port = process.env.PORT; // Remove || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example custom route
  server.get('/custom', (req, res) => {
    return app.render(req, res, '/customPage', req.query);
  });

  // Handle all other routes with Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
