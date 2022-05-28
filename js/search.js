var wHeight = window.innerHeight;
var sb = document.getElementById("search-button");
var closeSB = document.getElementById("mk-fullscreen-close-button");
var SearchOverlay = document.getElementById("mk-search-overlay");
var searchBar = document.getElementById("mk-fullscreen-searchform");
searchBar.style.top = wHeight / 2 + "px";
console.log(wHeight);
window.addEventListener(
    "resize",
    function () {
        console.log(wHeight);
        wHeight = window.innerHeight;
        searchBar.style.top = wHeight / 2 + "px";
    },
    true
);
document.addEventListener(
    "click",
    function () {
        sb.onclick = function () {
            console.log("Opened Search for Element: ");
            SearchOverlay.classList.add("mk-fullscreen-search-overlay-show");
        };
        closeSB.onclick = function () {
            console.log("Closed Search for Element: " + closeSB);
            SearchOverlay.classList.remove("mk-fullscreen-search-overlay-show");
        };
    },
    true
);
