var next = document.getElementById("next")
var prev =document.getElementById("prev")
var sliders= document.querySelector("#slider ul")
var say=0;
 var sliderli=sliders.querySelectorAll("li").length
 var miniSlide=document.querySelectorAll(".miniSlider li")
for(var i=0; i<miniSlide.length;i++){
    miniSlide[i].onclick=function(){
        var imglink=this.querySelector("img").src;
        document.querySelector("#slider img").src=imglink
    }
}