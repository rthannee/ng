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
    if ((element_bottom_position+200 >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = $this.data('animation');

            if($this.data('animation') == 1 ) {
                var projs = $("#completed > li").toArray();
                //TweenMax.set(projs,{opacity:0});
                TweenMax.staggerFromTo(projs, 5.5,{
                  cycle: {
                   x:function(i){return 200+i*50;},
                   opacity:0,
                   ease:function(i) { Back.easeOut.config(i*0.9);}
                 }
                }, 
                {
                   x:0,
                   opacity:1,
                   
                },0.1);

               $this.data('animation', 0);
            }

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
 

    $('.tooltip').tooltipster();
    var projects = [ 
            {id:'#NamitaLotus',     name:'.NL' , desc:'Namit Lotus',      city:'A.S.Rao Nagar',  image:'NamitaLotus_ASRaoNagar.png'},
            {id:'#NamitaNest',      name:'.NN' , desc:'Namita Nest',      city:'Madhapur',       image:'Namita_Nest_Madhapur.png'},
            {id:'#NamitaRajMall',   name:'.NRM', desc:'Namita Raj Mall',  city:'Gachibowli',     image:'NamitaRajMall_Gachibowli.png'},
            {id:'#NamitaFort',      name:'.NF' , desc:'Namita Fort',      city:'Manikonda',      image:'Namita_Fort_Manikonda.png'},
            {id:'#NamitaMetro',     name:'.NM' , desc:'Namita Metro',     city:'Boiguda',        image:'Namita_Metro_Boiguda.png'},
            {id:'#NamitaGrandA',    name:'.NGA', desc:'Namita Grand-A',   city:'Vidya Nagar',    image:'Namita_Grand-A_VidyaNagar.png'},
            {id:'#NamitaGrandB',    name:'.NGB', desc:'Namita Grand-B',   city:'Vidya Nagar',    image:'Namita_Grand-B_VidyaNagar.png'},
            {id:'#NamitaRajT',      name:'.NR' , desc:'Namita Raj',       city:'Tirumala Hills', image:'NamitaRaj_TirumalaHills.png'},
            {id:'#NamitaResidency', name:'.NRE', desc:'Namita Residency', city:'L.B.Nagar',      image:'Namita_Residency_LBNagar.png'}
            ];
            
        projects.forEach(function(proj){
            $(proj.id ).tooltipster({
                content: $('<img src="img/' + proj.image + '" width="150" height="150" /><p style="text-align:center;"><strong>' + proj.desc + '<strong></br>'+ proj.city +'</p>'),
                position: 'right',
                animation: 'grow',
                theme: 'tooltipster-punk',
                //trigger: 'click'
            });
            $(proj.name ).tooltipster({
                content: $('<img src="img/' + proj.image + '" width="100" height="100" /><p style="text-align:center;"><strong>' + proj.desc + '<strong></p>'),
                position: 'right',
                animation: 'grow',
                theme: 'tooltipster-punk',
                contentAsHTML: true,
                interactive: true,
                multiple:true,
                //trigger: 'click',
            });
            $(proj.name ).tooltipster({
                content: $('<p style="text-align:center;">Located At:<br><strong>' + proj.city + '<strong></p>'),
                multiple:true,
                position: 'left',
                animation: 'fall',
                theme: 'tooltipster-light',
            });
            $(proj.id).hover(
            function() {
                $(proj.name).css('background-color', '#000')
            }, function() {
                $(proj.name).css('background-color', '')
            });
                
        });

    
var s = Snap("#svgObj");
    mp = s.select("#map");

s.select("#map").hover( hoverFunc, hoverOut );

function hoverFunc() {
    this.selectAll('path').forEach( function( el ){
        el.attr({ class: 'redfadein' })  } );
    mp.attr({ class:'redfadein'});
    this.animate({ transform: 's1.005,1.005' }, 500);
};

function hoverOut() {
    this.selectAll('path').forEach( function( el ){
        el.attr({  class: 'redfadeout' })  } );
    mp.attr({ class:'redfadeout'});
    this.animate({ transform: 's1,1' }, 500);
};
 
$(".subpath").each(
  function(){
    $(this).hover(
        function(){
                $(this).attr({  class: 'redsubpath' }) ;
        },
        function(){
                $(this).attr({  class: 'st7 subpath' }) ;
        });
    }
);
$("#myhut1").hover(
    function(){
//        alert("Iam");
    },
    function(){
 //       alert("Ur");
    }
);
    


    
});

$("#contactus").click(function() {
   dialog.dialog( "open" );
});