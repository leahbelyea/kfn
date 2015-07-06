$(document).ready(function() {
  // Slideshow
  jQuery('.main-photo.flexslider').flexslider({
    directionNav: false,
    slideshowSpeed: 4000,
    pauseOnAction: false
  });

  // Gallery Thumbnails
  jQuery('.thumbnail').each(function() {
    var href = jQuery(this).attr('href');
    jQuery(this).css('background', 'url(' + href + ') no-repeat');
  });
});