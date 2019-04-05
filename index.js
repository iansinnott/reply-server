const http = require('http');

const app = (req, res) => {
  req.setEncoding('utf8');

  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const data = {
      url: req.url,
      method: req.method,
      headers: req.headers,
      body,
    };
    res.write(JSON.stringify(data));
    res.end();
  });

  req.on('error', err => {
    console.error('Oh no...', err.message);
  });
};

const server = http.createServer(app);

server.listen(3111, () => {
  console.log(`Server listening at ${server.address().port}`);
});
