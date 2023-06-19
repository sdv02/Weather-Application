const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: ' http://localhost:8000/weather', // Replace with your Laravel backend URL
      changeOrigin: true,
    })
  );
};