document.getElementById('content-library').innerHTML = '<app-root></app-root>';

var script1 = document.createElement("script");
script1.type = "text/javascript";
script1.src = 'https://mcmastercce.github.io/avenue-content-library-app/runtime.js';
document.getElementsByTagName("head")[0].appendChild(script1);

var script2 = document.createElement("script");
script2.type = "text/javascript";
script2.src = 'https://mcmastercce.github.io/avenue-content-library-app/polyfills.js';
document.getElementsByTagName("head")[0].appendChild(script2);

var script3 = document.createElement("script");
script3.type = "text/javascript";
script3.src = 'https://mcmastercce.github.io/avenue-content-library-app/main.js';
document.getElementsByTagName("head")[0].appendChild(script3);