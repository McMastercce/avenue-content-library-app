window.databaseHost = 'mcmastercce';
window.databaseRepoPath = 'avenue-content-library-database';

document.getElementById('content-library').innerHTML = '<app-root></app-root>';

var script1 = document.createElement("script");
script1.src = 'https://RickyHaror.github.io/content-library-app/runtime.js';
document.getElementsByTagName("body")[0].appendChild(script1);

var script2 = document.createElement("script");
script2.src = 'https://RickyHaror.github.io/content-library-app/polyfills.js';
document.getElementsByTagName("body")[0].appendChild(script2);

var script3 = document.createElement("script");
script3.src = 'https://RickyHaror.github.io/content-library-app/main.js';
document.getElementsByTagName("body")[0].appendChild(script3);
