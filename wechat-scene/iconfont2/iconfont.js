(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-yinle" viewBox="0 0 1024 1024">'+""+'<path d="M836.871577 375.887996c-3.254114-9.105379-12.440333-14.693654-22.014386-13.397125-5.398964 0.728594-10.8143 1.099031-16.09456 1.099031-30.632671 0-59.403948-12.06478-87.960331-36.882002-23.542182-20.458961-46.576805-49.392944-70.427002-88.465844-1.243317-2.033309-2.52245-4.155646-3.845585-6.347568-21.959128-36.402071-58.71117-97.327676-134.814452-97.327676-34.629705 0-73.847915 13.231349-116.562762 39.328727-7.902994 4.827959-11.456936 14.262842-9.024537 22.959921 0.041956 0.170892 0.064468 0.340761 0.109494 0.51063l114.733091 427.559842c-26.468838-14.343683-58.395992-21.896706-92.761684-21.896706-21.032012 0-42.3659 2.858094-63.415308 8.497535-47.448662 12.725836-88.650039 38.316677-116.015294 72.061222-28.906353 35.645848-39.232536 76.158541-29.075199 114.075105 7.979742 29.794583 27.798113 54.791907 57.313334 72.28942 27.438932 16.267499 61.318554 24.866341 97.975429 24.866341 21.039175 0 42.380226-2.861164 63.427588-8.504698 47.448662-12.715603 88.655156-38.303374 116.028597-72.04792 28.915563-35.645848 39.247886-76.159564 29.095665-114.088408-0.005117-0.01842-0.010233-0.034792-0.01535-0.053212L421.518754 208.175273c38.267559 0.932232 61.504796 45.989427 86.086657 93.671403 6.255471 12.133342 12.725836 24.681122 19.449981 36.357046 18.60473 32.285311 41.213657 57.792241 67.200518 75.81164 29.313629 20.326954 62.196551 30.634718 97.735975 30.634718 42.561351 0 88.431052-14.95562 136.335085-44.450375C836.561515 395.131269 840.123644 384.992351 836.871577 375.887996zM492.661048 788.476869c-21.978571 27.095102-55.658647 47.798633-94.836949 58.298777-17.594727 4.716418-35.369555 7.107885-52.830229 7.107885-58.530045 0-105.046474-26.849508-115.750257-66.812685-6.674003-24.916483 0.900509-52.510958 21.329794-77.70271 21.971407-27.094078 55.647391-47.801702 94.820576-58.306964 17.58961-4.711302 35.360346-7.100722 52.817949-7.100722 58.538231 0 105.072057 26.850531 115.796306 66.803475l0.005117 0.01842C520.676102 735.695758 513.093403 763.288187 492.661048 788.476869zM691.991886 403.717831c-36.468586 0-88.534406-14.911618-129.469724-85.946464-6.246261-10.847046-12.216229-22.424732-18.534122-34.681894-20.020986-38.833447-41.954531-81.373309-76.202543-102.464673 12.047384-3.41068 23.37436-5.125741 33.930787-5.125741 23.045879 0 42.979884 8.203846 60.944024 25.080212 16.567327 15.565511 28.907377 36.021401 38.822191 52.457746 1.366114 2.264577 2.688225 4.455475 3.964288 6.544043 26.066679 42.701544 51.745525 74.765821 78.508052 98.023524 19.535939 16.977673 39.902802 29.390377 60.933791 37.168528C726.458885 400.721591 708.78741 403.717831 691.991886 403.717831z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)