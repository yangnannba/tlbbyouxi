function xia(){
  if($(this).scrollTop()>0){
    $("#nav").addClass("xia-on");
  }else{
    $("#nav").removeClass("xia-on");
  }
}
$(window).scroll(function(){
	xia();
})
	xia();
$(function(){	
$(".banner").backstretch(["images/banner1-bg.jpg","images/banner2-bg.jpg","images/banner3-bg.jpg"], {
        fade: 750,
        duration: 3000,
        preload: 1, //Use the lazy-loading functionality
        start: 2 //Optional - now starts with "dome.jpg"
   }); 
     }); 