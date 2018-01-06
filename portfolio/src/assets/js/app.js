import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;

// import Foundation from 'foundation-sites';
// // If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// //import './lib/foundation-explicit-pieces';


// $(document).foundation();

// (function(window){
//     function define_library() {
//         var vanillaZoom = {};
//         vanillaZoom.init = function(el) {

//             var container = document.querySelector(el);
//             if(!container) {
//                 console.error('No container element. Please make sure you are using the right markup.');
//                 return;
//             }

//             var firstSmallImage = container.querySelector('.small-preview');
//             var zoomedImage = container.querySelector('.zoomed-image');

//             if(!zoomedImage) {
//                 console.error('No zoomed image element. Please make sure you are using the right markup.');
//                 return;
//             }

//             if(!firstSmallImage) {
//                 console.error('No preview images on page. Please make sure you are using the right markup.');
//                 return;
//             }
//             else {
//                 // Set the source of the zoomed image.
//                 zoomedImage.style.backgroundImage = 'url('+ firstSmallImage.src +')';
//             }   

//             // Change the selected image to be zoomed when clicking on the previews.
//             container.addEventListener("click", function (event) {
//                 var elem = event.target;

//                 if (elem.classList.contains("small-preview")) {
//                     var imageSrc = elem.src;
//                     zoomedImage.style.backgroundImage = 'url('+ imageSrc +')';
//                 }
//             });
            
//             // Zoom image on mouse enter.
//             zoomedImage.addEventListener('mouseenter', function(e) {
//                 this.style.backgroundSize = "250%"; 
//             }, false);


//             // Show different parts of image depending on cursor position.
//             zoomedImage.addEventListener('mousemove', function(e) {
                
//                 // getBoundingClientReact gives us various information about the position of the element.
//                 var dimentions = this.getBoundingClientRect();

//                 // Calculate the position of the cursor inside the element (in pixels).
//                 var x = e.clientX - dimentions.left;
//                 var y = e.clientY - dimentions.top;

//                 // Calculate the position of the cursor as a percentage of the total width/height of the element.
//                 var xpercent = Math.round(100 / (dimentions.width / x));
//                 var ypercent = Math.round(100 / (dimentions.height / y));

//                 // Update the background position of the image.
//                 this.style.backgroundPosition = xpercent+'% ' + ypercent+'%';
            
//             }, false);


//             // When leaving the container zoom out the image back to normal size.
//             zoomedImage.addEventListener('mouseleave', function(e) {
//                 this.style.backgroundSize = "cover"; 
//                 this.style.backgroundPosition = "center"; 
//             }, false);

//         }
//         return vanillaZoom;
//     }

//     // Add the vanillaZoom object to global scope.
//     if(typeof(vanillaZoom) === 'undefined') {
//         window.vanillaZoom = define_library();
//     }
//     else{
//         console.log("Library already defined.");
//     }
// })(window);

(function(window){
    function define_library() {
        var zoomEnable = {};
        zoomEnable.init = function(el) {

            var images = document.querySelectorAll(el);
            if(!images) {
                console.log('No images to zoom');
                return;
            }

            for(var i = 0, j = images.length; i<j; i++) {

                let k = i;

                // Zoom image on mouse enter.
                images[k].addEventListener('mouseenter', function(e) {
                    this.style.backgroundSize = "250%"; 
                }, false);


                // Show different parts of image depending on cursor position.
                images[k].addEventListener('mousemove', function(e) {
                    
                    // getBoundingClientReact gives us various information about the position of the element.
                    var dimentions = this.getBoundingClientRect();

                    // Calculate the position of the cursor inside the element (in pixels).
                    var x = e.clientX - dimentions.left;
                    var y = e.clientY - dimentions.top;

                    // Calculate the position of the cursor as a percentage of the total width/height of the element.
                    var xpercent = Math.round(100 / (dimentions.width / x));
                    var ypercent = Math.round(100 / (dimentions.height / y));

                    // Update the background position of the image.
                    this.style.backgroundPosition = xpercent+'% ' + ypercent+'%';
                
                }, false);


                // When leaving the container zoom out the image back to normal size.
                images[k].addEventListener('mouseleave', function(e) {
                    this.style.backgroundSize = "cover"; 
                    this.style.backgroundPosition = "center"; 
                }, false);
            }

        }
        return zoomEnable;
    }

    // Add the vanillaZoom object to global scope.
    if(typeof(zoomEnable) === 'undefined') {
        window.zoomEnable = define_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);

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

	zoomEnable.init('.zoom-us');

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

    console.log("And I can code too! I have worked as a web developer before and I am currently getting my hand dirty with Python and PHP now!");
    console.log("I am looking for summer internships for Summer 2018!");
}

$(document).ready(function(){

	initHeader();
	initSlider();

})




