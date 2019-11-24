var codeAuthority = codeAuthority || {};

$(document).ready(function () {

    codeAuthority.contactForm = {

        validate: function () {
            var $form = $('#contact-form')[0];
            var $firstName = $('#contact-form .first-name');
            var $lastName = $('#contact-form .last-name');
            var $email = $('#contact-form .email');
            var $phone = $('#contact-form .phone');
            var $captcha = $('#contact-form .captcha');
            var $contactFormBtn = $('#contact-form input[type="submit"]');

            $contactFormBtn.on('click', function (e) {

                var isFirstNameValid = codeAuthority.contactForm.validateFirstName($firstName);
                var isLastNameValid = codeAuthority.contactForm.validateLastName($lastName);
                var isEmailValid = codeAuthority.contactForm.validateEmail($email);
                var isPhoneValid = codeAuthority.contactForm.validatePhone($phone);
                var isCaptchaValid = codeAuthority.contactForm.validateCaptcha($captcha);

                var isFormValid = isFirstNameValid
                    && isLastNameValid
                    && isEmailValid
                    && isPhoneValid
                    && isCaptchaValid;

                if (!isFormValid) {
                    e.preventDefault();
                }
                else {
                    $contactFormBtn.prop("disabled", true);
                    $form.submit();
                }
            });
        },

        validateFirstName: function (name) {
            var isVerified = name[0]
                && name[0].value.length >= name[0].minLength
                && name[0].value.length <= name[0].maxLength;

            if (isVerified) {
                name.siblings('.error').removeClass('show-error');
                return true
            }
            else {
                name.siblings('.error').addClass('show-error');
                return false;
            }
        },

        validateLastName: function (name) {
            var isVerified = name[0]
                && name[0].value.length >= name[0].minLength
                && name[0].value.length <= name[0].maxLength;

            if (isVerified) {
                name.siblings('.error').removeClass('show-error');
                return true
            }
            else {
                name.siblings('.error').addClass('show-error');
                return false;
            }
        },

        validateEmail: function (email) {
            var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var isEmail = emailRegex.test(email[0].value);

            var isVerified = email[0]
                && email[0].value.length >= email[0].minLength
                && email[0].value.length <= email[0].maxLength
                && isEmail;

            if (isVerified) {
                email.siblings('.error').removeClass('show-error');
                return true
            }
            else {
                email.siblings('.error').addClass('show-error');
                return false;
            }
        },

        validatePhone: function (phone) {
            if (phone[0].value) {
                var isVerified = phone[0]
                    && phone[0].value.length >= phone[0].minLength
                    && phone[0].value.length <= phone[0].maxLength;

                if (isVerified) {
                    phone.siblings('.error').removeClass('show-error');
                    return true
                }
                else {
                    phone.siblings('.error').addClass('show-error');
                    return false;
                }
            }
            else {
                return true;
            }
        },

        validateCaptcha: function (captcha) {
            if (captcha.find('.captcha-answer')[0].value === "2") {
                captcha.find('.error').removeClass('show-error');
                return true
            }
            else {
                captcha.find('.error').addClass('show-error');
                return false;
            }
        }
    }

    codeAuthority.contactForm.validate();
});