// Navigation
var resize = function() {
  var windowWidth = document.body.clientWidth;

  if(windowWidth <= 860) {
    $('.sidebarMenu').addClass('hideMenu');
    $('.toggleMenu').addClass('opacityOne');
  } else if(windowWidth > 860)  {
    $('.toggleMenu').click(function() {
      $('.sidebarMenu').removeClass('hideMenu');
      $('.toggleMenu').removeClass('opacityOne');
    });
  };
};

$(window).resize(function() {
  resize();
})

resize();

$('.fa-times').click(function() {
  $('.sidebarMenu').addClass('hideMenu');
  $('.toggleMenu').addClass('opacityOne');
});

$('.toggleMenu').click(function() {
  $('.sidebarMenu').removeClass('hideMenu');
  $('.toggleMenu').removeClass('opacityOne');
});

/***** Add Animations to Elements *****/

//  Function to Add Animations to Elements
function animate(element, animation) {
  $(element).addClass('animated ' + animation);
}

$('#myWorkSection h1').waypoint(function () {
  $('#myWorkSection h1').css('visibility', 'visible');
  animate('#myWorkSection h1', "flash")
}, {offset: '75%'});

$('#cardContainer').waypoint(function () {
  $('#cardContainer').css('visibility', 'visible');
  animate('#cardContainer', "lightSpeedIn")
}, {offset: '75%'});

$('#skillsSection h1').waypoint(function () {
  $('#skillsSection h1').css('visibility', 'visible');
  animate('#skillsSection h1', "zoomIn")
}, {offset: '75%'});

$('dl').waypoint(function () {
  $('dl').css('visibility', 'visible');
  animate('dl', "fadeInRight")
}, {offset: '75%'});

$('#aboutMeHeader').waypoint(function () {
  $('#aboutMeHeader').css('visibility', 'visible');
  animate('#aboutMeHeader', "slideInLeft")
}, {offset: '75%'});

$('#aboutMeSection p').waypoint(function () {
  $('#aboutMeSection p').css('visibility', 'visible');
  animate('#aboutMeSection p', "slideInRight")
}, {offset: '75%'});

/***** Animate Scrolling *****/

$('#homeNav').click(function() {
  let home = $('#landing').position().top;

  $('html, body').animate(
    {
      scrollTop: home
    },
    2500
  );
});

$('#workNav').click(function() {
  let work = $('#myWorkSection').position().top;

  $('html, body').animate(
    {
      scrollTop: work
    },
    2500
  );
});

$('#skillsNav').click(function() {
  let skills = $('#skillsSection').position().top;

  $('html, body').animate(
    {
      scrollTop: skills
    },
    2500
  );
});

$('#aboutMeNav').click(function() {
  let about = $('#aboutMeSection').position().top;

  $('html, body').animate(
    {
      scrollTop: about
    },
    2500
  );
});

$('#contactNav').click(function() {
  let contact = $('#contactSection').position().top;

  $('html, body').animate(
    {
      scrollTop: contact
    },
    2500
  );
});
