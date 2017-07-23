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