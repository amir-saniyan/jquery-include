/**
 * jquery-include - This jQuery plugin is here to help developers include
 *                  another html file in a html file.
 *
 * Copyright (C) 2014 Amir Saniyan <amir_saniyan@yahoo.com>
 */
(function ($) {
	$.include = function (url) {
		$.ajax({
			url: url,
			async: false,
			success: function (result) {
				document.write(result);
			}
		});
	};
}(jQuery));
