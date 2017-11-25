import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).ready(function(){
	var bigLogo = $('.big-logo')[0];
	var headerHeight = bigLogo.getBoundingClientRect().height;
	var showBig = true;

	// $(window).on('scroll', function(){
	// 	if(showBig && bigLogo.getBoundingClientRect().top + headerHeight < 0)	{
	// 		$('.logo-container').toggleClass('big');
	// 		showBig = false;
	// 		console.log('show Big')
	// 	}	else if(!showBig && bigLogo.getBoundingClientRect().top + headerHeight > 0)	{
	// 		$('.logo-container').toggleClass('big')
	// 		showBig = true
	// 		console.log('show small')
	// 	}
	// })


})
