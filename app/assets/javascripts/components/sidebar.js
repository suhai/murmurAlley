'use strict';

/* global $ */

// dropdown function that applies or removes 'expand' class to the sections-sidebar nav
var toggleSidebar = function toggleSidebar() {
	$("#sections-sidebar").toggleClass('expand');
};

var toggleSideBarIfExpanded = function toggleSideBarIfExpanded(e) {
	e.preventDefault();
	if (e.currentTarget.className === 'sections-sidebar expand') {
		setTimeout(toggleSidebar, 1000);
	}
};

// Add click listener to hamburger icon which invokes sidebar function
$(function () {
	return $('#sections-sidebar-btn').on('click', toggleSidebar);
});

// Close an expanded sidebar after 1 second if mouse leaves sidebar element
// Incomplete feature because sidebar does not remain open if mouse reenters element
$(function () {
	return $('#sections-sidebar').mouseleave(toggleSideBarIfExpanded);
});

$(window).on('load', function() {
	setInterval( function(){
		$('#today').text(new Date);
	}, 1000);	
});


var getWeather = function() {
	var output = new XMLHttpRequest();
	output.open("GET", "http://api.wunderground.com/api/c8b187186bb5b42c/conditions/q/CA/San_Francisco.json", false);
	output.send(null);;
	var x = JSON.parse(output.response)
	var weatherTime = x.current_observation.observation_time;
	var weatherTemp = x.current_observation.feelslike_string;
	var weather = x.current_observation.weather;
	
	document.getElementById("weather1").innerHTML = weatherTemp;
	document.getElementById("weather2").innerHTML = weather;
}

 $(window).on('load', function() {
	getWeather();
	setInterval( function() {
	getWeather();	
	}, 600000)
 });