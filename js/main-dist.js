function animate(i,t){$(i).addClass("animated "+t)}$(".menu").click(function(){$(".mainNav ul").toggleClass("active")}),$("#landing").waypoint(function(){$("#landing").css("visibility","visible"),animate("#landing","fadeIn")},{offset:"75%"}),$("#aboutMeSection h1").waypoint(function(){$("#aboutMeSection h1").css("visibility","visible"),animate("#aboutMeSection h1","slideInRight")},{offset:"75%"}),$("#aboutMeSection p").waypoint(function(){$("#aboutMeSection p").css("visibility","visible"),animate("#aboutMeSection p","slideInLeft")},{offset:"75%"}),$(".imageContainer").waypoint(function(){$(".imageContainer").css("visibility","visible"),animate(".imageContainer","bounceIn")},{offset:"75%"}),$("#skillsSection h1").waypoint(function(){$("#skillsSection h1").css("visibility","visible"),animate("#skillsSection h1","swing")},{offset:"75%"}),$("#currentSkillsWrapper").waypoint(function(){$("#currentSkillsWrapper").css("visibility","visible"),animate("#currentSkillsWrapper","fadeInUp")},{offset:"75%"}),$("#workingSkillsWrapper").waypoint(function(){$("#workingSkillsWrapper").css("visibility","visible"),animate("#workingSkillsWrapper","fadeInLeft")},{offset:"75%"}),$("dl").waypoint(function(){$("dl").css("visibility","visible"),animate("dl","fadeInRight")},{offset:"75%"}),$("#whatsNextSection h1").waypoint(function(){$("#whatsNextSection h1").css("visibility","visible"),animate("#whatsNextSection h1","tada")},{offset:"75%"}),$("#whatsNextSection p").waypoint(function(){$("#whatsNextSection p").css("visibility","visible"),animate("#whatsNextSection p","fadeIn")},{offset:"75%"}),$("#nextSkillsWrapper").waypoint(function(){$("#nextSkillsWrapper").css("visibility","visible"),animate("#nextSkillsWrapper","zoomIn")},{offset:"75%"});