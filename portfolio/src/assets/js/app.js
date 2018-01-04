import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// // If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// //import './lib/foundation-explicit-pieces';


// $(document).foundation();

$(document).ready(function(){
	var header = $('.floating-header');
	var article = $('#article')

	if(typeof header[0]!== 'undefined' && typeof article[0] !== 'undefined' ) {

		var currentTop = 0
		
		setInterval(function(){
			var articleTop = article[0].getBoundingClientRect().top;

			if(articleTop < currentTop || articleTop == 0) {
				header.addClass('hidie');
			} else if (articleTop > currentTop)	{
				header.removeClass('hidie');
			}

			currentTop = articleTop;

		}, 1000)
	}

})




