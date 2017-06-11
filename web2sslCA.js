const WebSocket = require('ws')
const fs = require('fs')

// see readme for generating self signed cert for this server to use
const ws_cfg = {
	ssl: true,
	port: 8001,
	ssl_key: 'ca/server-key.pem',
	ssl_cert: 'ca/server-crt.pem',
	ca: 'ca/ca-crt.pem'
}

// create the http server
var httpServ = (ws_cfg.ssl) ? require('https') : require('http');


var app = httpServ.createServer({
	key: fs.readFileSync(ws_cfg.ssl_key),
	cert: fs.readFileSync(ws_cfg.ssl_cert),
	ca: fs.readFileSync(ws_cfg.ca)
}, function(req, res) {
	console.log("request received")
}).listen(ws_cfg.port);


// create the websocket server that will use the http server above
// websocket client will call for an upgrade on the same port.
var wss = new WebSocket.Server({ server: app });


wss.on('connection',  function(ws) {
	console.log('connection event');
/*
	let i = 0;	
	for (x in ws ){
		console.log(i++,x, ws[x]);
	}
*/
//	console.log('ws._sender._socket',ws._sender._socket);
//	console.log('ws._socket',ws._socket);
	console.log('ws._socket.address()',ws._socket.address());
	console.log('ws._socket.remoteAddress',ws._socket.remoteAddress);
	console.log('ws._socket.remoteFamily',ws._socket.remoteFamily);
	console.log('ws._socket.remotePort',ws._socket.remotePort);
	ws.on('message',function incoming(message){
		console.log('received: %s',message);
	});
	ws.send('something');
});

