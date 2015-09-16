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
    saVidHeight = $(window).height();

  var saVidDimensions = {
    width: saVidWidth,
    height: saVidHeight
  };

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

  // set width & height based on screen size
  if (saVidWidth >= 1024){
    var maxWidth = 600,
        maxHeight = 360;

    saVidDimensions.width = maxWidth;
    saVidDimensions.height =  maxHeight
  } else if (saVidWidth < 1024 && saVidWidth >= 768) {
    var maxWidth = 465,
        maxHeight = 258;

    saVidDimensions.width = maxWidth;
    saVidDimensions.height =  maxHeight;
  } else if (saVidWidth < 768) {
    var maxWidth = Math.round(saVidWidth * 0.8),
        maxHeight = saVidHeight;

    saVidDimensions.width = maxWidth;
    saVidDimensions.height =  Math.round(maxWidth / 2.3);
  };

  var url = 'http://www.necn.com/portableplayer/?cmsID=326853441&videoID=DKt5Dc73cWfn&origin=necn.com&sec=news&subsec=business&width='
    + String(saVidDimensions.width) + '&height=' + String(saVidDimensions.height);

  var script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = url;

  $('#saVidWrapper').append(script);
});

