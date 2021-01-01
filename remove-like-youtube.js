// Remove todos os likes do Youtube
// Acesse a página https://www.youtube.com/playlist?list=LL
// Abra o console do navegador e execute o código abaixo

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteLikedVideos() {
    'use strict';
    var items = document.querySelectorAll('ytd-menu-renderer > yt-icon-button.dropdown-trigger > button[aria-label]');
    var out;

    for (var i = 0; i < items.length; i++) {
        items[i].click();
        out = setTimeout(function () {
            if (document.querySelector('paper-listbox.style-scope.ytd-menu-popup-renderer').lastElementChild) {
                document.querySelector('paper-listbox.style-scope.ytd-menu-popup-renderer').lastElementChild.click();
            }
        }, 100);
        await sleep(500); // sleep cause browser can not handle the process
        clearTimeout(out);
    }
}

deleteLikedVideos();