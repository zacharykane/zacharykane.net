(function main() {
    const currentYear = document.querySelector('.currentYear');
    currentYear.textContent = new Date().getFullYear();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js');
    } else {
        console.log('Service Worker is not supported in your browser');
    }
})();
