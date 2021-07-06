(function fonts() {
    if (sessionStorage.fontsLoadedFoutWithClass) {
        document.documentElement.classList.add('tk-fira-sans-2');
        return;
    }
    if ('fonts' in document) {
        Promise.all([
            document.fonts.load('600 1em fira-sans-2'),
            document.fonts.load('700 1em fira-sans-2'),
        ]).then(function () {
            document.documentElement.classList.add('tk-fira-sans-2');
            sessionStorage.fontsLoadedFoutWithClass = true;
        });
    }
})();
