import('express').then(({ default: express }) => {
  import('dotenv').then(({ default: dotenv }) => {
    dotenv.config();
    const app = express();
    const port = process.env.PORT || 3000;
    
    import('next').then(({ default: next }) => {
      const dev = process.env.NODE_ENV !== 'production';
      const nextApp = next({ dev });
      const handle = nextApp.getRequestHandler();

      nextApp.prepare().then(() => {
        const server = express();

        import('http-proxy-middleware').then(({ createProxyMiddleware }) => {
          server.use('/api', createProxyMiddleware({
            target: 'http://fix.ambeautyboutique.com',
            changeOrigin: true,
            logLevel: 'debug'
          }));

          server.all('*', (req, res) => handle(req, res));

          server.listen(port, () => {
            console.log(`> Server running at http://localhost:${port}`);
          });
        });
      });
    });
  });
});
