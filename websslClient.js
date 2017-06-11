const WebSocket = require('ws')
const ws = new WebSocket('wss://localhost:8001/',  // wss is secure version of ws
	{	//ca: "./keys/server.crt",  // not required
		rejectUnauthorized: false
	} )

ws.on('open', function open() {
	console.log('sending something');
	ws.send('something');
});

ws.on('message', function incoming(data) {
	console.log('message recd:', data);
});
ws.on('something',function incoming(data) {
	console.log('event something',data);
});
ws.on('error', function (err){
	console.log('error',err);
});

