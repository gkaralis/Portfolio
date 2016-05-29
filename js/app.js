$(document).foundation();

var navButton = $(".orbit-bullets button");
navButton.mouseenter(function() {
	$(this).addClass("transitionScaleUpPartial");
})
navButton.mouseleave(function() {
	$(this).removeClass("transitionScaleUpPartial");
})
navButton.click(function() {
	// Transition button
	navButton.removeClass("transitionZoomOut");
	$(this).addClass("transitionZoomOut");
	$(this).removeClass("transitionScaleUpPartial");

	//Transition content
	$(".main").removeClass("transitionFadeIn");
	$(".main").addClass("transitionFadeOut");
	switch ($(this)[0].id) {
		case "about-button":
			$("#about").removeClass("transitionFadeOut");
			$("#about").addClass("transitionFadeIn");
			break;
		case "edge-button":
			$("#edge").removeClass("transitionFadeOut");
			$("#edge").addClass("transitionFadeIn");
			break;
		case "captions-button":
			$("#captions").removeClass("transitionFadeOut");
			$("#captions").addClass("transitionFadeIn");
			break;
		case "tipper-button":
			$("#tipper").removeClass("transitionFadeOut");
			$("#tipper").addClass("transitionFadeIn");
			break;
		case "contact-button":
			$("#contact").removeClass("transitionFadeOut");
			$("#contact").addClass("transitionFadeIn");
			break;
	}

});

// $('.orbit-container').css("height","");
