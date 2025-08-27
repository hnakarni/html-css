let images = [
    "./image/img1.png",
    "./image/img2.png",
    "./image/img3.png",
    "./image/img4.png",
    "./image/img5.png",
    "./image/img6.png",
]

images.map((v,i)=>{
    let image = document.createElement('img');
    document.querySelector('.container').appendChild(image);
    image.src = v;
    image.className = "img";
})

let targets = document.querySelectorAll(".img");
const tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".section-1",
        start : "top",
        end : "bottom",
        pin : true,
        scrub : 1
    }
})

const random = (min,max) =>{
    return min + (max-min)*Math.random();
}

gsap.utils.toArray(".img").forEach((target)=>{
    tl.to(target,{
        x:random(-2000,2000),
        y:random(-1000,1000),
        rotation: random(-700,700),
        scale : 0
    },0);
});


gsap.to(".txt",{ 
    scale : 0,
    scrollTrigger:{
        start:()=>tl.scrollTrigger.end,
        end : "+=50%",
        pin : ".txt",
        pinType : "transform",
        scrub : 1
    }
})

