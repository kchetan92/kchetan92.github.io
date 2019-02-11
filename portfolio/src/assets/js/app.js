import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;
import './console_image'

const consoleImage = "/assets/img/console.gif";

(function(window){
    function define_library() {
        var zoomEnable = {};
        zoomEnable.init = function(el) {

            var images = document.querySelectorAll(el);

            if(!images) {
                // console.log('No images to zoom');
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

    function autoplay(interval, wallop) {
      var lastTime = 0;  
      
      function frame(timestamp) {
        var update = timestamp - lastTime >= interval;
      
        if (update) {
          wallop.next();
          lastTime = timestamp;
        }
      
        requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    };

    var wallop = document.querySelectorAll('.Wallop');

    if(wallop) {
        // var wallop = new Wallop(wallop);
        wallop.forEach(function(el) {
            var n = new Wallop(el);
            var playTime = el.getAttribute('autoplay');
            if(playTime) {
                autoplay(playTime, n);
            }
        })
        // var playTime = document.querySelector('.Wallop').getAttribute('autoplay');

        // if(playTime) {
        //     autoplay(playTime);
        // }
    }

    zoomEnable.init('.zoom-us');
}

function highlightNavigate(){
    if ($('.navigate').length < 1) {
        return;
    }   else {
        var url = window.location.href;
        var projects = $('.navigate .project');

        $.each(projects, function(i) {
            var element = $(projects[i])
            if(url.indexOf(element.find('a').attr('href')) > -1){
                element.addClass('active');
            }
        }); 

    }
}

$(document).ready(function(){

	initHeader();
	initSlider();
    highlightNavigate();

    document.querySelectorAll("img[data-src]").forEach(function(el){
        console.log('img lazyloaded ');
        el.setAttribute('src', el.getAttribute('data-src'));
        el.onload = function() {
            el.removeAttribute('data-src');
        };
    })

    const allBlades = document.querySelectorAll('.blade');
    let mouseCoordinates = {};

    window.onmousemove = (ev) => {updateField(ev)};
    window.onscroll = (ev) => {updateField(ev)};

    const updateField = (ev) => {
        mouseCoordinates.x = ev.clientX;
        mouseCoordinates.y = ev.clientY;
        point();
    }


    function point() {
        allBlades.forEach((el) => {
            let elCoordinates = el.getBoundingClientRect();
            let angle = Math.atan(-1 * (mouseCoordinates.y - elCoordinates.y)/(elCoordinates.x - mouseCoordinates.x))*(180/3.141) + 90;
            el.style.transform = `rotate(${angle}deg)`;
        })
    }

    setTimeout(function(){ 
        console.image(consoleImage);
    }, 5000);
    console.log("I can design and develop! I am looking for Full time opportunities!");

})






