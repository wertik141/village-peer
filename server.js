const { PeerServer } = require('peer');
const port = process.env.PORT || 9000;
PeerServer({
  port: port,
  path: '/myapp',
  proxied: true,
  allow_discovery: true
});
console.log('PeerJS server running on port ' + port);
