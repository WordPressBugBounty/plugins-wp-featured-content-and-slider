( function($) {

	'use strict';

	jQuery(window).on('elementor/frontend/init', function() {

		elementorFrontend.hooks.addAction( 'frontend/element_ready/wp-widget-text.default', wpfcas_elementor_init );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/shortcode.default', wpfcas_elementor_init );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/text-editor.default', wpfcas_elementor_init );

		/* Tabs Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/tabs.default', function($scope) {

			/* Tweak for slick slider */
			$scope.find('.featured-content-slider').each(function( index ) {

				var slider_id = $(this).attr('id');
				$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

				wpfcas_slider_init();

				setTimeout(function() {

					/* Tweak for slick slider */
					if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
						$('#'+slider_id).slick( 'setPosition' );
						$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
					}
				}, 300);
			});
		});

		/* Accordion Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/accordion.default', function($scope) {

			/* Tweak for slick slider */
			$scope.find('.featured-content-slider').each(function( index ) {

				var slider_id = $(this).attr('id');
				$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

				wpfcas_slider_init();

				setTimeout(function() {

					/* Tweak for slick slider */
					if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
						$('#'+slider_id).slick( 'setPosition' );
						$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
					}
				}, 300);
			});
		});

		/* Toggle Element */
		elementorFrontend.hooks.addAction( 'frontend/element_ready/toggle.default', function($scope) {

			/* Tweak for slick slider */
			$scope.find('.featured-content-slider').each(function( index ) {

				var slider_id = $(this).attr('id');
				$('#'+slider_id).css({'visibility': 'hidden', 'opacity': 0});

				wpfcas_slider_init();

				setTimeout(function() {

					/* Tweak for slick slider */
					if( typeof(slider_id) !== 'undefined' && slider_id != '' ) {
						$('#'+slider_id).slick( 'setPosition' );
						$('#'+slider_id).css({'visibility': 'visible', 'opacity': 1});
					}
				}, 300);
			});
		});
	});

	/**
	 * Initialize Plugin Functionality
	 */
	function wpfcas_elementor_init() {
		wpfcas_slider_init();
	}
})(jQuery);