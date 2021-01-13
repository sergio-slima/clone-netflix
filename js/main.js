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