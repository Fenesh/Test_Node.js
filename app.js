const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

/*app.use(
  '/api.football-data.org/v4/matches',
  createProxyMiddleware({
    target: 'http://localhost:3000/services', // Замените на фактический URL ресурса
    changeOrigin: true,
    pathRewrite: {
      '^/api.football-data.org/v4/matches': '', // Удалите префикс '/api' из пути запроса
    },
  })
);

// Добавьте заголовки CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}); */
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  app.get('/services', (req, res) => {
    res.render('services');
  });
  
  app.get('/portfolio', (req, res) => {
    res.render('portfolio');
  });

  
  app.get('/contact', (req, res) => {
    res.render('contact');
  });

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});