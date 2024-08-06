// backend/src/index.js
const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

mongoose.connect('mongodb://mongo:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/api/products', async (ctx) => {
  ctx.body = [{ id: 1, name: 'Product 1', price: 100 }];
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});