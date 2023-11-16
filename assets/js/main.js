




function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

var prevWidth = window.innerWidth;
window.addEventListener('resize', ()=>{
    if (window.innerWidth !== prevWidth ) {
        prevWidth = window.innerWidth;
        setScreenSize()
    }
});
 

gsap.timeline({
  scrollTrigger : {
      trigger: '.mv_section',
      start: "top top",
      //end: ()=> `+=${cover_img_h}`,
      end: "bottom bottom",
      pinSpacing: false,
      pinType: "fixed",
      //anticipatePin:1,
      scrub:1,
      pin: '.mv',
      //markers:true,
      invalidateOnRefresh:true
  },
}).to('.mv',{
  opacity:0.5,
  duration:1
});


gsap.to('.mv_tit_cont',{
  opacity:0,
  duration:1,
  scale: 1.5,
  ease: 'power2.inOut',
  scrollTrigger : {
      trigger: '.mv_tit',
      start: "top top",
      //end: ()=> `+=${cover_img_h}`,
      end: "bottom top",
      //pinSpacing: false,
      pinType: "fixed",
      //anticipatePin:1,
      scrub:0.1,
      pin: '.mv_tit_cont',
      //markers:true,
      invalidateOnRefresh:true
  },
});
const mv_fade = document.querySelectorAll('.mv_fade');

// mv_fade.forEach((e, i)=>{
//   console.log(i);
//   console.log(mv_fade.length);
//   if(i < mv_fade.length - 1){
//     gsap.timeline({
//       scrollTrigger : {
//           trigger: e,
//           //toggleActions: "",
//           start: "-110% 45%",
//           end: "110% 45%",
//           //toggleActions: "play pause resume reset",
//           // onEnter: () => gsap,
//           // onEnterBack: ()=> document.getElementById('mv_vid2').play(),
//           // onLeave: () => gsap.to(e,{
//           //   duration:1, 
//           //   opacity:0.1,
//           // }),
//           //onLeaveBack: ()=> document.getElementById('mv_vid2').pause(),
//           scrub:0.1,
//          // markers: true,
//         }
//     }).to(e,{
//       opacity:1,
//       duration:1
//     }).to(e,{
//       opacity:0.15,
//       //duration:1
//     })
//   }else{
//     gsap.timeline({
//       scrollTrigger : {
//           trigger: e,
//           //toggleActions: "",
//           start: "-110% 45%",
//           end: "110% 45%",
//           //toggleActions: "play pause resume reset",
//           // onEnter: () => gsap,
//           // onEnterBack: ()=> document.getElementById('mv_vid2').play(),
//           // onLeave: () => gsap.to(e,{
//           //   duration:1, 
//           //   opacity:0.1,
//           // }),
//           //onLeaveBack: ()=> document.getElementById('mv_vid2').pause(),
//           scrub:0.1,
//          // markers: true,
//         }
//     }).to(e,{
//       opacity:1,
//       //duration:0.1
//     })
//   }
  
// })


gsap.to('.mv_txt',{
  opacity:1,
  
  ease: 'power2.inOut',
  scrollTrigger : {
      trigger: '.mv_txt',
      start: "top bottom",

      end: "center center",
      scrub: 1,
      invalidateOnRefresh:true,
      markers: true,
  },
})

const timeline = gsap.timeline({
  
  scrollTrigger : {
      trigger: '.mv_txt',
      start: "top top",
      //end: ()=> `+=${cover_img_h}`,
      end: "bottom bottom",
      //pinSpacing: false,
      //pinType: "fixed",
      //anticipatePin:1,
      scrub:1,
      pin: '.mv_txt_cont',
      //markers:true,
      invalidateOnRefresh:true,
      yoyo: true,
  },
});

timeline
.to('.mv_txt_item1',{opacity:1},0)
.to('.mv_txt_item1',{opacity:0.15},1)
.to('.mv_txt_item2', {opacity:1},1 )
.to('.mv_txt_item2',{opacity:0.15},2)
.to('.mv_txt_item3',{opacity:1},2 )
.to('.mv_txt_item3',{opacity:0.15},3)
.to('.mv_txt_item4',{opacity:1},3 )
.to('.mv_txt_item4',{opacity:0.15},4)
.to('.mv_txt_item5',{opacity:1},4 )
// .to('.mv_txt_item3',{opacity:1,}).to('.mv_txt_item2',{opacity:0.15,})
// .to('.mv_txt_item4',{opacity:1,}).to('.mv_txt_item3',{opacity:0.15,})
// .to('.mv_txt_item5',{opacity:1,}).to('.mv_txt_item4',{opacity:0.15,})


// timeline.to('.mv_txt_item1',{opacity:0.15,delay:1})
// timeline.to('.mv_txt_item2',{opacity:0.15,delay:1})
// timeline.to('.mv_txt_item3',{opacity:0.15,delay:1})
// timeline.to('.mv_txt_item4',{opacity:0.15,delay:1})
// timeline.to('.mv_txt_item5',{opacity:0.15,delay:1})




