// ==UserScript==
// @name         全自动TTS朗读小说(笔趣阁)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  全自动调用TTS朗读小说，解放双手!
// @author       Zero.
// @match        http://www.108shu.com/*
// @grant        none
// @run-at document-end
// @license AGPL-3.0 license
// ==/UserScript==

(function () {
    'use strict';
    window.addEventListener('load', function () {
        console.log('页面加载完成，开始朗读');
        const pageText = document.querySelector("#container > div.row.row-detail.row-reader > div > div.reader-main > h1").textContent + document.querySelector("#content").textContent;
        window.speechSynthesis.onvoiceschanged = function () {
            var voices = window.speechSynthesis.getVoices();
            console.log(pageText);
            const msg = new SpeechSynthesisUtterance(pageText);
            msg.voice = voices[61];
            msg.onend = function (event) {
                console.log('朗读已完成');
                document.querySelector('#next_url').click();
            };
            window.speechSynthesis.speak(msg);
        };
    });

})();