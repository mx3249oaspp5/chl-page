~function () {
    const ctMainDiv = document.querySelector('body');
    const shadowRoot = ctMainDiv.attachShadow({
        mode: 'closed'
    });
    const style = document.createElement('style');
    style.textContent = 
    `* {
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
        fill: #546aa4;
        width: 32px;
        height: 32px;
    }
    
    @media (prefers-color-scheme: dark) {
        .main {
            background-color: #2a2a2a;
            border-color: #505665;
        }
    
        .ct-lb-t {
            color: #d5d5d5;
        }
    
        .right-svg {
            fill: #0092f2
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
    rightDiv.innerHTML = 
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="right-svg">
    <path d="M480.67-80q-83.34 0-156.34-31.17-73-31.16-127.5-85.33t-85.66-127.17Q80-396.67 80-480q0-83.67 31.17-156.5 31.16-72.83 85-127Q250-817.67 322-848.83 394-880 475.33-880q40.67 0 81.17 7.17 40.5 7.16 66.17 17.5v82q0 33.66-25.5 59.16T538-688.67H435.33v80q0 18.34-12.83 31.17-12.83 12.83-31.17 12.83h-80V-480H560q19 0 31.83 12.83 12.84 12.84 12.84 31.84v124.66h40q28.33 0 50.16 16 21.84 16 29.84 41.34 43-48.67 65.83-105.84 22.83-57.16 22.83-118.16 0-13.67-1-31-1-17.34-3-29.67h67.34q2 10.33 2.66 26 .67 15.67.67 31.33 0 83.34-31.17 156.67-31.16 73.33-85.33 127.5t-126.67 85.33Q564.33-80 480.67-80Zm-45.34-64v-86.67q-33 0-56.5-23.5t-23.5-56.5v-40L154-552q-3.67 21.33-5.5 37-1.83 15.67-1.83 33 0 130.67 82.16 225.83Q311-161 435.33-144Zm287.34-460.67q-14.34 0-23.84-9.5t-9.5-23.83v-137.33q0-14.34 9.5-23.84t23.84-9.5h10.66v-40q0-33 22.84-56.83 22.83-23.83 55.16-23.83 32.34 0 55.17 23.83t22.83 56.83v40h11.34q14.33 0 23.83 9.5 9.5 9.5 9.5 23.84V-638q0 14.33-9.5 23.83-9.5 9.5-23.83 9.5h-178Zm46.66-204h84v-40q0-18.33-11.83-31.5-11.83-13.16-30.17-13.16-18.33 0-30.16 13.16-11.84 13.17-11.84 31.5v40Z"/>
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
                xhr.open("POST", "/cdn-cgi/enterprise/captcha/bmsc", true);
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