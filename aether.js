setTimeout(() => {
    try {
        performance.mark('ct-st-start');
        var zhi1, zhi2, zhi3, zhi4, zhi5, zhi6, zhi7, zhi8, zhi9, zhi10, zhi11
        var aaa = window.document;
        var _frame;
        _frame = aaa.createElement('iframe');
        _frame.height = 1;
        _frame.width = 1;
        function d1() {
            var e = [];
            for (var f = 1; f < 11; f++) {
                var g = _frame.contentDocument.getElementById('pr' + f);
                e.push(g.getClientRects())
            }
            aaa.body.removeChild(_frame);
            zhi1 = JSON.stringify(e)
            other1()
        };
        _frame.onload = d1;
        _frame.srcdoc = '<html><head><style>#pr10,#pr8,#pr9{position:absolute;margin-left:15.9099rem}#pr1{border:2.715px solid green;padding:3.98px;margin-left:12.12px}#pr2{border:2px solid purple;font-size:30px;margin-top:200px;-webkit-transform:skewY(23.1753218deg);-moz-transform:skewY(23.1753218deg);-ms-transform:skewY(23.1753218deg);-o-transform:skewY(23.1753218deg);transform:skewY(23.1753218deg)}#pr3{border:2.89px solid orange;font-size:45px;transform:scale(100000000000000000000009999999999999.99,1.89);margin-top:50px}#pr4{border:2px solid silver;transform:matrix(1.11,2.0001,-1.0001,1.009,150,94.4);-webkit-transform:matrix(.95559,2.13329,-.9842,.98423,150,95);-moz-transform:matrix(.66371,1.94587,-.6987,.98423,150,103.238);-ms-transform:matrix(.5478,1.94587,-.7383,.98423,150,100.569);-o-transform:matrix(.4623,1.83523,-.6734,.81231,150,99.324);position:absolute;margin-top:11.1331px;margin-left:12.1212px;padding:4.4545px;left:239.4141px;top:178.5050px}#pr5{border:2pt solid red;margin-left:42.395pt}caption{border:2px solid #8b0000;font-size:20.99px;margin-left:20.8px}#pr6{border:2px solid #00008b;-webkit-transform:perspective(12890px) translateZ(101.5px);-moz-transform:perspective(12890px) translateZ(101.5px);-ms-transform:perspective(12890px) translateZ(101.5px);-o-transform:perspective(12890px) translateZ(101.5px);transform:perspective(12890px) translateZ(101.5px);padding:12px}#pr7{position:absolute;margin-top:-350.552px;margin-left:.9099rem;border:2px solid #deb887}#pr8{margin-top:-150.552px;border:2px solid #f4a460}#pr9{margin-top:-110.552px;border:2px solid orchid}#pr10{margin-top:-315.552px;border:2px solid #40e0d0}</style></head><div id=pr1>Ssss tttt</div><div id=pr2>TTTT tttt</div><div id=pr3>WW&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ssss tttt</div><div id=pr4>vvvv sssss ttttt tttt</div><table id=pr5><caption>ttttt cccc tttt<thead><tr><th>tttt hhhh<tbody><tr><td>tttt bbbb</table><div id=pr6>ttttt pppp tttt tttt</div><div id=pr7><select><option>sss ooo</select></div><div id=pr8><details><summary>dddd ssss</summary></details></div><div id=pr9><progress max=100 value=49></progress></div><div id=pr10><button type=button></button></div></html>';
        aaa.body.appendChild(_frame)

        function other1() {
            function e() {
                var j = document.createElement('canvas'),
                    k = j.getContext('webgl');
                m = k.getExtension('WEBGL_debug_renderer_info');
                var r = []
                r.push(k.getParameter(k.VENDOR))
                r.push(k.getParameter(k.RENDERER))
                r.push(k.getParameter(m.UNMASKED_VENDOR_WEBGL))
                r.push(k.getParameter(m.UNMASKED_RENDERER_WEBGL))
                return r;
            }
            try {
                zhi2 = e();
            } catch (e) {
                zhi2 = e;
            }



            zhi3 = []
            try {
                zhi3.push(window.performance.navigation.toJSON())
                zhi3.push({
                    10: window.performance.memory.jsHeapSizeLimit,
                    20: window.performance.memory.totalJSHeapSize,
                    30: window.performance.memory.usedJSHeapSize,
                })
            } catch (e) {
                zhi3.push(e)
            }


            var bbc = window.performance.getEntries ? window.performance.getEntries() : window.performance.webkitGetEntries()

            var sss = []
            for (var q = 0; q < bbc.length; q++) {
                sss.push(bbc[q].toJSON())
            }
            zhi3.push(sss)

            function f() {
                var j = document.createElement('canvas');
                var k = [[[3, 11, '#F38020', 10, 14, 93, 48, 115, 111], [4, 60, 58, 32, 29, 1.4441705959829747, .5401125108618993, 4.052233984744969], [1, 16, '#809980', '27.77777777777778px aanotafontaa', 0, 'Ry', 13, 67.25], [2, 3, '#FF6633', 57, 5, 54, 90, 32, 74, 67, 120], [2, 4, '#B3B31A', 79, 0, 1, 49, 103, 67, 45, 125], [4, 57, 57, 15, 8, 1.2273132071162383, 4.1926143018618225, 2.8853539230051624], [1, 14, '#809900', '11.904761904761905px aanotafontaa', 1, '@H1', 30, 74.25]], [[0, 33, 18, 8, 42, 10, 226, '#809900', '#404041'], [0, 77, 98, 2, 27, 30, 206, '#809900', '#404041'], [0, 108, 12, 10, 65, 118, 169, '#1AB399', '#E666B3'], [0, 46, 47, 0, 101, 108, 207, '#4DB380', '#FF4D4D'], [0, 119, 123, 3, 109, 90, 137, '#E6B333', '#3366E6'], [0, 34, 47, 1, 37, 59, 245, '#809900', '#404041']]];
                j.style.display = 'none';
                j.width = 125;
                j.height = 125;
                var l = j.getContext('2d');
                m = k[0];
                n = k[1];
                o = [
                    function (u, v) { return u.beginPath(), u.arc(v[1], v[2], v[3], v[4], v[5]), u.stroke(), !![] },
                    function (u, v) {
                        return u.shadowBlur = v[1], u.shadowColor = v[2], u.font = v[3], v[4] ? u.strokeText(v[5], v[6], v[7]) : u.fillText(v[5], v[6], v[7]), ![]
                    },
                    function (u, v) {
                        return u.shadowBlur = v[1], u.shadowColor = v[2], u.beginPath(), u.moveTo(v[3], v[4]), u.bezierCurveTo(v[5], v[6], v[7], v[8], v[9], v[10]), u.stroke(), !![]
                    },
                    function (u, v) {
                        return u.shadowBlur = v[1], u.shadowColor = v[2], u.beginPath(), u.moveTo(v[3], v[4]), u.quadraticCurveTo(v[5], v[6], v[7], v[8]), u.stroke(), !![]
                    },
                    function (u, v) {
                        return u.beginPath(), u.ellipse(v[1], v[2], v[3], v[4], v[5], v[6], v[7]), u.stroke(), !![]
                    }
                ];
                q = function (u, v) {
                    var w = u.createRadialGradient(v[1], v[2], v[3], v[4], v[5], v[6]); w.addColorStop(0, v[7]), w.addColorStop(1, v[8]), u.fillStyle = w
                };
                for (var r = 0; r < m.length; r++) {
                    var s = n[r]; r < n.length && q(l, s); var t = m[r]; o[t[0]](l, t) && l.fill(), l.shadowBlur = 0
                } return [j.toDataURL(), j.toDataURL()]
            }
            try {
                zhi4 = f();
            } catch (e) {
                zhi4 = e
            }


            function v(c, d) {
                return (
                    d instanceof c['Function'] &&
                    0 <
                    c['Function']['prototype']['toString']
                    ['call'](d)['indexOf']('[native code]')
                );
            }


            function y(c, d) {
                for (
                    d = []; c !== null; d = d['concat'](Object['keys'](c)), c = Object['getPrototypeOf'](c)
                );
                return d;
            }
            (o = {}),
                (o['object'] = 'o'),
                (o['string'] = 's'),
                (o['undefined'] = 'u'),
                (o['symbol'] = 'z'),
                (o['number'] = 'n'),
                (o['bigint'] = 'I'),
                (o['boolean'] = 'b'),
                (s = o);
            function x(e, E, F, G) {
                try {
                    return E[F]['catch'](function () { }), 'p';
                } catch (H) { }
                try {
                    if (null == E[F]) {
                        return void 0 === E[F] ? 'u' : 'x';
                    }
                } catch (I) {
                    return 'i';
                }
                return e['Array']['isArray'](E[F]) ?
                    'a' :
                    E[F] === e['Array'] ?
                        'C' :
                        !0 === E[F] ?
                            'T' :
                            !1 === E[F] ?
                                'F' :
                                ((G = typeof E[F]),
                                    'function' == G ? (v(e, E[F]) ? 'N' : 'f') : s[G] || '?');
            }

            function MmUxb5(E, F, G, H, J, K, L, M, N, O) {
                if (F === null || F === void 0) {
                    return H;
                }
                for (
                    J = y(F),
                    E['Object']['getOwnPropertyNames'] &&
                    (J = J['concat'](
                        E['Object']['getOwnPropertyNames'](F)
                    )),
                    J =
                    E['Array']['from'] && E['Set'] ?
                        E['Array']['from'](new E['Set'](J)) :
                        (function (P, Q) {
                            for (
                                P['sort'](), Q = 0; Q < P['length']; P[Q] === P[Q + 1] ?
                                    P['splice'](Q + 1, 1) :
                                    (Q += 1)
                            );
                            return P;
                        })(J),
                    K = 'nAsAaAb'.split('A'),
                    K = K['includes']['bind'](K),
                    L = 0; L < J['length']; M = J[L],
                    N = x(E, F, M),
                    K(N) ?
                        ((O = N === 's' && !E['isNaN'](F[M])),
                            'd.cookie' === G + M ?
                                I(G + M, N) :
                                O || I(G + M, F[M])) :
                        I(G + M, N),
                    L++
                );
                return H;

                function I(P, Q) {
                    Object['prototype']['hasOwnProperty']['call'](H, Q) ||
                        (H[Q] = []),
                        H[Q]['push'](P);
                }
            }


            var __E, fff
            fff = window['document']['createElement']('iframe');
            fff['style'] = 'display: none';
            fff['tabIndex'] = '-1';
            window['document']['body']['appendChild'](fff);
            __E = fff['contentWindow'];
            zhi5 = {};
            zhi5 = MmUxb5(__E, __E, '', zhi5);
            zhi5 = MmUxb5(__E, __E['clientInformation'] || __E['navigator'], 'n.', zhi5);
            zhi5 = MmUxb5(__E, fff['contentDocument'], 'd.', zhi5);
            window['document']['body']['removeChild'](fff);

            var sadasdas = [
                "architecture",
                "bitness",
                "formFactor",
                "fullVersionList",
                "model",
                "platformVersion",
                "uaFullVersion",
                "wow64"
            ]

            navigator.userAgentData.getHighEntropyValues(sadasdas).then(data => {
                zhi6 = JSON.stringify(data)
                ffa()
            });


        }

        function ffa() {
            zhi7 = (function () {
                var dtoef = 0;
                var errorObject = new Error();
                Object.defineProperty(errorObject, 'stack', {
                    get: function () {
                        dtoef++;
                        return '';
                    },
                    configurable: false,
                    enumerable: false
                });
                console.debug(errorObject);
                return dtoef;
            })();
            zhi8 = new Error().stack
            zhi9 = '225-f97MDaVm1RpmxIHrXVjOvHre6fScPgSB'
            zhi10 = Date.now()
            performance.mark('ct-st-end');
            zhi11 = performance.measure('ct-st-pf', 'ct-st-start', 'ct-st-end').duration;
            fufuc = {
                10: zhi1,
                20: zhi2,
                30: zhi3,
                40: zhi4,
                50: zhi5,
                60: [zhi6, zhi7, zhi8, zhi9, zhi10, zhi11]
            }
            console.log(fufuc)
            fufuc = JSON.stringify(fufuc)

            fufud11 = encrypt(fufuc)
            fufuc = '';


            setTimeout(() => {
                fetch('/cdn-cgi-page/opt/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        225: fufud11
                    })
                })
            });
            function encrypt(input) {
                let h = 32;
                let j = "225-f97MDaVm1RpmxIHrXVjOvHre6fScPgSB";
                for (let m = 0; m < j.length; m++) {
                    h ^= j.charCodeAt(m);
                }
                let encryptedChars = [];
                for (let g = 0; g < input.length; g++) {
                    let k = input.charCodeAt(g);
                    let dosapdopsa = g % 65535
                    let sadsadsa = k + h
                    let dsfds = sadsadsa + dosapdopsa
                    let encryptedChar = dsfds % 255;
                    encryptedChars.push(String.fromCharCode(encryptedChar));
                }
                let encryptedString = encryptedChars.join('');
                return btoa(encryptedString);
            }
        }

    }
    catch (e) { alert(e) }

});
