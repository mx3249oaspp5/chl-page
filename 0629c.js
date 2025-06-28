~function () {
    const ctMainDiv = document.querySelector('body');
    const shadowRoot = ctMainDiv.attachShadow({
        mode: 'closed'
    });
    const style = document.createElement('style');
    style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @keyframes spin {
        0% {
            -webkit-transform: rotateZ(0deg);
            -ms-transform: rotateZ(0deg);
            -o-transform: rotateZ(0deg);
            transform: rotateZ(0deg)
        }
    
        10% {
            -webkit-transform: rotateZ(135deg);
            -ms-transform: rotateZ(135deg);
            -o-transform: rotateZ(135deg);
            transform: rotateZ(135deg)
        }
    
        25% {
            -webkit-transform: rotateZ(245deg);
            -ms-transform: rotateZ(245deg);
            -o-transform: rotateZ(245deg);
            transform: rotateZ(245deg)
        }
    
        60% {
            -webkit-transform: rotateZ(700deg);
            -ms-transform: rotateZ(700deg);
            -o-transform: rotateZ(700deg);
            transform: rotateZ(700deg)
        }
    
        75% {
            -webkit-transform: rotateZ(810deg);
            -ms-transform: rotateZ(810deg);
            -o-transform: rotateZ(810deg);
            transform: rotateZ(810deg)
        }
    
        to {
            -webkit-transform: rotateZ(1080deg);
            -ms-transform: rotateZ(1080deg);
            -o-transform: rotateZ(1080deg);
            transform: rotateZ(1080deg)
        }
    }
    
    @keyframes scale-up-center {
        0% {
            transform: scale(0);
        }
    
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes btn-out {
        20% {
            transform: scale(1);
    
        }
    
        50% {
            border-radius: 50%;
    
        }
    
        100% {
            transform: scale(0);
        }
    }
    
    .main {
        padding-left: 18px;
        padding-right: 18px;
        border: 2px solid #d3d3d3;
        border-radius: 8px;
        height: 80px;
        background-color: #fdfdfd;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .ct-lb {
        display: grid;
        place-items: center;
    }
    
    .ct-btn {
        cursor: pointer;
        height: 24px;
        width: 24px;
        z-index: 9990;
        border: 2px solid #6d6d6d;
        border-radius: 4px;
        grid-area: 1 / 1;
        animation: scale-up-center 0.5s ease-out both;
        animation-delay: 0.5s;
        transition: all 0.2s ease-out;
    }
    
    .ct-btn.ct-click {
        animation: btn-out 0.5s ease-out both;
    }
    
    .ct-lb:hover .ct-btn {
        border-color: #ff874b;
    }
    
    .ct-lb-t {
        color: #555555;
        grid-column: 2;
        margin-left: 8px;
        font-family: 'BlenderProBold', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    }
    
    .ct-loading {
        transition: all 0.2s ease-out;
        opacity: 0;
        height: 24px;
        width: 24px;
        z-index: 9980;
        border-radius: 4px;
        grid-area: 1 / 1;
        border: 4px solid #ff874b;
        border-radius: 50%;
        border-bottom-color: transparent;
        border-left-color: transparent;
        animation: spin linear 3s infinite;
    }
    
    .ct-success {
        transition: all 0.2s ease-out;
        height: 30px;
        width: 30px;
        grid-area: 1 / 1;
        opacity: 0;
    }
    
    .ct-error {
        transition: all 0.2s ease-out;
        height: 30px;
        width: 30px;
        grid-area: 1 / 1;
        opacity: 0;
    }
    
    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .right-svg {
        width: 32px;
        height: 32px;
    }
    
    .right-svg-p {
        fill: #546aa4
    }
    
    @media (prefers-color-scheme: dark) {
        .main {
            background-color: #2a2a2a;
            border-color: #505665;
        }
    
        .ct-lb-t {
            color: #d5d5d5;
        }
    
        .right-svg-p {
            fill: #0092f2
        }
    
        .right-t-a {
            color: #0092f2;
        }
    }`;
    shadowRoot.appendChild(style);
    const mainDiv = document.createElement('div');
    mainDiv.classList = 'main';
    shadowRoot.appendChild(mainDiv);
    const leftDiv = document.createElement('div');
    leftDiv.classList = 'left';
    mainDiv.appendChild(leftDiv);
    const rightDiv = document.createElement('div');
    rightDiv.classList = 'right';
    rightDiv.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
    <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4" />
    <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853" />
    <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05" />
    <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335" />
    <path d="M1 1h22v22H1z" fill="none" />
</svg>
`
    mainDiv.appendChild(rightDiv);
    const label = document.createElement('label');
    label.classList = 'ct-lb';
    leftDiv.appendChild(label);
    const ctBtn = document.createElement('div');
    ctBtn.classList = 'ct-btn';
    const ctLoading = document.createElement('div');
    ctLoading.classList = 'ct-loading';
    const ctSuccess = document.createElement('div');
    ctSuccess.classList = 'ct-success';
    ctSuccess.innerHTML = `<svg viewBox="-102.4 -102.4 1228.80 1228.80" xmlns="http://www.w3.org/2000/svg" fill="#2ac11f" stroke="#2ac11f" stroke-width="0.01024" transform="rotate(0)"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="6.144"></g><g><path fill="#1d8b25" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g></svg>`;
    const ctError = document.createElement('div');
    ctError.classList = 'ct-error';
    ctError.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 16H12.01M12 8V12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#d72828" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
    const ctLbT = document.createElement('div');
    ctLbT.innerHTML = 'Verify you are human';
    ctLbT.classList = 'ct-lb-t';
    label.appendChild(ctBtn);
    label.appendChild(ctLoading);
    label.appendChild(ctSuccess);
    label.appendChild(ctError);
    label.appendChild(ctLbT);
    label.addEventListener('click', clickFunc);
    function clickFunc() {
        function randomString(length) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars[randomIndex];
            }
            return result;
        }
        function xor_encrypt(input) {
            let h = 32;
            for (let m = 0; m < key.length; m++) {
                h ^= key.charCodeAt(m);
            }
            let encryptedChars = [];
            for (let g = 0; g < input.length; g++) {
                let k = input.charCodeAt(g);
                let encryptedChar = (k + h + (g % 65535)) % 255;
                encryptedChars.push(String.fromCharCode(encryptedChar));
            }
            let encryptedString = encryptedChars.join('');
            return btoa(encryptedString);
        }
        label.removeEventListener('click', clickFunc);
        ctBtn.classList.toggle('ct-click');
        ctLbT.innerHTML = 'Verifying&hellip;';
        ctLoading.style.opacity = '1';
        const key = randomString(16)
        const payload = {};
        const tmp = {
            'v1': Date.now().toString(),
            'v2': navigator.userAgent,
        };

        const worker = new Worker(URL.createObjectURL(new Blob([`
        self.postMessage(navigator.userAgent);
        `], { type: 'application/javascript' })));

        worker.onmessage = function (e) {
            tmp['v3'] = e.data
            ~function () {
                payload['sensor_data'] = xor_encrypt(JSON.stringify(tmp))
                payload['ct_ts'] = key;
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "/cdn-cgi/representative-ab-sec/enterprise/coromandel/bmsc", true);
                xhr["timeout"] = 5000;
                xhr["ontimeout"] = function () {
                    setTimeout(error.bind(null, 'Verification request timed out.'));
                };
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            setTimeout(success, 500);
                        } else {
                            setTimeout(error.bind(null, 'Verification request had a code ' + xhr.status + ' error.'), 500);
                        }
                    }
                };
                xhr.send(JSON.stringify(payload));
                function success() {
                    ctLoading.style.opacity = '0';
                    ctSuccess.style.opacity = '1';
                    ctSuccess.style.animation = 'scale-up-center 0.5s ease-out both';
                    ctLbT.innerHTML = 'Success';
                    let tmp = {
                        'code': '1001'
                    };
                    post_msg(JSON.stringify(tmp));
                }
                function error(msg) {
                    ctLoading.style.opacity = '0';
                    ctError.style.opacity = '1';
                    ctError.style.animation = 'scale-up-center 0.5s ease-out both';
                    ctLbT.innerHTML = 'Critical Error';
                    let tmp = {
                        'code': '1002'
                    };
                    tmp['msg'] = msg;
                    post_msg(JSON.stringify(tmp));
                }
                function post_msg(msg) {
                    window.parent.postMessage(msg);
                }
            }()
        }
    }
}(this);