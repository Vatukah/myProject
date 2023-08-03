let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let testimonials=document.getElementById("testimonials")
let testimonial=document.querySelectorAll(".testimonial")
let servicesCarousal = document.getElementById("servicesCarousal");
let youtube=document.getElementById("youtube");
let playBtn=document.getElementById("playbtn");
let longPress;
let countinuousScroll;

testimonial[2].scrollIntoView();


//left btn to scroll
leftBtn.addEventListener("mousedown", (e) => {


  servicesCarousal.scrollLeft -= 120;
  longPress = setTimeout(() => {
    //countinuous scroll on longpress
    countinuousScroll = setInterval(() => {
      servicesCarousal.scrollLeft-=200;
    }, 100);
  }, 600);
});
leftBtn.addEventListener("mouseup", () => {
  clearInterval(countinuousScroll);
  clearTimeout(longPress);
});
leftBtn.addEventListener("mouseleave", () => {
  clearInterval(countinuousScroll);
  clearTimeout(longPress);

});
//right btn to scroll
rightBtn.addEventListener("mousedown", (e) => {
  servicesCarousal.scrollLeft += 120;
  longPress = setTimeout(() => {
    //countinuous scroll on longpress
    countinuousScroll = setInterval(() => {
      servicesCarousal.scrollLeft +=200;
    },100);
  }, 600);
});
rightBtn.addEventListener("mouseup", (e) => {
  clearInterval(countinuousScroll);
  clearTimeout(longPress);
});
rightBtn.addEventListener("mouseleave", () => {
  clearInterval(countinuousScroll);
  clearTimeout(longPress);
});

//---------------------------------------------testimonial prev and next btn
let currentIndex=0;
showSlide(currentIndex);



prev.addEventListener("click",prevSlide);
next.addEventListener("mousedown",nextSlide);

function showSlide(index){
  testimonial.forEach((item,i)=>{
    if(i==index){
      item.style.display="flex"
      item.style.transform="translate(0px)"
    }else{
      item.style.display="none"
    }
  })
}
function prevSlide(){
  currentIndex=(currentIndex - 1 + testimonial.length)%testimonial.length;
  showSlide(currentIndex);
}
function nextSlide(){
  currentIndex=(currentIndex + 1 )%testimonial.length;
  showSlide(currentIndex);
}
function autoSlide(){
  nextSlide();
  setTimeout(autoSlide,5000);
}
autoSlide();

// lazy loadfunctionality

const sourceID="x1nJXLM7Hhk";
let img=new Image;
 img.src="https://img.youtube.com/vi/"+ sourceID+ "/mqdefault.jpg";
 img.setAttribute("height","auto");
 youtube.appendChild(img)

 youtube.addEventListener("click",video)
 function video(){
  const iframe=document.createElement("iframe");
  iframe.src= "https://www.youtube.com/embed/"+ sourceID +"?rel=0&showinfo=0&autoplay=1";
  iframe.allow="autoplay";
  iframe.allowFullscreen=true;
  playBtn.style.display="none";
  youtube.replaceChild(iframe,img)
 }