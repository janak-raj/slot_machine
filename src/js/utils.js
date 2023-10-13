var mainLoaderTiming, gameLoaderTiming;
        
function runMainLoader() {
    mainLoaderTiming = setTimeout(revealWelcomeScreen, 12000);
}

function runGameLoader() {
    gameLoaderTiming = setTimeout(revealGameScreen, 20000);
}

function revealWelcomeScreen() {
    document.getElementById("mainLoader").style.display = "none";
    document.getElementById("start").style.display = "block";
}

function revealGameScreen() {
    document.getElementById("gameLoader").style.display = "none";
    document.getElementById("window").style.display = "block";
}