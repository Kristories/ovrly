// @codekit-prepend "../vendor/bootstrap/dist/js/bootstrap.js"; 
// @codekit-prepend "../vendor/minicolors/jquery.minicolors.js"; 

/*!
 * jquery.addrule.js 0.0.1 - https://gist.github.com/yckart/5563717/
 * Add css-rules to an existing stylesheet.
 *
 * @see http://stackoverflow.com/a/16507264/1250044
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/05/12
 */

(function ($) {
    window.addRule = function (selector, styles, sheet) {
        if (typeof styles !== "string") {
            var clone = "";
            for (var style in styles) {
                var val     = styles[style];
                var style   = style.replace(/([A-Z])/g, "-$1").toLowerCase(); 
                clone += style + ":" + (style === "content" ? '"' + val + '"' : val) + "; ";
            }
            styles = clone;
        }
        sheet = sheet || document.styleSheets[0];
        sheet.addRule(selector, styles);
        return this;
    };
    if ($) {
        $.fn.addRule = function (styles, sheet) {
            addRule(this.selector, styles, sheet);
            return this;
        };
    }
}(window.jQuery));

$(function () {

    $('#demo li').tooltip({
        animation: false,
        placement: 'top'
    });

    $('#ovrly').change(function(){
        var ovrly = $(this).val();
        $("#site-wrapper").removeClass();
        $("#site-wrapper").addClass(ovrly);
    });

    $('#color-picker').minicolors({
        position: 'top right',
        theme: 'bootstrap',
        change: function(hex, opacity) {
            var rgb     = $(this).minicolors('rgbObject');
            var rgba    = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', .6)';
            $("#site-wrapper:after").addRule({ backgroundColor: rgba });
        }
    });

})