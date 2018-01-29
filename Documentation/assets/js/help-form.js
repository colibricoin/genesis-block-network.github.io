'use strict';

//Validation forms
function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach(item => {
        item.addEventListener('input', (e) => {
            if(e.target.value === ''){
                item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', () => {
            item.dataset.touched = true;
        });
        item.addEventListener('blur', () => {
            if (item.value !== '') item.dataset.touched = true;
        });
    });
};

validateForm('.js-form .form-field');

var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function(e){
    submitForm(e, formName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var email = $(formName + ' .js-field-email').val();
    var link = $(formName + ' .js-field-link').val();

    var formData = {
        email: email,
        link: link,
    };

    $.ajax({
        type: "POST",
        url: 'mail.php',
        data: formData,
        success: function () {
            $('.help-form_notification').removeClass('text-hide')
            // console.log('sss');
        },
        error: function () {
            console.log('error');
            //...
        }
    });
}