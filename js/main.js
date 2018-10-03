//  Collapse Navigation on Smaller Devices
$('.menu').click(function () {
  $('.mainNav ul').toggleClass('active');
});

//  Function to Add Animations to Elements
function animate(element, animation) {
  $(element).addClass('animated ' + animation);
}

/***** Add Animations to Elements *****/

$('#landing').waypoint(function () {
  $('#landing').css('visibility', 'visible');
  animate('#landing', "fadeIn")
}, {offset: '75%'});

$('#aboutMeHeader').waypoint(function () {
  $('#aboutMeHeader').css('visibility', 'visible');
  animate('#aboutMeHeader', "slideInRight")
}, {offset: '75%'});

$('#aboutMeSection p').waypoint(function () {
  $('#aboutMeSection p').css('visibility', 'visible');
  animate('#aboutMeSection p', "slideInLeft")
}, {offset: '75%'});

$('.imageContainer').waypoint(function () {
  $('.imageContainer').css('visibility', 'visible');
  animate('.imageContainer', "bounceIn")
}, {offset: '75%'});

$('#skillsSection h1').waypoint(function () {
  $('#skillsSection h1').css('visibility', 'visible');
  animate('#skillsSection h1', "swing")
}, {offset: '75%'});

$('dl').waypoint(function () {
  $('dl').css('visibility', 'visible');
  animate('dl', "fadeInRight")
}, {offset: '75%'});

$('#whatsNextSection h1').waypoint(function () {
  $('#whatsNextSection h1').css('visibility', 'visible');
  animate('#whatsNextSection h1', "tada")
}, {offset: '75%'});

$('#whatsNextSection p').waypoint(function () {
  $('#whatsNextSection p').css('visibility', 'visible');
  animate('#whatsNextSection p', "fadeIn")
}, {offset: '75%'});

$('#myWorkSection h1').waypoint(function () {
  $('#myWorkSection h1').css('visibility', 'visible');
  animate('#myWorkSection h1', "flash")
}, {offset: '75%'});

$('#cardContainer').waypoint(function () {
  $('#cardContainer').css('visibility', 'visible');
  animate('#cardContainer', "lightSpeedIn")
}, {offset: '75%'});


/***** Animate Scrolling *****/

$('#aboutMeNav').click(function() {
  let about = $('#aboutMeSection').position().top;

  $('html, body').animate(
    {
      scrollTop: about
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

$('#workNav').click(function() {
  let work = $('#myWorkSection').position().top;

  $('html, body').animate(
    {
      scrollTop: work
    },
    2500
  );
});

$('#nextNav').click(function() {
  let next = $('#whatsNextSection').position().top;

  $('html, body').animate(
    {
      scrollTop: next
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
