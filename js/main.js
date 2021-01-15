function toggle() {
    var trailer=document.querySelector(".trailer")
    var video=document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}

function infor() {
    var info=document.querySelector(".info")
    info.classList.toggle("active")
}

function boxInfor1() {
    var info=document.getElementById("box-infor");
    
    if(info.style.visibility === "hidden"){
        info.style.visibility = "visible";
        info.style.opacity = 1;
    } else {
        info.style.visibility = "hidden";
        info.style.opacity = 0;
    }
}

$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

$(document).ready(function () {
    $(".back-to-top").css("display", "block");
  $("body").scroll(function() {
      if($(this).scrollTop() == 0){
        $(".back-to-top").css("display", "none");
      } else {
        $(".back-to-top").css("display", "block");
      }
    });
  $(".back-to-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 800);
     });
  });