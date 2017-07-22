"use strict";

/* global $ */

var toggleModal = function toggleModal() {
	$("#search-modal").toggleClass('expand');
	$("#overlay").toggleClass('hidden');
};

// Add click listener to search icon which invokes sidebar function
$(function () {
	return $('#search-modal-btn').on('click', toggleModal);
});

// Add click listener to overlay
$(function () {
	return $('#overlay').on('click', toggleModal);
});

// Add click listener to close button
$(function () {
	return $('.close').on('click', toggleModal);
});