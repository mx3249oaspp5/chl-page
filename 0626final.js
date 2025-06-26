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
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 400 400" style="width: 40px; height: 40px;">
<style type="text/css">
    .st0 {
        fill:rgb(69, 69, 105);
    }
    @media (prefers-color-scheme: dark) {
        .st0 {
            fill:#d18b36;
        }
    }
</style>
<g>
    <g>
        <rect x="16" y="10.6" class="st0" width="169.9" height="169.9"/>
        <rect x="219.8" y="10.6" class="st0" width="169.9" height="169.9"/>
        <rect x="219.8" y="214.5" class="st0" width="169.9" height="169.9"/>
        <g>
            <path class="st0" d="M194.2,299.3c0,51.5-41.8,93.3-93.3,93.3c-51.5,0-93.3-41.8-93.3-93.3S49.4,206,100.9,206
                C152.4,206,194.2,247.7,194.2,299.3"/>
        </g>
    </g>
</g>
</svg>`
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