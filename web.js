const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:8001/')

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

