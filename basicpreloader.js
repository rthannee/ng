$(document).ready(function(){
	var heights=jQuery(window).height();
	var margTop=(heights/2)-25;

	var h=50;//height and width of the loading circles
	var w=50;
	$("#logo").hide();
	$("#loader").css("width","100%");	
	$("#loader").css("height",heights);
	$("#loader").css("background-color","white");
	
	$("body").css("overflow","hidden");
	
	$("#back").css("width","100%");
	$("#back").css("height",heights);
	$("#back").css("z-index",'200001');
	$("#back").css("padding","0");
	$("#back").css("margin","0");
	$("#back").css("margin-top","0px");
	$("#back").css("opacity","1.0");
	$("#back").css("position","fixed");

	//$("#back").css("background-image","url(tracks.jpg)");//You can change the background image to whatever you like... Low image sizes would be the best


	$("#back").css("background-size","100% 100%");
	$("#back").append("<div id='box' align='center' style='background-color:#00000; width:220px; height:52px;'></div>");
	
	$("#box").center();
	// /*4 div representing 4 loading elements..(The 4 circles)*/
	// $("#box").append("<div id='box0' style='border-radius:50%; background-color:#333333; width:"+w+"px; height:"+h+"px; float:left; margin-right:3px'>N</div>");
	// $("#box").append("<div align='center' id='box1' style='border-radius:50%; background-color:#FFFF66; width:"+w+"px; height:"+h+"px; float:left; margin-right:3px'></div>");
	// $("#box").append("<div align='center' id='box2' style='border-radius:50%; background-color:#FF6600; width:"+w+"px; height:"+h+"px; float:left; margin-right:3px'></div>");
	// $("#box").append("<div align='center' id='box3' style='border-radius:50%; background-color:#6600CC; width:"+w+"px; height:"+h+"px; float:left; margin-right:3px'></div>");
	


	$("#box").append("<table> <tr> <td width='30%'> <div class='logo-img'> <img class='imglogo' src='img/logo.png' alt='Logo'> <img class='line' src='img/line.png' alt='Line'> </div> </td> <td width='70%'> <table class='logo-cap-table'> <tr height='80%'> <td > <div style='position:relative;'> <ul id='caphead' class='anim-caphead' style='margin-left:10px'> <li>N</li> <li>A</li> <li>M</li> <li>I</li> <li>T</li> <li>H</li><li>A</li> <li>&nbsp;</li> <li>G</li> <li>R</li> <li>O</li> <li>U</li> <li>P</li> </ul> </div> </td> </tr> <tr height='20%'>  <td align='top'>  <div class='anim-caption-tail' style='position:relative;margin-top:-30px;margin-left:40px;display:flex;'><div id='involve'>Involve</div><div class='dot1'>&nbsp;&nbsp;.&nbsp;&nbsp;</div><div id='resolve'>Resolve</div><div class='dot2'>&nbsp;&nbsp;.&nbsp;&nbsp;</div><div id='evolve'>Evolve</div></div> </td> </tr> </table> </td> </tr> </table>");
	$("#box").css('margin-left','-150px');
	$("#box").css('margin-top','-50px');

	    select = function (s) {
	        return document.querySelector(s);
	    }, selectAll = function (s) {
	        return document.querySelectorAll(s);
	    };

	var logoimg = $('.imglogo');
	var logoline = $('.line');
    var logomaintext = $('#caphead');
    var involve = $('#involve');
    var resolve = $('#resolve');
    var evolve = $('#evolve');
    var logodot1 = $('.dot1');
    var logodot2 = $('.dot2');
	TweenMax.set([
	    logoimg,
	    logoline,
	    logomaintext,
	    evolve,
	    resolve,
	    involve,
	    logodot1,
	    logodot2
	], { visibility: 'hidden' });

TweenMax.set([ logoimg ], { visibility: 'visible' });

	TweenMax.from(logoimg, 1, { x: -1000 });
    TweenMax.to(logoimg, 1, {rotation:360, ease:Linear.easeNone, repeat:-1})

TweenMax.set([ logoline ], { visibility: 'visible' });

	TweenMax.from(logoline, 2, { y: -1000 });

TweenMax.set([ logomaintext ], { visibility: 'visible' });

	TweenMax.from(logomaintext, 2, { x: 1000 });

   TweenMax.to(involve, 1.5, {delay:2.5,autoAlpha:1, ease:Bounce.easeOut});
   TweenMax.to(logodot1, 1.5, {delay:3,autoAlpha:1, ease:Bounce.easeOut});
   TweenMax.to(resolve, 1.5, {delay:3.5,autoAlpha:1, ease:Bounce.easeOut});
   TweenMax.to(logodot2, 1.5, {delay:4.0,autoAlpha:1, ease:Bounce.easeOut});
   TweenMax.to(evolve, 1.5, {delay:4.5,autoAlpha:1, ease:Bounce.easeOut});
   TweenMax.to(logoimg, 0.5, {delay:5.5,rotation:0, ease:Linear.easeNone})

//TweenMax.set([ involve,resolve,evolve ], { visibility: 'visible' });


	$( window ).load(function() {
			$("body").css("overflow","auto");
			$(".navbar").css("opacity", "0.0");
			setTimeout(function(){ $("#loader").slideUp(500,"swing",function(){$('#loader').remove(); $(".navbar").css("opacity", "1");});}, 6000);
  			
			setTimeout(function(){
				dialog1 = $( "#dialog-Ytd" ).dialog({
				  autoOpen: false,
				  height: 500,
				  width: 500,
				  modal: true
				   
				});
				dialog1.dialog("open" );
				$("#video").simplePlayer();},7000);  
	});
	setTimeout(function(){
		$(window).resize(function(){							  
		    	heights=jQuery(window).height();
				$("#back").css("height",heights);
				$("#loader").css("height",heights);
				$("#loader").css("background-color","black");
				$("#loader").css("z-index",20000);
				$("#loader").css("opacity","1.0 !important");
				$("#box").center();
			});
		$("#logo").show();
					
	},3000)





});

/*Function to align content to center*/
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

