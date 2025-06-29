~function(v1, v2, v3, v4, v5, v6) {
    function v7(v8, v9, v10, v11, v13, v14) {
        function v12() {
            v1.location.reload();
        }
        if (v8['isTrusted'] === true) {
            v9 = v1.JSON.parse(v8.data);
            if (v9['code'] === '1001') {
                v10 = v2.querySelector('.user-info-title');
                v10.innerHTML = 'Redirecting&hellip;';
                v11 = v2.querySelector('.user-info-subtitle');
                v11.innerHTML = 'Verification completed, waiting for the target to respond.';
                setTimeout(v12, 500);
            } else {
                if (v9['code'] === '1002') {
                    v13 = v2.querySelector('.user-info-title');
                    v13.innerHTML = 'An error occurred.';
                    v14 = v2.querySelector('.user-info-subtitle');
                    v14.innerHTML = v9['msg'];
                }
            }
        }
    }
    v2 = v1.document;
    v1.addEventListener('message', v7);
    v3 = v2.querySelector('.ct-main');
    v4 = {};
    v4['mode'] = 'closed';
    v5 = v3.attachShadow(v4);
    v6 = v2.createElement('iframe');
    v6.src = '/cdn-cgi/enterprise/captcha';
    v6.width = '290px';
    v6.height = '80px';
    v6.style.border = 'none';
    v6.style.overflow = 'hidden';
    v6.title = 'CAPTCHA';
    v5.appendChild(v6);
}(this);