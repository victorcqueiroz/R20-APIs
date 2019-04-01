// Created By: Victor Queiroz

//var wildmagic = Math.round(Math.random()*100);
// Created By: James Mowery
// Translated by: Victor Queiroz

var wildmagic = 0;
var interval = null;

var Magic = Magic || (function() {
    'use strict';

    var version = "0.0.1";
});

function countDown() {
    'use strict';

    wildmagic = 2;

    if (wildmagic == 2) {
        sendChat("Magia Selvagem!" (wildmagic): Role nessa tabela, no começo de cada um dos seus turnos pelo proximo minuto, ignorando esse resultado em rolagens subsequentes.");
    }
}

on("chat:message", function(msg) {
    'use strict'

    // When the GM types !t <number>, start a timer for <number> seconds
    if(msg.type == "api" && msg.content.indexOf("!t ") !== -1) {
        // Clear the previous timer if running.
        clearInterval(interval);

        log("Detected Typing");
        // Extracts the number of seconds in the command
        wildmagic = Number(msg.content.replace("!wildmagic ", ""));
        log(seconds);

        // Begin the countdown
        interval = setInterval(countDown, 1000, wildmagic);

        // Inform the players that the timer has started
               sendChat("GM", "<div style='height:32px; border:1px solid #CCC; \
            font-weight: bold;'><img src=\
            'https://cdn0.iconfinder.com/data/icons/feather/96/clock-512.png' \
            width='32px' height='32px' style='float: left;'> \
            <div style='float: left; height: 16px; \
            vertical-align:middle; margin: 8px 0 0 10px;'>\
            Cronometro iniciado!</div></div>");
    }
    // When the GM types !t, start a timer for a default number of seconds
    else if(msg.type == "api" && msg.content.indexOf("!wildmagic") !== -1) {
        clearInterval(interval);    // Clear the previous timer if running.
        wildmagic = 60;               // Sets the default number of seconds

        // Begins the countdown
        interval = setInterval(countDown, 1000, wildmagic);
        sendChat("GM", "<div style='height:32px; border:1px solid #CCC; \
            font-weight: bold;'><img src=\
            'https://cdn0.iconfinder.com/data/icons/feather/96/clock-512.png' \
            width='32px' height='32px' style='float: left;'> \
            <div style='float: left; height: 16px; \
            vertical-align:middle; margin: 8px 0 0 10px;'>\
            Cronometro iniciado!</div></div>");
    }
});

on("ready", function() {
    'use strict';

});
