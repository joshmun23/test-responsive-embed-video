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

$(function(){ $(document).foundation(); });

var saVidWidth  = $(window).width(),
    saVidHeight = $(window).height(),
    container = $('.videoWrapper');

var saVidDimensions = {
  width: saVidWidth,
  height: saVidHeight
};

console.log('width: ' + saVidWidth);
console.log('height: ' + saVidHeight);

var saVidBreakpoints = {
  small: {
    width: 300,
    height: saVidHeight * 0.50
  },
  medium: {
    width: 768,
    height: saVidHeight * 0.42
  },
  large: {
    width: 1024,
    height: saVidHeight * 0.33
  }
};

console.log(saVidBreakpoints.medium.width);
console.log(saVidBreakpoints.medium.height);

// set width & height based on screen size
if (saVidWidth >= 1024){
  console.log('large screen')
  saVidDimensions.width = saVidWidth * 0.90;
  saVidDimensions.height = saVidHeight * 0.50;
} else if (saVidWidth < 1024 && saVidWidth >= 768) {
  console.log('medium screen')
  saVidDimensions.width = saVidWidth * 0.73;
  saVidDimensions.height = saVidHeight * 0.42;
} else if (saVidWidth < 768 && saVidHeight > 300) {
  console.log('small screen')
  saVidDimensions.width = saVidWidth * 0.66;
  saVidDimensions.height = saVidHeight * 0.33;
};

console.log(saVidDimensions.width)
console.log(saVidDimensions.height)

// container.html('<iframe width="' + width + '" height="'+ height
//   + '" frameborder="0" allowfullscreen src="http://www.necn.com
//   /templates/nbc_partner_player?cmsID=326853441&amp;videoID=DKt
//   5Dc73cWfn&amp;origin=necn.com&amp;sec=news&amp;subsec=business
//   &amp;width=' + width + '&amp;height=' + height + '&amp;turl=
//   http%3A%2F%2Flocalhost%3A3000%2F&amp;ourl=http%3A%2F%2Flocalhost
//   %3A3000&amp;lp=1" style="border: none;"></iframe>')
