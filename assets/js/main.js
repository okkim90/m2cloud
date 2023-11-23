




function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

const prevWidth = window.innerWidth;
// window.addEventListener('resize', ()=>{
//     if (window.innerWidth !== prevWidth ) {
//         prevWidth = window.innerWidth;
//         setScreenSize()
//     }
// });

/* header */
const mv_section = document.querySelector('.mv_section');
const header = document.querySelector('.header');
ScrollTrigger.create({
    trigger: '.hd_no_bg',
    start:()=> "top " + header.offsetHeight,
    end:()=> "bottom " + header.offsetHeight,
    onEnter: () => header.classList.remove('on'),
    onLeave: () => {header.classList.add('on')},
    onEnterBack:() => header.classList.remove('on'),
    onLeaveBack:() => {header.classList.add('on')},
});

let lastScrollTop = 0;
let didScroll = false;
let isScrollingDown = true;
let scrollTimer;
let delta = 50;
window.addEventListener("scroll", function(){
  didScroll = true;
  setInterval(()=>{
    if(didScroll){
      hasScrolled();
      didScroll = false;
    }
  },100);
    
});

function hasScrolled(){
  let st = window.pageYOffset;
  if(Math.abs(lastScrollTop - st) < delta){
    return;
  }
  if (st > lastScrollTop && window.pageYOffset > 300){
    header.classList.add('up');
    if(window.pageYOffset + document.documentElement.clientHeight  > document.querySelector('#footer').offsetTop + 100){
        btn_top.classList.add('up')
    }else{
        btn_top.classList.remove('up')
    }
  }else{
    header.classList.remove('up');
    if(window.pageYOffset > 300){
        btn_top.classList.add('up')
    }else{
        btn_top.classList.remove('up')
    }
  }
  
  
  lastScrollTop = st
}

 

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

gsap.timeline({
  scrollTrigger : {
      trigger: '.mv_area',
      start: "top top",
      end: "bottom bottom",
      scrub:1,
      //markers:true,
      invalidateOnRefresh:true
  },
}).to('.mv',{
  opacity:0.5,
  duration:1
});

const mv_slogan_item = document.querySelectorAll('.mv_slogan_item');
const mv_fade = document.querySelectorAll('.mv_fade');

mm.add("(min-width: 1025px)", () => {

  gsap.timeline({
    scrollTrigger : {
        trigger: '.mv_slogan',
        start: "top top",
        //end: ()=> '+=1000',
        end: "bottom center",
        //pinSpacing: false,
        pinType: "fixed",
        anticipatePin:1,
        scrub:1,
        pin: '.mv_slogan_cont',
        //markers:true,
        invalidateOnRefresh:true
    },
  })
  .to('.mv_slogan_item1', {opacity:1,y:0, duration:1, ease:'none', },0)
  .to({},{duration:1})
  .to('.mv_slogan_item1', {opacity:0,y:'-10%',duration:1, ease:'none',},1)
  .to('.mv_slogan_item2', {opacity:1,y:0, duration:1, ease:'none',},1)
  .to({},{duration:1})
  .to('.mv_slogan_item2', {opacity:0,y:'-10%',duration:1, ease:'none', },2)
  .to('.mv_slogan_item3', {opacity:1,y:0,duration:1, ease:'none',  },2)
  .to({},{duration:1})
  .to('.mv_slogan_item3', {opacity:0,y:'-10%',duration:1, ease:'none', },3)

  gsap.to('.mv_tit_cont',{
    opacity:0,
    duration:1,
    scale: 1.5,
    ease: 'power2.inOut',
    scrollTrigger : {
        trigger: '.mv_tit',
        start: "top top",
        end: "bottom top",
        pinType: "fixed",
        scrub:0.1,
        pin: '.mv_tit_cont',
        invalidateOnRefresh:true
    },
  });
  
  
  // gsap.to('.mv_txt',{
  //   opacity:1,
  //   //y:0,
  //   ease: 'power2.inOut',
  //   scrollTrigger : {
  //       trigger: '.mv_txt',
  //       start: "top center",
  
  //       end: "center center",
  //       scrub: 1,
  //       invalidateOnRefresh:true,
  //       //markers: true,
  //   },
  // })

  


  /*  */
const fixed_area = document.querySelectorAll('.fixed_area');

fixed_area.forEach((e)=>{
  const fixed_area_bg = e.querySelector('.fixed_area_bg');
  const fixed_area_cont = e.querySelector('.fixed_area_cont');
  const fixed_area_item = e.querySelectorAll('.fixed_area_item');
  // gsap.timeline({
    
  //   scrollTrigger : {
  //       trigger: e,
  //       start: "top top",
  //       end: "bottom bottom",
  //       pinSpacing: true,
  //       pinType: "fixed",
  //       scrub:0.1,
  //       //anticipatePin:1,
  //       pin: fixed_area_bg,
  //       invalidateOnRefresh:true
  //   },
  // });

  gsap.timeline({
    scrollTrigger : {
        trigger: e,
        start: "top top",
        end: "bottom bottom",
        pinSpacing: true,
        pinType: "fixed",
       // anticipatePin:1,
        scrub:1,
        pin: fixed_area_cont,
        invalidateOnRefresh:true
    },
  })

  .to(fixed_area_item[0],{
    opacity:1,
    y:0,
    duration:1
  })
  
  .to(fixed_area_item[1],{
    opacity:1,
    y:0,
    duration:1
  })

  .to(fixed_area_item[2],{
    opacity:1,
    y:0,
    duration:1
  })
  
  
});
  

});










