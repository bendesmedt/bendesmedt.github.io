class NavigationHeader extends HTMLElement {
    connectedCallback() {
        const curr = this.getAttribute('current');
        const menu_items = ['about', 'toolkit', 'contact'];
        const menu_src = ['about.html', 'toolkit.html', 'contact.html'];
        let html_menu = '';

        for (let i = 0; i < menu_items.length; i++) {
            if(curr.toLowerCase().localeCompare(menu_items[i].toLowerCase()) != 0){
                html_menu += '<li class="link-item"><a class="link" href="';
                html_menu += menu_src[i];
                html_menu += '">';
            } else {
                html_menu += '<li class="link-item" id="current" ><a class="link" >';
            }
            html_menu += menu_items[i];
            html_menu += '</a></li>\n';
        }

        this.setInnerHtml(this, '<header class="nav-header">\n' +
            '    <a href="index.html" class="logo-container">\n' +
            '        <div class="wrapper">\n' +
            '            <span id="ben">b</span>\n' +
            '            <span id="slash">/</span>\n' +
            '            <span id="type-target">d</span>\n' +
            '        </div>\n' +
            '    </a>\n' +
            '    <ul class="links">\n' +
            html_menu +
            '    </ul>\n    <a href="./benjamin-desmedt-cv.pdf" download title="Download my resume"><img' +
            ' class="dl-button"' +
            ' src="../images/download.png" \n                                                     alt="download button"/></a>\n' +
            '<style>\n' +
            '        :root {\n' +
            '            --dark-color: #232425;\n' +
            '            --orange-color: #e78d05;\n' +
            '        }\n' +
            '       @font-face {\n' +
            '           font-family: "Inconsolata Extra Expanded Light";\n' +
            '           src: url("../fonts/Inconsolata-ExtraExpandedLight.ttf");\n' +
            '        }' +
            '        html {\n' +
            '            scroll-behavior: smooth;\n' +
            '            -ms-overflow-style: none;\n' +
            '            scrollbar-width: none;\n' +
            '        }\n' +
            '        html::-webkit-scrollbar {\n' +
            '            display: none;\n' +
            '        }\n' +
            '        html, body, div, span, ul, li, section {\n' +
            '            margin: 0;\n' +
            '            padding: 0;\n' +
            '            border: 0;\n' +
            '            font-family: "Inconsolata Extra Expanded Light", monospace;\n' +
            '            font-size: 16px;\n' +
            '        }\n' +
            '        a {\n' +
            '            text-decoration: none;\n' +
            '        }\n' +
            '        body {\n' +
            '            background: var(--dark-color);\n' +
            '            color: white;\n' +
            '            // width: 100%;\n' +
            '        }\n' +
            '        .nav-header {\n' +
            '            position: fixed;\n' +
            '            top: 0;\n' +
            '            display: flex;\n            left: 0;\n            right: 0;\n' +
            '            // width: 100%;\n' +
            '            margin: 0;\n' +
            '            padding: 0;\n' +
            '            background: var(--orange-color);\n' +
            '            height: 80px;\n            z-index:300;\n' +
            '        }\n' +
            '        .nav-header img {\n' +
            '            position: absolute;\n' +
            '            top:25px;\n' +
            '            right: 25px;\n' +
            '            height: 30px;\n' +
            '            cursor: pointer;\n' +
            '        }\n' +
            '        .nav-header .logo-container {\n' +
            '            position: absolute;\n' +
            '            left: 16px;\n' +
            '            top: 6px;\n' +
            '            height: 100%;\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper {\n' +
            '            display: inline-flex;\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper span {\n' +
            '            color: white;\n' +
            '            font-family: "Inconsolata Extra Expanded Light", monospace;\n' +
            '            font-size: 1.6em;\n' +
            '            letter-spacing: -0.08em;\n' +
            '            position: relative;\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper span:hover {\n' +
            '            color: var(--dark-color);\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper #ben {\n' +
            '            margin: 0.3em -0.4em 0 0;\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper #slash {\n' +
            '            margin: 0;\n' +
            '            font-family: "Inconsolata Condensed Light", monospace;\n' +
            '            font-size: 4em;\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper #type-target {\n' +
            '            color: var(--dark-color);\n' +
            '            margin: 1.2em 0 0 -0.3em;\n' +
            '            left: 0;\n' +
            '            text-align: left;\n' +
            '        }\n' +
            '        .nav-header .logo-container .wrapper #type-target:hover {\n' +
            '            color: white;\n' +
            '        }\n' +
            '        .nav-header .links {\n' +
            '            list-style: none;\n' +
            '            position: relative;\n' +
            '            height: 100%;\n' +
            '            top: 0;\n' +
            '            left: 50%;\n' +
            '            margin-left: 24px;\n' +
            '            display: block;\n' +
            '            transform: translateX(-50%);\n' +
            '        }\n' +
            '        .nav-header .links .link-item {\n' +
            '            position: relative;\n' +
            '            padding: 0.5em;\n' +
            '            float: left;\n' +
            '            display: flex;\n' +
            '            top: 2.5em;\n' +
            '            transform: translateY(-50%);\n' +
            '            margin-left: 1em;\n' +
            '        }\n' +
            '        .nav-header .links .link-item .link {\n' +
            '            color: var(--dark-color);\n' +
            '            font-family: "Inconsolata Extra Expanded Light", monospace;\n' +
            '            font-size: 1.5em;\n' +
            '            letter-spacing: -0.1em;\n' +
            '        }\n\n        .nav-header .links #current a{\n            color: white;\n        }\n        \n' +
            '        .nav-header .links .link-item .link:hover {\n' +
            '            color: white;\n' +
            '        }\n        \n        .dl-button {\n            \n        }\n' +
            '        @media only screen and (min-width: 600px) {\n' +
            '            #ben:after {\n' +
            '                content: "en";\n' +
            '            }\n' +
            '            .link {\n' +
            '                font-size: 2em !important;\n' +
            '            }\n' +
            '        }\n' +
            '        @media only screen and (min-width: 960px) {\n' +
            '            #type-target:after {\n' +
            '               content: "";' +
            '               animation-name: typer-anim, blink;\n ' +
            '               animation-duration: 6s;\n ' +
            '               animation-delay: 0s;\n' +
            '               animation-timing-function: linear;\n ' +
            '               animation-iteration-count: infinite;\n ' +
            '           }\n ' +
            '       }\n ' +
            '       @keyframes blink {\n' +
            '            0%, 10%, 12%, 22%, 32%, 42%, 66%, 76%, 86%, 96%, 100%  {\n' +
            '                border-right: 1.2px solid var(--dark-color);\n' +
            '            }\n' +
            '            17%, 27%, 37%, 47%, 49%,71%, 81%, 91%, 99% {\n' +
            '                border-right: none;\n' +
            '            }\n' +
            '        }\n ' +
            '       @keyframes typer-anim {\n' +
            '           0%, 51%, 100% {\n' +
            '               content: "";\n' +
            '           }\n  ' +
            '           2%, 52% {\n' +
            '               content: "e";\n' +
            '           }\n   ' +
            '           4% {\n   ' +
            '               content: "es";\n' +
            '           }\n' +
            '           6% {\n' +
            '               content: "esm";\n' +
            '           }\n' +
            '           8% {\n' +
            '               content: "esme";\n' +
            '           }\n      ' +
            '           10% {\n' +
            '               content: "esmed";\n' +
            '           }\n' +
            '           12%, 49% {\n' +
            '               content: "esmedt";\n' +
            '           }\n' +
            '           54% {\n' +
            '               content: "ev";\n' +
            '           }\n' +
            '           56% {\n' +
            '               content: "eve";\n' +
            '           }\n' +
            '           58% {\n' +
            '               content: "evel";\n' +
            '           }\n' +
            '           60% {\n' +
            '               content: "evelo";\n' +
            '           }\n            ' +
            '           62% {\n' +
            '               content: "evelop";\n' +
            '           }\n' +
            '           64% {\n' +
            '               content: "evelope";\n' +
            '           }\n' +
            '           66%, 99% {\n' +
            '               content: "eveloper";\n' +
            '           }\n' +
            '        }\n' +
            '    </style>\n' +
            '</header>');

    }

    setInnerHtml(elm, html) {
        elm.innerHTML = html;
        Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes)
                .forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }
}

customElements.define("navigation-header", NavigationHeader)