
  window.removeEventListener('load',function(){});
  window.addEventListener('load',function(){




   // document.getElementById('loader').style.display='none';



  });

 
/* global variables to hold image counter and total images */
var count=0,
	total=0, z=0;
	
	
/* attach event to image element. This code fires as soon as dom is loaded */
window.addEventListener('DOMContentLoaded',function(){
	var loaderSpan = document.querySelectorAll('#loader p span')[0],
		imgarr = document.getElementsByTagName('img'); //querySelectorAll('[data-loaded=loadit]')
	
	
	for(var i=0; i<imgarr.length; i++){
		var imgElem = imgarr[i];
		imgElem.addEventListener('load', function(){
			checkLoad(this,imgarr.length);
		
		})
	}
});

/* method to check if the image is completely loaded. That is, the src is fully fetched at client end */
function checkLoad(img,total){
	var fcheckImgLoad = function(){
			//check if image is fully downloaded
			if(img.complete){
				count++;
				
				document.querySelectorAll('#loader p span')[0].innerHTML=parseInt(count/total*100)+'%';
        console.log(count +'done');
				if(count == total){
					setTimeout(function(){
						document.getElementById('loader').style.display = 'none';
					},2000);
				}
			}
			//else keep checking every 100ms till its fully downloaded
			else{

        

				setTimeout(function(){
          
          
					fcheckImgLoad();
          
				}, 100);
			}
		}
	fcheckImgLoad();
};






var x=0;




