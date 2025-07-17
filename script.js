let navfull=document.querySelector(".navfull")
let namecolor=document.querySelector(".logo-ch")
let btcolor=document.querySelectorAll(".bt-ch")
let targetsection=document.querySelector(".main-pre2")
let header=document.querySelector(".header")
let prenav=document.querySelector(".prenav")
let projectbar=document.querySelector("#project-bar")
let hovcolor=document.querySelector(" .hvr-underline-from-left")

let obersever=new IntersectionObserver((enteries)=>{
    enteries.forEach((entery)=>{
       if(entery.isIntersecting){
        navfull.classList.add("active")
        namecolor.classList.add("active")
        btcolor.forEach(button => button.classList.add("active"))
        header.classList.add("active")
        prenav.classList.add("active")
        hovcolor.classList.add("active")
    //   projectbar.classList.add("animate__animated","animate__fadeInLeft")  

                

       } 
       else{
            navfull.classList.remove("active")
        namecolor.classList.remove("active")
        btcolor.forEach(button => button.classList.remove("active"))
        header.classList.remove("active")
        prenav.classList.remove("active")
        hovcolor.classList.remove("active")
        // projectbar.classList.remove("animate__animated","animate__fadeInLeft")  
       }

    })
    
},{
  rootMargin: "0px 0px -91% 0px"
  
    // root:null,
    // threshold: [0.1, 0.1, 0.1],
    // rootMargin: "0px 0px -55% 0px"
}

);
obersever.observe(targetsection);

window.addEventListener("load",()=>{

    let loader=document.querySelector(".loader-container")
    let lockscrol=document.querySelector(".lock-scrol")
    let paragraph = document.querySelector("#blinking");


    setTimeout(()=>{
        lockscrol.classList.add("show")
        loader.classList.add("hide")
        paragraph.classList.add("active")
    },2000)
})






  let hamburger=document.querySelector(".hamburger")
  let navhalf=document.querySelector(".nav-section2")

hamburger.addEventListener("click", () => {
  if (navhalf.classList.contains("displayer")) {
    navhalf.classList.remove("displayer");
  } else {
    navhalf.classList.add("displayer");
  }
});

document.querySelector("body").addEventListener("click",(e)=>{
  if(e.target){
    navfull.classList.remove("displayer");
  }
})