const timeline = gsap.timeline({
  
  scrollTrigger : {
      trigger: '.mv_txt',
      start: "top top",
      //end: ()=> `+=${cover_img_h}`,
      end: "bottom bottom",
       //pinSpacing: false,
      // pinType: "fixed",
      pinType: "fixed",
      anticipatePin:1,
      scrub:1,
      pin: '.mv_txt_cont',
     // markers:true,
      invalidateOnRefresh:true,
      //yoyo: true,
  },
});

timeline.to('.mv_txt_item1',{opacity:1, },0)
//.to({},{duration:1})
.to('.mv_txt_item1',{opacity:0.15, },1)
.to('.mv_txt_item2', {opacity:1,  },1 )
//.to({},{duration:1})
.to('.mv_txt_item2',{opacity:0.15,},2)
.to('.mv_txt_item3',{opacity:1,  },2 )
//.to({},{duration:1})




mm.add("(min-width: 1025px)", () => {
  gsap.timeline({
    scrollTrigger : {
        trigger: '.logi_fix',
        start: "top 85%",
        //end: ()=> `+=${cover_img_h}`,
        end: "80% center",
        // pinSpacing: false,
        // pinType: "fixed",
        //anticipatePin:1,
        scrub:0.2,
        //pin: '.mv_txt_cont',
        //markers:true,
        invalidateOnRefresh:true,
        //yoyo: true,
    },
  })
  .from('.logi_fix_img_inner',{ width:'100%',ease:'none', duration:1},0)
  .to('.logi_fix_img1',{width:'88.61%',ease:'none', duration:1},0)

  .to('.logi_fix_img2',{y:0, opacity:1,ease:'none', duration:1},0)
})













/*
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
*/


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
        end: "bottom center",
        onEnter: () => document.getElementById('mv_vid2').play(),
        //onEnterBack: ()=> document.getElementById('mv_vid2').play(),
        //onLeave: () => document.getElementById('mv_vid2').pause(),
        //onLeaveBack: ()=> document.getElementById('mv_vid2').pause(),
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
      delay: 0.2,
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










let wh = window.outerHeight;
const isInViewport = (target) => {
    let top = target.getBoundingClientRect().top - wh;
    let bot = target.getBoundingClientRect().top + target.offsetHeight;
    //console.log(top, bot)
    return (top + (wh/10) < 0 )  && (bot - (wh/10) > 0) ;
};
const aniBox = document.querySelectorAll('.aniBox');
['resize', 'scroll'].forEach(event => window.addEventListener(event, ()=>{
    wh = window.outerHeight;
    aniBox.forEach((e)=>{
        if(isInViewport(e)){
            e.classList.add('gogo');
        }
        // else {
        //     e.classList.remove('gogo');
        // }
    });
}));





const logistic_card = document.querySelectorAll('.logistic_card');
const logistic_card_btn = document.querySelectorAll('.logistic_card .card_btn');
logistic_card.forEach((e)=>{
  e.addEventListener('click',(event)=>{
    
    
    if(!e.classList.contains('on')){
      e.classList.add('on');
    } 
  });
});
logistic_card_btn.forEach((e)=>{
  let card = e.parentNode;

  e.addEventListener('click',(event)=>{
    if(card.classList.contains('on')){
      event.stopPropagation();
      card.classList.remove('on')
    }
    
  });
});


