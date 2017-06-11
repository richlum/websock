const WebSocket = require('ws')
const wss = new WebSocket.Server({ port:8001 });

wss.on('connection',  function(ws) {
	console.log('connection event');
	let i = 0;	
	for (x in ws ){
		console.log(i++,x, ws[x]);
	}
	console.log('ws._sender._socket',ws._sender._socket);
	console.log('ws._socket',ws._socket);
	console.log('ws._socket.address()',ws._socket.address());
	console.log('ws._socket.remoteAddress',ws._socket.remoteAddress);
	console.log('ws._socket.remoteFamily',ws._socket.remoteFamily);
	console.log('ws._socket.remotePort',ws._socket.remotePort);
	ws.on('message',function incoming(message){
		console.log('received: %s',message);
	});
	ws.send('something');
});

