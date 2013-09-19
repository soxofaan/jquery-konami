/* global jQuery */

(function($) {

	// Simple Konami code jQuery plugin.
	$.fn.konami = function(callback) {
		// Keycodes of the Konami code.
		var konamiCode = [38,38,40,40,37,39,37,39,66,65];
		// First key code, cache variable for efficiency.
		var first = konamiCode[0];

		return this.each(function() {
			var cursor = 0;
			// The currently expected keyCode (cache variable to reduced keydown overhead).
			var expected = first;

			$(this).keydown(function(e) {
				if (e.keyCode === expected) {
					// Update cursor and expected for next keydown.
					expected = konamiCode[++cursor];
					if (cursor === konamiCode.length) {
						// Konami!
						callback();
						// Reset
						cursor = 0;
						expected = first;
					}
				}
				else {
					// Reset
					cursor = 0;
					expected = first;
				}
			});
		});
	};

})(jQuery);
