const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000; // ✅ Ensure a default port
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // ✅ Enable JSON & URL-encoded request body parsing
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // ✅ Example custom route
  server.get('/custom', (req, res) => {
    return app.render(req, res, '/customPage', req.query);
  });

  // ✅ Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // ✅ Ensure Plesk listens on the right port
  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
