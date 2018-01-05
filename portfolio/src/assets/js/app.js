import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// // If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// //import './lib/foundation-explicit-pieces';


// $(document).foundation();

import Wallop from 'Wallop';

function initHeader(){
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

		}, 300)
	}
}

function initSlider(){

	var wallop = new Wallop(document.querySelector('.Wallop'));

	// autoplay(3000);

	// function autoplay(interval) {
	//   var lastTime = 0;  
	  
	//   function frame(timestamp) {
	//     var update = timestamp - lastTime >= interval;
	  
	//     if (update) {
	//       wallop.next();
	//       lastTime = timestamp;
	//     }
	  
	//     requestAnimationFrame(frame);
	//   }

	//   requestAnimationFrame(frame);
	// };
}

$(document).ready(function(){

	initHeader();
	initSlider();

})




