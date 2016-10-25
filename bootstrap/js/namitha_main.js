$(document).ready(function() {

var $animation_elements = $('.animated');
var $window = $(window);

//$("#completed > li").css("opacity", "0");

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    //if ((element_bottom_position >= window_top_position) &&
    if ((element_top_position <= window_bottom_position+150)) {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass("animated " + $animationType);
            });

    }


  });
}

$window.on('scroll resize', check_if_in_view);
    
$("#completed_proj_container").jresponsive({
  transormation: 'animation', 
  min_size: 240,
  max_size: 240,
  height:250,
  hspace:30,
  vspace:50,
  class_name: 'completed_proj'
});    
    
    
});