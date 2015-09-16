// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){
  $(document).foundation();

  var saVidWidth  = $(window).width(),
    saVidHeight = $(window).height(),
    container = $('#videoWrapper');

  var saVidDimensions = {
    width: saVidWidth,
    height: saVidHeight
  };

  console.log('width: ' + saVidWidth);
  console.log('height: ' + saVidHeight);

  var saVidBreakpoints = {
    small: {
      width: 300,
      height: saVidHeight
    },
    medium: {
      width: 768,
      height: saVidHeight
    },
    large: {
      width: 1024,
      height: saVidHeight
    }
  };

  console.log(saVidBreakpoints.medium.width);
  console.log(saVidBreakpoints.medium.height);

  // set width & height based on screen size
  if (saVidWidth >= 1024){
    console.log('large screen')
    saVidDimensions.width = Math.round(saVidWidth * 0.90);
    saVidDimensions.height = Math.round(saVidHeight * 0.50);
  } else if (saVidWidth < 1024 && saVidWidth >= 768) {
    console.log('medium screen')
    saVidDimensions.width = Math.round(saVidWidth * 0.73);
    saVidDimensions.height = Math.round(saVidHeight * 0.42);
  } else if (saVidWidth < 768 && saVidHeight > 300) {
    console.log('small screen')
    saVidDimensions.width = Math.round(saVidWidth * 0.66);
    saVidDimensions.height = Math.round(saVidHeight * 0.33);
  };

  console.log('width: ' + saVidDimensions.width);
  console.log('height: ' + saVidDimensions.height);

  var url = 'http://www.necn.com/portableplayer/?cmsID=326853441&videoID=DKt5Dc73cWfn&origin=necn.com&sec=news&subsec=business&width='
    + String(saVidDimensions.width) + '&height=' + String(saVidDimensions.height);

  var script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = url;

  $('#videoWrapper').append(script);
});