$(document).ready(function(){



$('body').scrollTop(0);


  var i=0
  var picmove=[-155,-192,-199,-271,-183];
  var counter=0;
    setInterval(function(){

      animCaptainAmerica();
    },170);


    function animCaptainAmerica()
      {
          if(i<4)
          {
            counter=counter+picmove[i];
            if(i==3)
          {  $("#captain-a").css('width','220px');
            $("#captain-a").css('background-position-x', counter+'px');
          }
          else {
              $("#captain-a").css('width','169px');
              $("#captain-a").css('background-position-x', counter+'px');
          }
            i++;

          }
       else {
                $("#captain-a").css('width','150px');
               $("#captain-a").css('background-position-x','left');

             i=0;
             counter=0;
            }

   }


   function scrolTeamImg(scrolled)//scroll team image
   {

     $(".wrapper").eq(0).css({'transform':'translate(0,-'+ Math.ceil(scrolled/11)+'%)'});
   }


    function ironmanFadein()//iron man fadein
    {
     $('.fourth div:nth-child(1) img').css({opacity:'1'});
    }

    function ironmanFlyRight(scrolled)//iron man fly right
      {

          $('#iron-man img').eq(0).css({left:scrolled/40+'%'});
      }

      function captainAmericaContent(scrolled)
      {
        $('.fifth div:nth-child(2)').css({'transform':'translate(0,-'+ Math.ceil(scrolled)*0.1+'px)'});
      }

      function thorContent(scrolled)
      {
        $('.sixth div div:nth-child(2)').css({'transform':'translate(0,-'+ Math.ceil(scrolled)*0.1+'px)'});
      }



    $(window).scroll(function(){



      var scrolled=$(this).scrollTop();

      if(scrolled>400)
      {
        $('#scroltop').css({'display':'block'});
      }
      else {
         $('#scroltop').css({'display':'none'});
      }

      /* $('#half1').animate({left: '-'+ scrolled },1000);
       $('#half2').animate({right: '-'+scrolled },1000);
       *///scroll top jumbotron
       var zoom=scrolled/10000,zoom1=scrolled/100000-0.006;
       //console.log(zoom);
       $('#half1').css({transform: 'translate(-'+ scrolled*1.9+"px,0)" });
       $('.first').eq(0).css({transform:'scale('+(1+zoom)+')'});
       $('#half2').css({right: '-'+ scrolled*1.9+"px" });

       if(scrolled<400)
       {
         var margin=parseInt($('#title').css('margin-top'));
        // $('#title').css('margin-top',+margin-((scrolled/20)-10)+'px');
       }

      /*  $('#half1').animate({left: '0'},1200);
         $('#half2').animate({right: '0'},1200);

      */


        console.log(scrolled);


      //scroll team image
      if(scrolled<1414&&scrolled>300)
      {

        scrolTeamImg(scrolled);
        //$(".wrapper").eq(0).css({top:Math.ceil(scrolled/20)+"%"});
      }




      if($(window).width()>900)// condition to check if pc
    {  //iron man fade in
      if(scrolled>=$('.fourth div:nth-child(2)').offset().top-$('.fourth div:nth-child(2)').height()-100 && $('.fourth div:nth-child(2)').offset().top+$('.fourth div:nth-child(2)').height())
      {
         ironmanFadein();
      }
      else {
        $('.fourth div:nth-child(1) img').css({opacity:'0.3'}); //else fade out
      }



      $('.fifth').css({'margin-bottom':'10px'});
      /*if(scrolled>2100 && scrolled<2850)
      {
          var imgtop=parseInt($('.fourth div:nth-child(1) img').css('top'));
          imgtop+=350;
          if(imgtop<=850)
          {
            $('.fourth div:nth-child(1) img').css({"top":''+imgtop+'px'});
          }
      }
      */

      //iron man fly right
      if(scrolled>2290 && scrolled<3100)
      {
       //$('#iron-man img').eq(0).animate({right:'-'+scrolled/100+"%",top:'-'+scrolled/105+"%"},5900);
       //$('#iron-man img').eq(0).css({left:+10+"%",top:'-'+10+"%"});
       ironmanFlyRight(scrolled);
      }
      /*if(scrolled>2200||scrolled<1500)
      {
        $('#iron-man img').eq(0).css({left:0+"%",top:'-'+0+"%"});
      }*/

      if(scrolled>2800 && scrolled<3770)  //captain america detail
      {
          captainAmericaContent(scrolled);

        }


        if(scrolled>=$('.sixth div div:nth-child(1) img').offset().top-$('.sixth div div:nth-child(1) img').height() &&  scrolled<=$('.sixth').offset().top+$('.sixth').height() )
        {
            thorContent(scrolled*1.1);
        }
          //parallax effect on hulk div
        if(scrolled>=$('.seventh ').eq(0).offset().top-$('.seventh ').eq(0).height()&&scrolled<($('.seventh ').eq(0).offset().top+$('.seventh ').eq(0).height())/1.1)
        {

                var coords='left '+(-scrolled*0.022)+'px';
                $('.seventh').css('backgroundPosition',coords);
        }
        //parallax effect on Black Widow div
        if(scrolled>=$('.eighth ').eq(0).offset().top-$('.eighth').eq(0).height()&&scrolled<($('.ninth').eq(0).offset().top+$('.ninth').eq(0).height()))
        {
          var coords='left '+(-scrolled*0.1)+'px';
          $('.eighth').css('backgroundPosition',coords);
        }

        //parallax effect on HawkEye div
        if(scrolled>=$('.ninth ').eq(0).offset().top-$('.ninth').eq(0).height()&&scrolled<($('.ninth').eq(0).offset().top+$('.ninth').eq(0).height()))
        {
          var coords='left '+(-scrolled*0.1)+'px';
          $('.ninth').css('backgroundPosition',coords);

        }

        //cloudy parallax effect
        if(scrolled>=$('.tenth ').eq(0).offset().top-$('.ninth').eq(0).height() && scrolled<($('.tenth').eq(0).offset().top+400+$('.tenth').eq(0).height()))
        {

              
              var coords='left '+(-scrolled*0.1)+'px';
              $('.tenth').css('backgroundPosition',coords);
            $('.cloud1').eq(0).css({'transform':'translateY('/*+(-scrolled*0.001)+'px'+' , '*/+(-scrolled/45+10/**0.03*/)+'px'+')'});
            $('.cloud2').eq(0).css({'transform':'translateY('/*+(scrolled*0.03)+'px'+' , '*/+(-scrolled/25+20/**0.05*/)+'px'+')'});
            $('.cloud3').eq(0).css({'transform':'translate('+(scrolled*0.01)+'px'+' , '+(scrolled/55+5/**0.01*/)+'px'+')'});

            $('.eleventh img:nth-child(2)').fadeOut(800,'linear');
        }


        if(scrolled>8740)
        {

            x=x+1;
            //$('.eleventh img').css({'transform':'translate(0, '+scrolled/990+'px'});
            $('.positionAvengerprev').addClass('positionAvenger');
            //$('.positionAvenger').eq(0).css('top','14%');
            //$('.eleventh img:nth-child(2)').css('display','inline');
            if(scrolled>8800)
            {
                (x%2==0)? $('.positionAvenger').eq(0).css('top',13+'%'): $('.positionAvenger').eq(0).css('top',9+'%');


            }
            

            (scrolled>10100)? $('.eleventh img:nth-child(2)').fadeIn(800,'linear') : $('.eleventh img:nth-child(2)').fadeOut(800,'linear');

            $('.eleventh div').css('left',12512-scrolled-15+'px');

            if(scrolled>10200)
            {
                $('.eleventh').css({'-webkit-animation': 'flash ease-out 6s 4',
                  '-moz-animation': 'flash ease-out 6s 4',
                  'animation': 'flash ease-out 6s 4',
                  'animation-delay': '1s'})

            }

        }
        else
        {
            $('.positionAvengerprev').removeClass('positionAvenger');
            $('.positionAvenger').eq(0).css('top','0%');
            //$('.eleventh img:nth-child(2)').css('display','none');
            
        }




      }
      else {   //same for tablet device
          //making the image resposnsive for tablet

          $('.fifth').css('margin-top','0');
          $('.seventh').css({'background-repeat': 'no-repeat'});
          $('.second p ').css('margin-top','86%');
          $('.seventh').eq(0).css('background-position','-100px bottom');
          $('.fourth div:nth-child(1) img ').css({'margin-top':'4%', width:'40%', height:'28%'});
          $('.fourth div:nth-child(2)').css('left','0');
          $('.tenth div').css('top','0');
          if(scrolled>=$('.fourth div:nth-child(1)').offset().top-$('.fourth div:nth-child(1)').height() && scrolled< $('.fourth div:nth-child(1)').offset().top+$('.fourth div:nth-child(1)').height())
            {
            ironmanFadein();
          }
          else {
                  $('.fourth div:nth-child(1) img').css({opacity:'0.3'}); //else fade out
              }

                $('#iron-man img').css({top: '40%', width: '24%', left: '35%'});

            if(scrolled>1950)
            {
                ironmanFlyRight(scrolled);
            }

              $('.fifth div:nth-child(2)').css({'top':'70%','margin-left':'5%'});
            if(scrolled>2703&& scrolled<3190)
            {
              captainAmericaContent(scrolled);
            }
            $('.sixth div div:nth-child(2)').css({'top':'60%','left':'3%','width':'90%','z-index':'4'});



        if(scrolled>=$('.eighth ').eq(0).offset().top-$('.eighth').eq(0).height()&&scrolled<($('.eighth').eq(0).offset().top+$('.eighth').eq(0).height())/1.1)
        {
           var coords='left '+(-scrolled*0.1)+'px';
          $('.eighth').css('backgroundPosition',coords);
        }

        //parallax effect on HawkEye div
        if(scrolled>=$('.ninth ').eq(0).offset().top-$('.ninth').eq(0).height()&&scrolled<($('.ninth').eq(0).offset().top+$('.ninth').eq(0).height()))
        {
         var coords='left '+(-scrolled*0.1)+'px';
          $('.ninth').css('backgroundPosition',coords);
        }


        //the end part for tab 

        $('.eleventh').css('height','120%');
        $('.positionAvengerprev').eq(0).css({'height':'33%','top':'19%'});
        $('.positionAvengerprev').eq(1).css({'height':'250px','top':'9%'});

        $('.eleventh div').css({    'position': 'relative !important', 'height': '328px', 'background-color': 'rgba(0,0,0,0.91)', 'top': '52.5%', 'left': '-14px',
                                    'width': '104%', 'z-index': '9'});

        $('.eleventh div img').css({    'position': 'absolute !important', 'height': '33% !important' , 'top': '29%', 'left': '48%'});

        $('.eleventh div h3').css({    'position': 'absolute', 'font-size': '30px', 'color': 'white','font-family': "'Audiowide', cursive", 'top': '70%',
                                        'left': '45%'});


            if(scrolled>7590)
            {
                $('.eleventh').css({'-webkit-animation': 'flash ease-out 7s 4',
                  '-moz-animation': 'flash ease-out 7s 4',
                  'animation': 'flash ease-out 7s 4',
                  'animation-delay': '1s'})
            }
        


      }



  /*    var scrollobj=$(".parallax").eq(4);

        var x=$(window).scrollTop();

          var yPos = -(x / 10);

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            scrollobj.css({ backgroundPosition: coords });

              */
          if($(window).width()>800)
        {
              $('.parallax').each(function(){
               var $bgobj = $(this); // assigning the object



                $bgobj.css({transform:'scale('+(1+zoom1)+')'});


              });

          }
    });




    //scroll to a character on selecting it from the characters nav from top
    $("#jump li").click(function(){


            var select=$(this).attr('data-id');
                  // $(window).animate($(select).offset())


                   $('html, body').animate({
                      scrollTop: $(select).offset().top
                    }, 2000);

    });

    $('#scroltop').click(function(){

        $('html, body').animate({
          scrollTop: 0
        },1800);

    });

    function changesrc(){

      $('.seventh div div:nth-child(1) img').attr('src','images/hulk.png');

    }

    $('.seventh div div:nth-child(1) img').on('mouseenter',function(){

        $('.seventh div div:nth-child(1) img').animate({

              height:'500px'
              

        },1000,changesrc);

    });

    $('.seventh div div:nth-child(1) img').on('mouseleave',function(){

        $('.seventh div div:nth-child(1) img').attr('src','images/bruce_banner.png');
          $('.seventh div div:nth-child(1) img').css({'height':'50%'});

    });

    window.addEventListener('DOMMouseScroll', function(event){

      console.log('1 '+event.wheelDelta);


    }, false);
  /*  function wheel(event) {
      var delta = 0;
      if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
      else if (event.detail) {(delta = -event.detail / 3);}

      handle(delta);
      if (event.preventDefault) {(event.preventDefault());}
      event.returnValue = false;
  }

  function handle(delta) {
      var time = 900;
      var distance = 450;

      $('html, body').stop().animate({
          scrollTop: $(window).scrollTop() - (distance * delta)
      }, time );
  }

  if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
    window.onmousewheel = document.onmousewheel = wheel;*/




});
