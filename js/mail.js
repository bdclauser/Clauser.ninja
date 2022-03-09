(function submitted() {
    'use strict';
    window.addEventListener('load', function() {
        var form = document.getElementsByTagName('form')
        formaddEventListener('submit', function(event){
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() === true) {

            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();