let currentScroll = 0;
let isScrollingDown = true;
let scrollTimer;
window.addEventListener("scroll", function(){
    if ( window.pageYOffset > currentScroll && currentScroll > 100 ) {
        isScrollingDown = true;
        //console.log('down');
        header.classList.add('up');
    } else {
        isScrollingDown = false;
        //console.log('down');
        header.classList.remove('up');
    }
    currentScroll = window.pageYOffset
});



let fill_txt_box = document.querySelector('.fill_txt_box');
let fill_txt = `오랜 업무 노하우를 바탕으로 디자인, 상품기획, 개발, 제작까지의 전문 기획 진행과 영업력, / 적재, 배송과 판매를 위한 원스탑 관리 물류 시스템을 도입하여 뷰티툴 전문 기업으로 발전하였습니다. / IOS 9001과 ISO 14001 인증을 획득하여 안정적인 시스템과 환경경영시스템 구축을 통하여 / 높은 수준의 제품과 품질 제공을 약속합니다.`
let fil_arr = fill_txt.split(" ");

fil_arr.forEach((e)=>{
    newBox = document.createElement('span');
    newBox_inner = document.createElement('span');
    br = document.createElement('br');
    gap = document.createElement('span');
    
    if (e === '/'){
        fill_txt_box.append(br);
    }else if(e === ' '){
        gap.classList.add('gap');
        fill_txt_box.append(gap);
    }else{
        newBox.classList.add('fill_txt_item');
        //newBox.innerHTML = e;
        newBox_inner.innerHTML = e;
        newBox.setAttribute('data-text',e); 
        newBox.setAttribute('data-delay',e.length);
        newBox_inner.style.transition = "width "+(e.length / 30)+"s linear";
        newBox.append(newBox_inner);
        fill_txt_box.append(newBox);
    }
});
let fill_txt_item = document.querySelectorAll('.fill_txt_box span');

let fill_timer;
let count = 0;
let delay ;
let interval;

function changeTimer() { 
    
}


function fill_ani(){
    clearInterval(fill_timer);
    if(count < fill_txt_item.length){
        fill_txt_item[count].classList.add('on');
        delay =  fill_txt_item[count].dataset.delay * 40; 
        count +=1;
       
        //console.log(fill_txt_item[count].style)
    }
    fill_timer = setInterval(fill_ani, delay);
}



function reset_ani(){
    //count = 0;
    clearInterval(fill_timer);
}
ScrollTrigger.create({
    trigger: fill_txt_box,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => fill_ani(),
    onEnterBack: ()=> fill_ani(),
    onLeave: () => reset_ani(),
    onLeaveBack: ()=> reset_ani(),
    //markers:true,
});



window.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('mv_vid').play();
})

gsap.to('.vid_open_cv',{
    duration:1, 
    width: 0,
    scrollTrigger : {
        trigger: '.vid_open_cv',
        toggleActions: "play pause reverse none",
        start: "top 100%",
        end: "bottom 20%",
        onEnter: () => document.getElementById('mv_vid2').play(),
        onEnterBack: ()=> document.getElementById('mv_vid2').play(),
        onLeave: () => document.getElementById('mv_vid2').pause(),
        onLeaveBack: ()=> document.getElementById('mv_vid2').pause(),
        scrub:0.5,
        //markers: true,
    }
});







const genNumber = () => {
    document.querySelector(".count_box").style.setProperty("--percent", 99.99 );
};
  

 
// ScrollTrigger.create({
//     trigger: '.count_box',
//     start: "top 80%",
//     end: "bottom top",
//     onEnter: () => genNumber(),

// });



function countEvent(target, start, end, duration) {
    var year = target.querySelector('.counter_box');
    var graph = target.querySelector('.graph_bar');
    year["var"] = Number(start);
    gsap.to(year, {
      "var": end,
      //delay: 0.75,
      duration: duration ? duration : 3,
      ease: 'power2.inOut',
      onUpdate: function onUpdate() {
        if (graph) {
          year.innerText = start == 0 ? Number(year["var"]).toFixed() : Number(year["var"]).toFixed();
          graph.style.width = Number(year["var"]).toFixed(5) + '%'
        } else {
          year.innerText = start == 0 ? Number(year["var"]).toFixed(3) : Number(year["var"]).toFixed();
        }
  
        year.setAttribute('data-value', end);
      }
    });
  }


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  function commasToNumber(num) {
    return num.split(',').join('');
  }

let counter = document.querySelectorAll('.counter');
// gsap.delayedCall(0.75, function () {
//   countEvent(counter, 0, counter.getAttribute('data-value'));
// });

counter.forEach((e, i)=>{
  ScrollTrigger.create({
    trigger: e,
    start: 'top 100%',
    once: true,
    delay: i * 0.1,
    onEnter: function onEnter(self){
      countEvent(e, 0, e.getAttribute('data-value'), 2);
    }
    
  });
})







