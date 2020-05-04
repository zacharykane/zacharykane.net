(function onLoad() {
    if(sessionStorage.fontsLoadedFoutWithClass) {
        document.documentElement.className += " fonts-loaded";
        return;
    }
    if('fonts' in document) {
        Promise.all([
            document.fonts.load("600 1em fira-sans-2"),
            document.fonts.load("700 1em fira-sans-2")
        ]).then(function () {
            document.documentElement.className += " fonts-loaded";
            sessionStorage.fontsLoadedFoutWithClass = true;
        });
    }
})();
