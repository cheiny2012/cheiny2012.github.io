const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://somoskudasai.com',
    changeOrigin: true,
    secure: false
}));

app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy server listening on port ' + (process.env.PORT || 3000));
});
