$(window).on('load',function(){
  $('#mainNav').delay(300).fadeIn('slow');
  $('.title').typeIt();
  $('#textPageLaod').slideDown(2000);
});

// smoth scroll
$('.scroll').click(function() {
 if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   if (target.length) {
     $('html,body').animate({
       scrollTop: target.offset().top
     }, 1100); // The number here represents the speed of the scroll in milliseconds
     return false;
   }
 }
});



function initMap(){
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.610377, lng: -122.200679},
    zoom: 8
  });
};

$('#contactModal').on('shown.bs.modal', function () {
  $('#profilePic').slideDown('fast');
  $('.modal-body').slideDown('slow');
});


		
$(document).ready(function(){

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, function(){
			window.location = linkLocation;
		});      
	});
});
