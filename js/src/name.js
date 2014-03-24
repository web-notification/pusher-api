/*
 * pusher-api
 * https://github.com/web-notification/pusher-api
 *
 * Copyright (c) 2014 KimJiTae
 * Licensed under the GPL-2.0 license.
 */

(function($) {

    // Collection method.
    $.fn.awesome = function() {
        return this.each(function(i) {
            // Do something awesome to each selected element.
            $(this).html('awesome' + i);
        });
    };

    // Static method.
    $.awesome = function(options) {
        // Override default options with passed-in options.
        options = $.extend({}, $.awesome.options, options);
        // Return something awesome.
        return 'awesome' + options.punctuation;
    };

    // Static method default options.
    $.awesome.options = {
        punctuation: '.'
    };

    // Custom selector.
    $.expr[':'].awesome = function(elem) {
        // Is this element awesome?
        return $(elem).text().indexOf('awesome') !== -1;
    };

}(jQuery));
