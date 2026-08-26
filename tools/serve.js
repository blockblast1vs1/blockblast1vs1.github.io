/**
 * Static server with on-the-fly Gzip (and Brotli when supported by compression).
 * http-server -g only serves prebuilt *.gz files — it does not compress.
 */
const path = require('path');
const express = require('express');
const compression = require('compression');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT) || 8080;

const app = express();

app.use(
  compression({
    // Compress everything worth sending (default threshold is 1KB)
    threshold: 1024,
    // Large JS bundles benefit most
    filter: (req, res) => {
      if (req.headers['x-no-compression']) return false;
      return compression.filter(req, res);
    },
  }),
);

app.use(
  express.static(root, {
    etag: true,
    lastModified: true,
    setHeaders(res, filePath) {
      if (/\.(js|css|html|json|wasm|svg|txt|xml|map)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  }),
);

app.listen(port, () => {
  console.log(`[serve] http://127.0.0.1:${port}  (gzip on)`);
  console.log(`[serve] root: ${root}`);
});
