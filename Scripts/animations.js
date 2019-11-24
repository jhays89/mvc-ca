var codeAuthority = codeAuthority || {};
    
$(document).ready(function () {

    codeAuthority.animate = function () {
        var animatedElements = $('.animated');

        for (var i = 0; i < animatedElements.length; i++) {
            var $animatedElement = $(animatedElements[i]);

            if ($animatedElement.hasClass('bottom-to-top')) {
                $animatedElement.addClass('slide');
            }
        }
    };

    codeAuthority.animate();
});