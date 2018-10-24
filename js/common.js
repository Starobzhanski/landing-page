$(function() {

$("#toggle").click(function() {

      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

$(".owl-carousel-header").owlCarousel({
	loop: true,
	items: 1,
	autoHeight: true,
	smartSpeed: 700,
	dots: true,
});

$(".owl-carousel-team").owlCarousel({
    loop: true,
    smartSpeed: 700,
    items: 1,
    dots: false,
  nav: true,
  navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
});

$(window).scroll(function(){

    var topOfWindow = $(this).scrollTop();

    $('.mov').each(function(){
        var imagePos = $(this).offset().top;
        //var topOfWindow = $(this).scrollTop();
        if(topOfWindow > imagePos - ($(window).height() / 1.2)  )
        {
            $(this).removeClass('hide-class');
            $(this).addClass('fadeIn');
        }
    });

    
    // $('.s-team').css({
    //     "transform" : "translate(0%, -"+ topOfWindow/2500 + "%)"
    // });

});

$(".owl-carousel-works").owlCarousel({
	//loop: true
	dots:false,
	smartSpeed: 700,
	responsiveClass: true,
        responsive: {
            0:
            {
                items: 1
            },
            768:
            {
                items: 2
            },
            992:
            {
                items: 3
            }
        }
});

$(window).scroll(function(){
        if($(this).scrollTop() > $(this).height())
        {
            $('.top').addClass('active');
        }
        else
            $('.top').removeClass('active');
    });

    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop:0},'slow','swing');
    });

  var counter = 0;
  var c = 0;
  var i = setInterval(function() {

  $(".preloader .counter h1").html(c);
  $(".preloader").css("width", c + "%");

  counter++;
  c++;
  if(counter == 101) {
    clearInterval(i);
  }

}, 20);   

$(window).on('load', function(){

    $('.preloader').delay(2000).fadeOut('slow');
    $('.kek').delay(2000).fadeOut('slow');

    $('.btn-down').click(function(){
        var k = $('.s-advantages').offset().top;
        $('html, body').stop().animate({scrollTop:k},'slow','swing');
    });
});


});


function initMap()
{
     var element = document.getElementById('map');
     var option =  {
        zoom: 10,
        center: {lat: 40.730824, lng: -73.997330},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
     };
     var myMap = new google.maps.Map(element, option);
     var marker = new google.maps.Marker({
        position: {lat: 40.730824, lng: -73.997330},
        map: myMap,
        icon: 'img/marker.png'
     });
}