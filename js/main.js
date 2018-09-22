//  Collapse Navigation on Smaller Devices
$('.menu').click(function() {
  $('ul').toggleClass('active');
});

//  Function to Add Animations to Elements
function animate(element, animation) {
  $(element).addClass('animated ' +animation);
}

/***** Add Animations to Elements *****/

$('#landing').waypoint(function () {
  animate('#landing', "fadeIn")
}, {offset: '75%'});

$('#aboutMeSection h1').waypoint(function () {
  animate('#aboutMeSection h1', "slideInRight")
}, {offset: '75%'});

$('#aboutMeSection p').waypoint(function () {
  animate('#aboutMeSection p', "slideInLeft")
}, {offset: '75%'});

$('.imageContainer').waypoint(function () {
  animate('.imageContainer', "bounceIn")
}, {offset: '75%'});

$('#skillsSection h1').waypoint(function () {
  animate('#skillsSection h1', "swing")
}, {offset: '75%'});

$('#currentSkillsWrapper').waypoint(function () {
  animate('#currentSkillsWrapper', "fadeInUp")
}, {offset: '75%'});

$('#workingSkillsWrapper').waypoint(function () {
  animate('#workingSkillsWrapper', "fadeInLeft")
}, {offset: '75%'});

$('dl').waypoint(function () {
  animate('dl', "fadeInRight")
}, {offset: '75%'});

$('#whatsNextSection h1').waypoint(function () {
  animate('#whatsNextSection h1', "tada")
}, {offset: '75%'});

$('#whatsNextSection p').waypoint(function () {
  animate('#whatsNextSection p', "fadeIn")
}, {offset: '75%'});

$('#nextSkillsWrapper').waypoint(function () {
  animate('#nextSkillsWrapper', "zoomIn")
}, {offset: '75%'});
