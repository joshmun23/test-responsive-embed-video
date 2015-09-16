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

var height = $(window).height(),
    width  = $(window).width(),
    container = $('.videoWrapper'),

container.html('<iframe width="' + width + '" height="'+ height
  + '" frameborder="0" allowfullscreen src="http://www.necn.com
  /templates/nbc_partner_player?cmsID=326853441&amp;videoID=DKt
  5Dc73cWfn&amp;origin=necn.com&amp;sec=news&amp;subsec=business
  &amp;width=' + width + '&amp;height=' + height + '&amp;turl=
  http%3A%2F%2Flocalhost%3A3000%2F&amp;ourl=http%3A%2F%2Flocalhost
  %3A3000&amp;lp=1" style="border: none;"></iframe>')
