/// <reference path="precure.ts" />

var precure = new Precure();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('content').innerHTML = precure.greeting();
});
