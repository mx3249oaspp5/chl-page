const ctMainDiv = document.querySelector('body');
const shadowRoot = ctMainDiv.attachShadow({ mode: 'closed' });
const style = document.createElement('style');
style.textContent = `
        @keyframes spinner-spin {
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

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            min-height: 100vh;
            transition: all 0.2s ease-out;
            font-family: 'BlenderProBook', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        }

        .main {
            padding-left: 18px;
            padding-right: 18px;
            user-select: none;
            border: 2px solid #d3d3d3;
            border-radius: 8px;
            width: 300px;
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
            z-index: 9998;
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
            z-index: 9990;
            border-radius: 4px;
            grid-area: 1 / 1;
            border: 4px solid #ff874b;
            border-radius: 50%;
            border-bottom-color: transparent;
            border-left-color: transparent;
            animation: spinner-spin linear 3s infinite;
        }

        .ct-success {
            transition: all 0.2s ease-out;
            height: 30px;
            width: 30px;
            z-index: 9980;
            grid-area: 1 / 1;
            opacity: 0;
        }

        .ct-error {
            transition: all 0.2s ease-out;
            height: 30px;
            width: 30px;
            z-index: 9980;
            grid-area: 1 / 1;
            opacity: 0;
        }

        .right {
            display: flex;
        }

        
        @media (prefers-color-scheme: dark) {
            .main {
                background-color: #2a2a2a;
                border-color: #a1a1a1;
            }

            .ct-lb-t {
                color: #d5d5d5;
            }
        }
`;
shadowRoot.appendChild(style);
const mainDiv = document.createElement('div');
mainDiv.classList = 'main';
shadowRoot.appendChild(mainDiv);
const leftDiv = document.createElement('div');
leftDiv.classList = 'left'
mainDiv.appendChild(leftDiv)
const rightDiv = document.createElement('div');
rightDiv.classList = 'right'
rightDiv.innerHTML = `<svg height="50" width="50" viewBox="0 0 110 92"  xmlns="http://www.w3.org/2000/svg"><circle cx="50.049" cy="45" fill="#0b3d91" r="40.14"/><g fill="#fff"><circle cx="47.679" cy="12.57" r=".45"/><circle cx="52.299" cy="13.17" r=".45"/><circle cx="58.359" cy="21.33" r=".45"/><circle cx="25.119" cy="63.33" r=".45"/><circle cx="26.289" cy="66.93" r=".45"/><circle cx="20.709" cy="63.87" r=".337"/><circle cx="39.009" cy="70.942" r=".338"/><circle cx="67.711" cy="64.98" r=".337"/><circle cx="76.052" cy="55.92" r=".338"/><circle cx="35.169" cy="23.962" r=".337"/><circle cx="44.349" cy="17.22" r=".337"/><circle cx="43.352" cy="16.56" r=".337"/><circle cx="42.452" cy="15.9" r=".337"/><circle cx="36.609" cy="25.703" r=".337"/><circle cx="50.131" cy="8.16" r=".337"/><circle cx="52.352" cy="17.88" r=".337"/><circle cx="48.849" cy="15.982" r=".337"/><circle cx="42.849" cy="18.563" r=".337"/><circle cx="69.309" cy="73.883" r=".337"/><circle cx="24.549" cy="65.61" r=".338"/><circle cx="48.009" cy="69.96" r=".338"/><circle cx="31.531" cy="65.34" r=".338"/><circle cx="34.449" cy="70.103" r=".338"/><circle cx="55.929" cy="67.103" r=".337"/><circle cx="67.771" cy="60.42" r=".337"/><circle cx="76.749" cy="64.522" r=".337"/><circle cx="79.809" cy="66.48" r=".337"/><circle cx="80.312" cy="61.14" r=".337"/><circle cx="35.671" cy="53.58" r=".337"/><circle cx="35.799" cy="61.32" r=".45"/><circle cx="38.499" cy="67.02" r=".45"/><circle cx="70.839" cy="61.08" r=".45"/><circle cx="82.479" cy="60.42" r=".45"/><circle cx="76.719" cy="57.96" r=".45"/><circle cx="70.839" cy="58.2" r=".45"/><path d="M58.71 12.288l1.119-.107-1.117-.063c-.035-.216-.208-.385-.426-.413l-.107-1.114-.064 1.123c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.061-1.146C58.507 12.651 58.671 12.492 58.71 12.288z"/><path d="M39.824 24.746l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.123c-.203.045-.358.214-.383.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C39.622 25.11 39.786 24.95 39.824 24.746z"/><path d="M81.659 57.684l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.123c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C81.456 58.048 81.62 57.889 81.659 57.684z"/><path d="M36.044 74.906l1.119-.107-1.117-.063c-.035-.216-.208-.385-.426-.413l-.107-1.113-.063 1.122c-.203.045-.358.214-.383.424l-1.144.104 1.152.062c.042.193.198.345.394.38l.104 1.148.062-1.146C35.841 75.27 36.006 75.11 36.044 74.906z"/><path d="M78.104 66.506l1.119-.107-1.117-.063c-.034-.216-.208-.385-.426-.413l-.107-1.114-.063 1.122c-.202.045-.357.214-.382.424l-1.144.104 1.152.062c.042.193.198.344.394.38l.104 1.148.062-1.146C77.901 66.87 78.066 66.71 78.104 66.506z"/><path d="M59.568 35.385c-4.667 1.814-9.219 3.433-13.06 4.635-7.805 2.444-29.16 9.06-42.06 17.4l1.08.42c7.86-4.44 12.969-5.835 17.88-7.38 5.34-1.68 22.603-5.72 30.42-7.92 2.641-.743 5.734-1.716 9.01-2.9-.762-1.063-1.566-2.129-2.412-3.193C60.143 36.088 59.856 35.734 59.568 35.385zM65.27 43.244c-1.13.763-2.077 1.372-2.74 1.756-3.84 2.22-22.561 15-26.82 17.94s-16.08 14.1-19.56 17.34l-.12 1.319c11.22-10.08 14.74-12.566 19.2-15.959 5.52-4.2 16.939-11.97 20.82-14.46 3.71-2.38 7.056-4.569 10.059-6.572-.049-.082-.098-.164-.147-.247C65.736 43.99 65.505 43.618 65.27 43.244zM82.809 24.72c-5.466 3.204-14.081 7.071-22.439 10.352.2.245.399.492.597.741.934 1.176 1.815 2.36 2.644 3.545 6.57-2.42 13.779-5.668 19.499-9.599-2.725 2.582-11.734 9.315-17.227 13.068.283.461.557.922.822 1.381 8.322-5.569 13.922-9.668 17.185-12.409 4.5-3.78 14.76-12.24 18.66-23.58C95.709 16.92 87.621 21.899 82.809 24.72z" fill="#fc3d21"/><path d="M44.884 54.939c-.885-1.114-2.109-2.606-3.028-3.763-1.229-1.547-2.366-3.11-3.408-4.671-.34.085-.679.17-1.018.255 1.258 1.963 2.655 3.923 4.177 5.839 1.112 1.4 2.123 2.527 2.641 3.228.105.142.313.456.594.874.324-.22.651-.442.981-.666C45.504 55.688 45.189 55.323 44.884 54.939zM51.344 60.803c-.727-.688-2.49-1.837-4.325-3.561-.405.278-.814.56-1.224.844 1.185 1.67 2.799 3.721 4.063 4.319C51.762 63.307 52.275 61.685 51.344 60.803zM60.967 35.813c-10.492-13.206-23.309-20.461-28.835-16.07-4.292 3.41-2.53 13.376 3.386 23.845.306-.105.609-.208.909-.31-5.971-10.2-7.605-19.679-3.557-22.896 5.087-4.042 17.37 3.241 27.558 16.064 2.109 2.654 3.963 5.318 5.533 7.915 6.012 9.95 7.857 18.948 3.703 22.621-1.271 1.124-5.155 1.565-10.243-.725-.071.089.043.33.132.389 4.392 1.766 8.599 2.439 10.723.752C75.38 63.342 71.459 49.019 60.967 35.813z"/><path d="M15.969 37.38h6.72l5.64 9.57c0 0 0-6.93 0-7.47 0-.84-1.065-1.935-1.44-2.1.45 0 4.38 0 4.65 0-.285.075-1.2 1.185-1.2 2.1 0 .45 0 10.5 0 10.98 0 .675.975 1.605 1.44 1.965h-6.48l-5.73-9.615c0 0 0 7.17 0 7.56 0 .75.735 1.47 1.5 2.085h-4.95c.705-.3 1.38-1.245 1.44-1.995s0-10.425 0-10.845C17.559 38.7 16.674 37.95 15.969 37.38z"/><path d="M77.439 52.425h8.94c-.495-.12-1.05-.705-1.35-1.485-.3-.78-5.04-13.56-5.04-13.56H76.59c-.964.694-1.997 1.426-3.1 2.197-.003.028-.006.056-.011.083-.148.9-2.808 10.534-2.97 11.01-.225.66-1.38 1.395-1.845 1.785h4.815c-.48-.54-.87-1.065-.78-1.665.09-.6.36-1.8.36-1.8h4.98c.225.6.393 1.139.48 1.65C78.624 51.255 77.994 51.945 77.439 52.425zM73.509 47.07l1.68-5.49 2.22 5.49H73.509zM72.752 37.928c.247-.182.495-.365.742-.548h-1.305C72.319 37.5 72.534 37.689 72.752 37.928z"/><path d="M38.559 50.79c.09-.6.36-1.8.36-1.8h4.98c.225.6.393 1.139.48 1.65.105.615-.525 1.305-1.08 1.785h7.871c.164-.11.327-.22.49-.329-.305-.27-.586-.675-.771-1.156-.3-.78-5.04-13.56-5.04-13.56h-7.8c.375.345 1.455 1.275 1.29 2.28-.147.9-2.808 10.534-2.97 11.01-.225.66-1.38 1.395-1.845 1.785h4.815C38.859 51.915 38.469 51.39 38.559 50.79zM41.049 41.58l2.22 5.49h-3.9L41.049 41.58z"/><path d="M65.748 44.848c-1.468.978-3.017 1.999-4.649 3.065.732.355 1.315.801 1.371 1.377.104 1.082-2.07 1.605-4.035 1.38-.393-.045-.779-.148-1.147-.286-.408.263-.82.528-1.238.796-.425.273-.941.609-1.53.997v1.553c.39-.765 1.243-1.45 1.905-1.485.285-.015 1.275.9 5.355.675 1.98-.109 5.805-2.22 5.745-4.65C67.489 46.834 66.739 45.714 65.748 44.848zM54.519 48.6v1.582c.361-.241.717-.478 1.066-.709C55.036 49.091 54.647 48.734 54.519 48.6zM64.353 43.855c-.38-.225-.765-.422-1.134-.596-1.92-.9-3.93-1.065-4.35-2.28-.296-.857.54-1.65 2.58-1.62 2.04.03 3.93 1.245 4.44 1.68v-3.87c-.15.15-.808.905-1.41.78-1.155-.24-3.12-.553-5.37-.54-2.58.015-4.8 2.009-4.875 4.53-.105 3.525 2.715 4.485 4.305 5.04.164.057.351.118.554.183 1.525-.992 2.731-1.756 3.437-2.163C63.004 44.726 63.625 44.334 64.353 43.855z"/></g></svg>`
mainDiv.appendChild(rightDiv)
const label = document.createElement('label')
label.classList = 'ct-lb'
leftDiv.appendChild(label)
const ctBtn = document.createElement('div')
ctBtn.classList = 'ct-btn'
const ctLoading = document.createElement('div')
ctLoading.classList = 'ct-loading'
const ctSuccess = document.createElement('div')
ctSuccess.classList = 'ct-success'
ctSuccess.innerHTML = `<svg viewBox="-102.4 -102.4 1228.80 1228.80" xmlns="http://www.w3.org/2000/svg" fill="#2ac11f" stroke="#2ac11f" stroke-width="0.01024" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="6.144"></g><g id="SVGRepo_iconCarrier"><path fill="#1d8b25" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g></svg>`
const ctError = document.createElement('div')
ctError.classList = 'ct-error'
ctError.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16H12.01M12 8V12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#d72828" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
const ctLbT = document.createElement('div')
ctLbT.innerHTML = 'Verify you are human'
ctLbT.classList = 'ct-lb-t'
label.appendChild(ctBtn)
label.appendChild(ctLoading)
label.appendChild(ctSuccess)
label.appendChild(ctError)
label.appendChild(ctLbT)
label.addEventListener('click', clickFunc)
function clickFunc() {
    label.removeEventListener('click', clickFunc)
    ctBtn.classList.toggle('ct-click');
    ctLbT.innerHTML = 'Verifying&hellip;'
    ctLoading.style.opacity = '1'
    window._bmsc = {}
    const payload = {};
    payload.ss = window._bmsc;
    const xhr = new XMLHttpRequest();
    const url = "/apollo-bm-opts/enterprise/v1/bmsc";
    xhr.open("POST", url, true);
    xhr["timeout"] = 5000;
    xhr["ontimeout"] = function () {
        setTimeout(error, 500);
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                setTimeout(success, 500);
                setTimeout(function () {
                    window.parent.location.reload();
                }, 1000)
            } else {
                setTimeout(error, 500);
            }
        }
    };
    xhr.send(JSON.stringify(payload));
    function success() {
        ctLoading.style.opacity = '0'
        ctSuccess.style.opacity = '1'
        ctSuccess.style.animation = 'scale-up-center 0.5s ease-out both'
        ctLbT.innerHTML = 'Success!'
    }
    function error() {
        ctLoading.style.opacity = '0'
        ctError.style.opacity = '1'
        ctError.style.animation = 'scale-up-center 0.5s ease-out both'
        ctLbT.innerHTML = 'Error'
    }
}