const solution_list_nav = ['LTE','BLE','LTE+BLE'];
const solution_list = new Swiper('.solution_list', {
  spaceBetween: 24,
  loop: true,
  loopedSlides:2,
  speed: 400,
  navigation: {
    nextEl: '.solution_list_next',
    prevEl: '.solution_list_prev',
  },
  pagination: {
    el: '.solution_list_page',
    clickable: true,
      renderBullet: function (index, className) {
        return '<div type="button" class="btn _tab '+ className +'">' + (solution_list_nav[index]) + '</div>';
      },
  },
});


/* go to top */
const btn_top = document.querySelector('.btn_top');
btn_top.addEventListener('click',()=>{
    let body = document.getElementsByTagName('body')[0];
   
    gsap.to(window,{
        duration: 0.8,
        ease: "power2.inOut",
        scrollTo:body.offsetTop,
        delay:  0.06
    })
});


/* nav */
function gnb_link(sec){
  let pos = document.querySelector(sec);
  const h_h = document.querySelector('#header').offsetHeight
  gsap.to(window,{
      duration: 0.8,
      ease: "power2.inOut",
      scrollTo:pos,
      delay:  0.06
  })
}

/* popup solutuion */ 
let popup_slide = undefined;
function open_popup(popup){
  //let target_popup = document.querySelector(`.popup_solution${idx}`);
  let target_popup = document.querySelector(`.${popup}`);
  target_popup.classList.add('on' );

  let video = target_popup.querySelector('video');
  let slide = target_popup.querySelector('.popup_slide');
  if(video){
    video.play();
  }
 
  if(slide){

    popup_slide = new Swiper(slide,{
      loop:true,
      pagination: {   //페이징 사용자 설정
        el: ".popup_slide_paging",   //페이징 태그 클래스 설정 
        type : 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.certification_slide_next',
        prevEl: '.certification_slide_prev',
      },
    });
  }
}






/* close popup */
function close_popup(target){
  let target_popup = target.closest('.popup');
  target_popup.classList.remove('on');
  let video = target_popup.querySelector('video');
  let slide = target_popup.querySelector('.popup_slide');
  if(video){
    video.pause();
    video.currentTime = 0;
  }
  if(slide){

    popup_slide.destroy();
    popup_slide = undefined;
  }
}


let logistic_swiper = undefined;
function init_logistic_swiper(){
  let ww =  window.innerWidth;
  //console.log(ww);
  if(ww < 1025 && logistic_swiper == undefined){
    logistic_swiper = new Swiper('.logistic_list',{
      slidesPerView:2,
      //loop:true,
      spaceBetween: 16,
      speed:400,
      navigation: {
        nextEl: '.logistic_list_next',
        prevEl: '.logistic_list_prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 1.3,
          spaceBetween: 12
        },
      }
    })
  }else if(ww >= 1025 && logistic_swiper != undefined){
    logistic_swiper.destroy();
    logistic_swiper = undefined;
  }
}
init_logistic_swiper();
window.addEventListener('resize',()=>{
  init_logistic_swiper()
})



const gnb_pos = () => {
  const elements = document.querySelectorAll(".sec_area");
  const nav_item = document.querySelectorAll('.nav_item');
  elements.forEach((e, i)=>{
      
      ScrollTrigger.create({
          trigger: e,
          start: `top center`,
          end: `bottom center`,
          onEnter: function() {
              
              nav_item[i].classList.add('on');
          },
         
          onEnterBack: function() {
              
              nav_item[i].classList.add('on');
          },
          onLeave: function() {
              nav_item.forEach((nav)=>{
                  nav.classList.remove('on')
              })
              //nav_item[i].classList.add('on');
          },
          onLeaveBack: function() {
              nav_item.forEach((nav)=>{
                  nav.classList.remove('on')
              })
              //nav_item[i].classList.add('on');
          },
          
          invalidateOnRefresh:true,
         //markers: true,
      });
  });
}


['DOMContentLoaded', 'scroll'].forEach(event => window.addEventListener(event, gnb_pos()));
