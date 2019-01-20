const http = require('http');
// const logger = require('./logger');

const startServer = (app) => {
  const port = process.env.PORT || '4000';
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log('listen to port', port)
    // logger.info('listen to port', port);
  });
};

module.exports = {
  startServer,
};
