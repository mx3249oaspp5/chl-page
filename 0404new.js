window.addEventListener('message', on_msg);
function on_msg(event) {
    if (event.isTrusted === true) {
        var parsed_data = JSON.parse(event.data);
        if (parsed_data['code'] === '1001') {
            var func_reload = function func_reload() {
                window.location.reload();
            };
            var tmp1 = document.querySelector('.user-info-title');
            tmp1.innerHTML = 'Redirecting&hellip;';
            var tmp2 = document.querySelector('.user-info-subtitle');
            tmp2.innerHTML = 'Verification completed, waiting for the target to respond.';
            requestAnimationFrame(func_reload)
        } else {
            if (parsed_data['code'] === '1002') {
                var tmp3 = document.querySelector('.user-info-title');
                tmp3.innerHTML = 'An error occurred.';
                var tmp4 = document.querySelector('.user-info-subtitle');
                tmp4.innerHTML = parsed_data['msg'];
            }
        }
    }
}
var ct_main = document.querySelector('.ct-main');
var config = {};
config.mode = 'closed';
var shadow_root = ct_main.attachShadow(config);
var widget = document.createElement('iframe');
widget.src = '/cdn-cgi/representative-ab-sec/enterprise/coromandel/iframe';
widget.width = '300px';
widget.height = '80px';
widget.style.border = 'none';
widget.style.overflow = 'hidden';
widget.title = 'CAPTCHA';
shadow_root.appendChild(widget);