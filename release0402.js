window.addEventListener('message', on_msg)
function on_msg(event) {
    if (event.isTrusted === true) {
        let parsed_data = JSON.parse(event.data)
        if (parsed_data['code'] === '1001') {
            const tmp1 = document.querySelector('.user-info-title');
            tmp1.innerHTML = 'Redirecting&hellip;'
            const tmp2 = document.querySelector('.user-info-subtitle');
            tmp2.innerHTML = 'Verification completed, waiting for the target to respond.'
            window.setTimeout(func_reload, 500)
            function func_reload() {
                window.location.reload();
            }
        } else {
            if (parsed_data['code'] === '1002') {
                const tmp3 = document.querySelector('.user-info-title');
                tmp3.innerHTML = 'An error occurred.'
                const tmp4 = document.querySelector('.user-info-subtitle');
                tmp4.innerHTML = parsed_data['msg']
            }
        }
    }
}
const ct_main = document.querySelector('.ct-main');
const config = {}
config.mode = 'closed'
const shadow_root = ct_main.attachShadow(config);
const widget = document.createElement('iframe');
widget.src = '/cdn-cgi/apollo-bm-opts/enterprise/iframe';
widget.width = '300px';
widget.height = '80px';
widget.style.border = 'none';
widget.style.overflow = 'hidden';
widget.title = 'CAPTCHA'
shadow_root.appendChild(widget);