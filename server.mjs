import('express').then(({ default: express }) => {
  import('dotenv').then(({ default: dotenv }) => {
    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3000; // Use environment variable or default to 3000

    import('next').then(({ default: next }) => {
      const dev = process.env.NODE_ENV !== 'production';
      const nextApp = next({ dev });
      const handle = nextApp.getRequestHandler();

      nextApp.prepare().then(() => {
        // Set up the proxy middleware for the API
        import('http-proxy-middleware').then(({ createProxyMiddleware }) => {
          app.use('/api', createProxyMiddleware({
            target: 'http://testingsite.ambeautyboutique.com', // Proxy API requests to this URL
            changeOrigin: true,
            logLevel: 'debug'
          }));

          // Handle all other requests with Next.js
          app.all('*', (req, res) => handle(req, res));

          // Start the server
          app.listen(port, () => {
            console.log(`> Server running at http://localhost:${port}`);
          });
        });
      });
    });
  });
});
