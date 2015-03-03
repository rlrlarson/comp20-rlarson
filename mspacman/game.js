/*jslint browser:true */
function init() {
    "use strict";
    var canvas = document.getElementById('game_canvas'), ctx = canvas.getContext('2d'), img = new Image();

    img.src = "pacman10-hp-sprite.png";
    img.onload = function () {
        ctx.drawImage(img, 313, 0, 488, 138, 0, 0, 488, 138);
        ctx.drawImage(img, 83, 23, 20, 18, 222, 63, 20, 18);
    };
}