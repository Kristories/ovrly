/******************** INCLUDE ********************/

//= require ../vendor/jquery/dist/jquery.js
//= require ../vendor/bootstrap/dist/js/bootstrap.js
//= require ../vendor/less.js/dist/less-1.7.0.js
//= require ../vendor/google-code-prettify/src/prettify.js
//= require ../vendor/jquery.smooth-scroll/jquery.smooth-scroll.js

/*************************************************/
$.noConflict();

jQuery(function(){

    jQuery('a').smoothScroll();
    jQuery('body').scrollspy({ target: '#menu .container' });

    jQuery('#menu-fix').affix({
        offset: {
            top: jQuery('#page-hello').outerHeight(true)
        }
    });
	
    prettyPrint();

	generate_ovrly_css();

	jQuery("#upload").on("change", function() {
        generate_ovrly(this);
    });

	jQuery("#custom-download").on('click', function(){
		var custom_color 	= jQuery("#custom-color").val();
		var is_hex			= /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(custom_color);
		var color 			= (is_hex) ? custom_color : "#333";

		jQuery.ajax({
			url			: "assets/vendor/ovrly/less/ovrly.less",
			dataType	: "text",
			success		: function(data) {
				data = data + "@ovrly-default-color:" + color + ";";
				parser = new less.Parser({});
				parser.parse(data, function (error, root) { 
					jQuery('#generator-modal').modal();
					jQuery('#generator-code').text(root.toCSS({
						depends: false,
						compress: true,
						cleancss: false,
						max_line_len: -1,
						optimization: 1,
						silent: false,
						verbose: false,
						lint: false,
						paths: [],
						color: true,
						strictImports: false,
						rootpath: '',
						relativeUrls: false,
						ieCompat: true,
						strictMath: false,
						strictUnits: false
					}));
				});
			}
		});
	});

});



function generate_ovrly(e)
{
    if (e.files && e.files[0])
    {
        var t = new FileReader;
        
        t.readAsDataURL(e.files[0]), t.onload = function(e) {
            var ovrly_default_name  = "ovrly-custom";
            var ovrly_name          = ovrly_default_name;
            var t                   = "." + ovrly_default_name;
            var base                = '@ovrly-default-color: #333;'
                                    + '.ovrly(@color: @ovrly-default-color, @img: ""){'
                                    + 'position: relative;'
                                    + 'z-index: 1;'
                                    +   '&:after{'
                                    +   '    content: "";'
                                    +   '    position: absolute;'
                                    +   '    top: 0;'
                                    +   '    left: 0;'
                                    +   '    bottom: 0;'
                                    +   '    right: 0;'
                                    +   '    z-index: -1;'
                                    +   '    background-image: url(@img);'
                                    +   '    background-repeat: repeat;'
                                    +   '    background-color: rgba(red(@color), green(@color), blue(@color), 0.5);'
                                    +   '}'
                                    + '}';
            var pattern             = '.ovrly-custom(@color: @ovrly-default-color)\n'
                                    + '{\n'
                                    + '    .ovrly(@color, "' + e.target.result + '");\n'
                                    + '}\n'
                                    + t + '{ .ovrly-custom(); }';
            var r                   = base + pattern;

        	// Parser LESS and replace r
            parser = new less.Parser({}), parser.parse(r, function(e, t) {
                r = t.toCSS()
            });

            // Create OVRLY class
            jQuery("#custom-ovrly").text(r);

            // Change .ovrly-plus to ovrly_default_name from #ovrly-generator
            jQuery("#ovrly-generator").removeClass("ovrly-plus").addClass(ovrly_default_name);

            // Send data to #output
            jQuery("#output").text(pattern);

            // Open modal
            jQuery("#generate-button").on('click', function(){
            	jQuery('#generate-modal').modal();
            });

            // Change OVRLY name
            jQuery("#ovrly-name").keyup(function() {
                var e = "ovrly-" + jQuery("#ovrly-name").val();
                jQuery("#output").text(pattern.split(ovrly_default_name).join(e))
            });
        }
    }
}

function generate_ovrly_css()
{
	jQuery("#custom-download").on("click", function() {
        var e = jQuery("#custom-color").val(),
            t = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e),
            n = t ? e : "#333";

        jQuery.ajax({
            url: "https://github.com/Kristories/ovrly/raw/master/less/ovrly.less",
            dataType: 'jsonp',
            success: function(e) {
                var e = e + "@ovrly-default-color:" + n + ";"
                var parser = new less.Parser();

                parser.parse(e, function(e, t) {
                    //jQuery("#generator-modal").modal();
                    jQuery("body").text(t.toCSS());
                })
            }
        });
    });
}