
var isMobile = false;

function isMobileCheck() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      if (window.innerWidth < 769) {
        document.body.classList.add('is-mobile');
        scrollElement = window;
        ScrollTrigger.defaults({
          scroller: window
        });
        hideScrollbarOnScroll();
        return true;
      } else {
        return false;
      }
    } else {
      initSmoothScrollBar();
      document.body.classList.remove('is-mobile');
      return false;
    }
  }
//isMobileCheck();



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
        newBox_inner.style.transition = "width "+(e.length / 10)+"s linear";
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
        delay =  fill_txt_item[count].dataset.delay * 100; 
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
        markers: true,
    }
});







const genNumber = () => {
    document.querySelector(".count_box").style.setProperty("--percent", 99.99 );
};
  

 
ScrollTrigger.create({
    trigger: '.count_box',
    start: "top 80%",
    end: "bottom top",
    onEnter: () => genNumber(),

});



function countEvent(target, start, end, duration) {
    var year = target.querySelector('.counter_box');
    var graph = target.querySelector('.graph_bar');
    year["var"] = Number(start);
    gsap.to(year, {
      "var": end,
      duration: duration ? duration : 2,
      ease: 'power2.inOut',
      onUpdate: function onUpdate() {
        if (document.querySelector('.sustainability-contribution')) {
          year.innerText = Number(year["var"]).toFixed();
        } else {
          year.innerText = start == 0 ? Number(year["var"]).toFixed() : Number(year["var"]).toFixed();
          graph.style.width = Number(year["var"]).toFixed(5) + '%'
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

let counter = document.querySelector('.counter');
  gsap.delayedCall(0.75, function () {
    countEvent(counter, 0, counter.getAttribute('data-value'));
  });



ScrollTrigger.create({
    trigger: statsgroup,
    start: 'top 80%',
    once: true,
    delay: i * 0.1,
    onEnter: function onEnter(self) {
      if (statsgroup.classList.contains('is-load')) return;
      var target = stat.querySelectorAll('.char-inner');
      gsap.to(target, {
        y: '0%',
        duration: 0.75,
        ease: 'power2.out',
        stagger: 0.15,
        onStart: function onStart() {
          gsap.set(target, {
            opacity: 1
          });
        },
        onComplete: function onComplete() {
          if (stat.querySelector('.counter')) {
            var _target = stat.querySelector('.counter');

            var end = _target.getAttribute('data-value');

            countEvent(_target, 0, end, 0.65 + i * 0.2);
          }

          if (stat.classList.contains('single-stat-3')) {
            gsap.delayedCall(1.5, function () {
              gsap.set('.char-inner', {
                y: 0
              });
            });
          }
        }
      });
    }
})






function initSectionStats() {
    var statsgroup = document.querySelector('.section-index-stats .stats-group');
    ScrollTrigger.matchMedia({
      // large
      '(min-width: 769px)': function minWidth769px() {
        gsap.utils.toArray('.single-stat').forEach(function (stat, i) {
          if (!stat.querySelector('.char-inner')) {
            if (stat.querySelector('.chars')) {
              new SplitText(stat.querySelector('.chars'), {
                type: 'chars',
                charsClass: 'line-wrap'
              });
              new SplitText(stat.querySelector('.chars'), {
                type: 'chars',
                charsClass: 'char-inner'
              });
            }
          }
  
          if (statsgroup.classList.contains('is-load')) {
            gsap.set(stat.querySelectorAll('.chars .char-inner'), {
              y: 0
            });
          }
  
          ScrollTrigger.create({
            trigger: statsgroup,
            start: 'top 80%',
            once: true,
            delay: i * 0.1,
            onEnter: function onEnter(self) {
              if (statsgroup.classList.contains('is-load')) return;
              var target = stat.querySelectorAll('.char-inner');
              gsap.to(target, {
                y: '0%',
                duration: 0.75,
                ease: 'power2.out',
                stagger: 0.15,
                onStart: function onStart() {
                  gsap.set(target, {
                    opacity: 1
                  });
                },
                onComplete: function onComplete() {
                  if (stat.querySelector('.counter')) {
                    var _target = stat.querySelector('.counter');
  
                    var end = _target.getAttribute('data-value');
  
                    countEvent(_target, 0, end, 0.65 + i * 0.2);
                  }
  
                  if (stat.classList.contains('single-stat-3')) {
                    gsap.delayedCall(1.5, function () {
                      gsap.set('.char-inner', {
                        y: 0
                      });
                    });
                  }
                }
              });
            }
          });
        });
      },
      '(max-width: 768px)': function maxWidth768px() {
        gsap.utils.toArray('.stat-wrap.v-mb .single-stat').forEach(function (stat, i) {
          if (!stat.querySelector('.char-inner')) {
            if (!stat.classList.contains('stat-mb')) {
              if (stat.querySelector('.chars')) {
                new SplitText(stat.querySelector('.chars'), {
                  type: 'chars',
                  charsClass: 'line-wrap'
                });
                new SplitText(stat.querySelector('.chars'), {
                  type: 'chars',
                  charsClass: 'char-inner'
                });
              }
            }
          }
  
          var startPoint = i == 3 ? '-=20% 98%' : '-=40% 98%';
          ScrollTrigger.create({
            trigger: stat,
            start: startPoint,
            once: true,
            id: "".concat(i),
            onEnter: function onEnter(self) {
              var target = stat.querySelectorAll('.char-inner');
  
              if (!statsgroup.classList.contains('is-load')) {
                statsgroup.classList.add('is-load');
              }
  
              if (stat.classList.contains('stat-mb')) {
                target = document.querySelectorAll('.stat-mb .chars');
              }
  
              gsap.to(target, {
                y: '0%',
                duration: 0.65,
                ease: 'power2.out',
                stagger: 0.15,
                onStart: function onStart() {
                  gsap.set(target, {
                    opacity: 1
                  });
                  gsap.delayedCall(0.3, function () {
                    if (stat.querySelector('.counter')) {
                      var _target2 = stat.querySelector('.counter');
  
                      var end = _target2.getAttribute('data-value');
  
                      countEvent(_target2, 0, end, 0.55);
                    }
                  });
                },
                onComplete: function onComplete() {
                  if (stat.classList.contains('single-stat-2')) {
                    gsap.utils.toArray('.stat-wrap.v-pc .counter').forEach(function (c) {
                      var end = c.getAttribute('data-value');
                      countEvent(c, 0, end, 0);
                      gsap.set('.char-inner', {
                        y: 0
                      });
                    });
                  }
                }
              });
            }
          });
        });
      }
    });
  }