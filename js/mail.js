(function submitted() {
    'use strict';
    windows.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
})();