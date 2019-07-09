// Script for preloader
// In html tag "body" have id='loading'
// For understand how time need -- must test in crossbrowser (chrome extention, network)

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    'use strict';
    var body = document.getElementById('loading');
    body.classList.add('loaded');
  }, 2000);
});
