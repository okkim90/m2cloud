function _typeof(obj) {
    "@babel/helpers - typeof";
  
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
  
        var F = function F() {};
  
        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }
  
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  
    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function s() {
        it = it.call(o);
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null) it["return"]();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
  
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
  
    return arr2;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
  
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  
    return _setPrototypeOf(o, p);
  }
  
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
  
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;
  
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
  
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
  
      return _possibleConstructorReturn(this, result);
    };
  }
  
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
  
    return _assertThisInitialized(self);
  }
  
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return self;
  }
  
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
  
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
  
    return obj;
  }
  
  Element.prototype._getBoundingClientRect = Element.prototype.getBoundingClientRect;
  
  Element.prototype.getBoundingClientRect = function () {
    var rect = Element.prototype._getBoundingClientRect.call(this);
  
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }; ///////////////////////////////////////////// IE 11 CHECK
  
  
  var scrollElement = window;
  var bodyScrollBar;
  var isDarkMode = false;
  var setColor = isDarkMode ? '#000' : '#fff';
  var vh;
  
  function isIE() {
    var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
  
    var msie = ua.indexOf('MSIE '); // IE 10 or older
  
    var trident = ua.indexOf('Trident/'); //IE 11
  
    if (msie > 0 || trident > 0) {
      document.body.classList.add('isIE11');
      gsap.set(document.body, {
        backgroundColor: '#fff'
      });
      gsap.to(document.body, {
        opacity: 1,
        backgroundColor: '#fff',
        duration: 0.05,
        ease: 'power1.inOut'
      });
      gsap.to('.mask-item', {
        backgroundColor: '#fff',
        duration: 0.05
      });
    }
  
    return msie > 0 || trident > 0;
  }
  
  var isIE11 = isIE(); ////////////////////////////////////////////////////////////
  
  var isTabTrigger = false;
  var lang = document.documentElement.lang;
  var isMobile = false;
  var isToScrollTrigger = false;
  var clickEventTrigger = false; ////////////////////////////////////////////////////////////// Smooth Scroll Test
  
  gsap.config({
    nullTargetWarn: false
  });
  
  function initSmoothScrollBar() {
    document.body.classList.add('is-scroller');
  
    var ModalPlugin = /*#__PURE__*/function (_Scrollbar$ScrollbarP) {
      _inherits(ModalPlugin, _Scrollbar$ScrollbarP);
  
      var _super = _createSuper(ModalPlugin);
  
      function ModalPlugin() {
        _classCallCheck(this, ModalPlugin);
  
        return _super.apply(this, arguments);
      }
  
      _createClass(ModalPlugin, [{
        key: "transformDelta",
        value: function transformDelta(delta) {
          return this.options.open ? {
            x: 0,
            y: 0
          } : delta;
        }
      }]);
  
      return ModalPlugin;
    }(Scrollbar.ScrollbarPlugin);
  
    _defineProperty(ModalPlugin, "pluginName", 'modal');
  
    _defineProperty(ModalPlugin, "defaultOptions", {
      open: false
    });
  
    Scrollbar.use(ModalPlugin);
    Scrollbar.initAll();
    bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
      scrollIntoViewIfNeeded: true,
      plugins: {
        mobile: {
          // this is optional
          speed: 0.5
        }
      }
    });
    bodyScrollBar.update();
    scrollElement = bodyScrollBar;
    ScrollTrigger.scrollerProxy('.scroller', {
      scrollTop: function scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
          bodyScrollBar.setPosition(0, 0);
        }
  
        return bodyScrollBar.scrollTop;
      }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    hideScrollbarOnScroll();
    ScrollTrigger.defaults({
      scroller: '.scroller'
    });
    gsap.delayedCall(1, initScrollToButtonEvent);
  } ////////////////////////////////////////////////////////////// Smooth Scroll Test
  
  
  gsap.registerPlugin(ScrollTrigger);
  
  window.onbeforeunload = function () {
    gsap.set(window, {
      scrollTo: {
        y: 0
      }
    });
  };
  
  if (new URL(window.location.href).searchParams.get('contentId') == undefined && new URL(window.location.href).searchParams.get('lnbIndex') == undefined) {
    gsap.to(window, {
      scrollTo: {
        y: 0
      },
      onComplete: function onComplete() {}
    });
    window.scrollTo(0, 0);
  }
  
  window.addEventListener('resize', function () {
    resizeEvent();
  });
  
  function resizeEvent() {
    if (window.innerWidth > 768) {
      if (document.querySelector('.fixed-lnb')) {
        gsap.to('.fixed-lnb', {
          y: 0,
          top: 245
        });
      }
  
      if (isMobile == true) {
        isMobile = false;
        document.body.classList.remove('is-mobile');
  
        if (document.querySelector('.intro-section .intro-wrap')) {
          var wrap = document.querySelector('.intro-section .intro-wrap');
          gsap.set(wrap, {
            height: 'auto'
          });
        }
      }
    } else {
      if (document.querySelector('.intro-wrap')) {
        var banner = document.querySelector('.intro-wrap .banner');
  
        var _wrap = document.querySelector('.intro-section .intro-wrap');
  
        gsap.set(_wrap, {
          height: vh
        });
        gsap.set(banner, {
          paddingBottom: '105%'
        });
      }
  
      if (isMobile == false) {
        isMobile = true;
  
        if (document.querySelector('.fixed-lnb')) {
          gsap.killTweensOf('.fixed-lnb', 'all');
          gsap.to('.fixed-lnb', {
            top: 0,
            duration: 0.2,
            ease: 'power2.out'
          });
        }
  
        document.body.classList.add('is-mobile');
      }
    }
  
    if (document.querySelector('.select-option.is-selected')) {
      if (bodyScrollBar) {
        var button = document.querySelector('.select-option.is-selected');
        var optionList = document.querySelector('.is-option-active');
        var p = optionList.getAttribute('data-scroll-idx');
  
        var _scroller = document.querySelector("[data-scroll=\"".concat(p, "\""));
  
        gsap.set(_scroller, {
          maxHeight: "".concat(_scroller.offsetHeight, "px"),
          alignItems: 'flex-start'
        });
        gsap.set(optionList, {
          width: "".concat(button.offsetWidth, "px")
        });
      }
    }
  }
  
  function detectDevice() {
    ScrollTrigger.update();
  
    if (window.innerWidth > 768) {
      if (isMobile == true) {
        isMobile = false;
        document.body.classList.remove('is-mobile');
  
        if (document.querySelector('.fixed-lnb')) {
          var lnb = document.querySelector('.fixed-lnb');
          lnb.classList.add('is-pc');
          var wrap = document.querySelector('.intro-section .intro-wrap');
        }
  
        if (document.querySelector('.intro-section .intro-wrap')) {
          var _wrap2 = document.querySelector('.intro-section .intro-wrap');
  
          gsap.set(_wrap2, {
            height: 'auto'
          });
        }
      }
    } else {
      if (document.querySelector('.intro-wrap')) {
        var banner = document.querySelector('.intro-wrap .banner');
  
        var _wrap3 = document.querySelector('.intro-section .intro-wrap');
  
        gsap.set(_wrap3, {
          height: vh
        });
        var _height = _wrap3.clientHeight;
  
        if (document.querySelector('.fixed-lnb')) {
          if (document.body.classList.contains('is-mobile')) return;
          document.querySelector('.fixed-lnb').setAttribute('data-value', _height);
          gsap.set('.fixed-lnb', {
            top: _height
          });
        }
  
        gsap.set(banner, {
          paddingBottom: '105%'
        });
      }
  
      if (isMobile == false) {
        isMobile = true;
        document.body.classList.add('is-mobile');
  
        if (document.querySelector('.fixed-lnb')) {
          var _lnb = document.querySelector('.fixed-lnb');
  
          _lnb.classList.remove('is-pc');
        }
      }
    }
  
    gsap.delayedCall(0.3, initLNBScrollTrigger);
  }
  
  detectDevice();
  
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
  
  isMobileCheck();
  
  function singlegrid() {
    return window.innerWidth / 10;
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  function commasToNumber(num) {
    return num.split(',').join('');
  }
  
  function changeDateToText(date) {
    var dates = date.split('T')[0].split('-');
    return "".concat(dates[0], "\uB144 ").concat(dates[1].replace(/^0+/, ''), "\uC6D4 ").concat(dates[2].replace(/^0+/, ''), "\uC77C");
  }
  
  function changeDateWithDot(date) {
    if (date.split('T').length >= 1) {
      return date.replace(/\b0/g, '').split('T')[0].split('-').join('.');
    } else {
      return date.replace(/^0+/, '').split('-').join('.');
    }
  }
  
  var nav = document.querySelector('nav');
  var toplevel_a = document.querySelectorAll('.toplevel-li .toplevel-a');
  var submenu_a = document.querySelectorAll('.single-submenu a');
  
  var _loop = function _loop(i) {
    var a = toplevel_a[i];
    a.addEventListener('focusin', openSubNav);
    a.addEventListener('mouseenter', openSubNav);
    a.addEventListener('click', function (e) {
      e.preventDefault();
      location.href = a.closest('.toplevel-li').querySelector('.single-submenu a');
    });
  };
  
  for (var i = 0; i < toplevel_a.length; i++) {
    _loop(i);
  } // submenu a - focus
  
  
  for (var _i = 0; _i < submenu_a.length; _i++) {
    var a = submenu_a[_i];
    a.addEventListener('focusin', openSubNav);
    a.addEventListener('mouseenter', openSubNav);
  } // close dropdown menu when: focus in lang menu
  
  
  for (var _i2 = 0; _i2 < document.querySelectorAll('.language-menu a').length; _i2++) {
    var lang_a = document.querySelectorAll('.language-menu a')[_i2];
  
    lang_a.addEventListener('focusin', closeAllDropdown);
  }
  
  document.querySelector('.famsites-trigger').addEventListener('focusout', function (e) {
    if (e.relatedTarget == null) return;
    var _classList = e.relatedTarget.classList;
  
    if (!_classList.contains('famsites-trigger') && !_classList.contains('famsites-container') && !_classList.contains('famsites-link')) {
      closeFamsites();
    }
  }); // close dropdown menu when: mouseleave nav
  
  nav.addEventListener('mouseleave', closeAllDropdown); // close dropdown menu when: focus a
  
  document.querySelector('.logo a').addEventListener('focusin', closeAllDropdown);
  
  function openSubNav() {
    nav.classList.add('infocus');
  
    if (this.classList.contains('toplevel-a')) {
      var active_submenu = Number(this.getAttribute('data-id'));
    } else if (this.classList.contains('submenu-a')) {
      var active_submenu = Number(this.closest('.toplevel-li').querySelector('.toplevel-a').getAttribute('data-id'));
    }
  
    gsap.to('.submenu-bg', {
      display: 'block',
      opacity: 1,
      duration: 0.3,
      ease: 'power1.inOut'
    });
    gsap.to('.submenu-bg', {
      scaleY: 1,
      duration: 0.3,
      ease: 'power2.Out'
    }); //
  
    gsap.to('.single-submenu', {
      visibility: 'visible',
      opacity: 1,
      height: 'auto',
      duration: 0.3,
      ease: 'power1.inOut'
    });
    moveSubNavMarker(active_submenu);
  }
  
  function closeAllDropdown() {
    nav.className = '';
    gsap.to('.submenu-bg', {
      display: 'none',
      opacity: 0,
      duration: 0.3,
      ease: 'power1.inOut'
    });
    gsap.to('.submenu-bg', {
      scaleY: 0,
      duration: 0.3,
      ease: 'power2.Out'
    }); //
  
    gsap.to('.single-submenu', {
      opacity: 0,
      height: 0,
      duration: 0.4,
      ease: 'power1.inOut',
      onComplete: function onComplete() {
        gsap.set('.single-submenu', {
          visibility: 'hidden'
        });
      }
    });
  
    if (!document.querySelector('.index.page-wrap')) {
      moveSubNavMarker(Number(document.querySelector('.page-wrap').getAttribute('data-navactive-1')));
    } else {}
  
    if (scrollElement.scrollTop > 80) {
      nav.classList.add('is-bg-filled');
    }
  
    gsap.to('.submenu-activemarker', {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.inOut'
    });
  }
  
  function moveSubNavMarker(index) {
    var parent_x = document.querySelector('.dropdown-toplevel').getBoundingClientRect().x;
  
    if (document.querySelectorAll('.toplevel-li')[index]) {
      var child_x = document.querySelectorAll('.toplevel-li')[index].getBoundingClientRect().x;
      var offset_x = child_x - parent_x;
  
      if (lang == 'en') {
        offset_x = child_x - parent_x + parent_x;
      }
  
      gsap.to('.submenu-activemarker', {
        x: offset_x,
        width: document.querySelectorAll('.toplevel-li')[index].querySelector('.toplevel-a').getBoundingClientRect().width - 30,
        duration: 0.3,
        ease: 'power2.Out',
        onComplete: function onComplete() {
          if (nav.classList.contains('infocus')) {
            gsap.to('.submenu-activemarker', {
              opacity: 1,
              duration: 0.2,
              ease: 'power1.inOut'
            });
          }
        }
      });
    }
  }
  
  function updateActiveSubnav() {
    var active_toplevelnav_index = Number(document.querySelector('.page-wrap').getAttribute('data-navactive-1'));
    var active_subnav_index = document.querySelector('.page-wrap').getAttribute('data-navactive-2') != 'null' ? Number(document.querySelector('.page-wrap').getAttribute('data-navactive-2')) : null;
  
    if (active_subnav_index != null && active_subnav_index != NaN) {
      var active_subnav = document.querySelectorAll('.toplevel-li')[active_toplevelnav_index].querySelectorAll('.submenu-a')[active_subnav_index];
      active_subnav.classList.add('active');
    }
  } //
  
  
  function updateLangMenu() {
    document.querySelector('.language-menu').classList.add('active-' + lang);
  } /// TRIGGER to invert menu color
  
  
  function initMenuInvertTrigger() {
    gsap.utils.toArray('.menu-white').forEach(function (section) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 25%',
        end: 'bottom 25%',
        onToggle: function onToggle(self) {
          if (self.isActive) {
            menuToWhite();
          } else {
            menuToBlack();
          }
        }
      });
    });
  }
  
  function menuToWhite() {
    document.body.classList.add('invert-color');
  }
  
  function menuToBlack() {
    document.body.classList.remove('invert-color');
  } /// hide LNB if footer is in view
  
  
  function initScrollToButtonEvent() {
    gsap.utils.toArray('.icon-copyright').forEach(function (button) {
      button.onclick = function () {
        if (isToScrollTrigger) return;
        isToScrollTrigger = true;
  
        if (document.body.classList.contains('is-scrolled')) {
          if (bodyScrollBar) {
            bodyScrollBar.setPosition(0, 0);
            isToScrollTrigger = false;
          } else {
            gsap.to(scrollElement, {
              scrollTo: {
                y: 0
              },
              duration: 1,
              ease: 'power2.inOut',
              onComplete: function onComplete() {
                isToScrollTrigger = false;
                ScrollTrigger.getById('pinfooter').refresh();
  
                if (bodyScrollBar) {
                  bodyScrollBar.update();
                }
              }
            });
          }
        } else {
          var footerTop = document.querySelector('footer').offsetTop;
  
          if (bodyScrollBar) {
            bodyScrollBar.setPosition(0, footerTop);
            isToScrollTrigger = false;
          } else {
            gsap.to(scrollElement, {
              scrollTo: {
                y: footerTop
              },
              duration: 1,
              ease: 'power2.inOut',
              onComplete: function onComplete() {
                isToScrollTrigger = false;
                ScrollTrigger.getById('pinfooter').refresh();
  
                if (bodyScrollBar) {
                  bodyScrollBar.update();
                }
              }
            });
          }
        }
      };
    });
    ScrollTrigger.matchMedia({
      // large
      '(min-width: 769px)': function minWidth769px() {
        ScrollTrigger.create({
          trigger: 'footer',
          start: 'top-=160px bottom',
          onEnter: function onEnter(self) {
            self.refresh();
  
            if (document.querySelector('.fixed-lnb')) {
              gsap.killTweensOf('.fixed-lnb', 'all');
              gsap.set('.fixed-lnb', {
                top: 245
              });
              gsap.to('.fixed-lnb', {
                autoAlpha: 0,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          },
          onLeave: function onLeave(self) {
            self.refresh();
          },
          onToggle: function onToggle(self) {
            self.refresh();
  
            if (self.isActive) {
              if (document.querySelector('.fixed-lnb')) {
                gsap.killTweensOf('.fixed-lnb', 'all');
                gsap.to('.fixed-lnb', {
                  autoAlpha: 0,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              }
            } else {
              if (document.querySelector('.fixed-lnb')) {
                gsap.killTweensOf('.fixed-lnb', 'all');
                gsap.to('.fixed-lnb', {
                  autoAlpha: 1,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              }
            }
          }
        });
      }
    });
    ScrollTrigger.create({
      trigger: 'footer',
      start: 'top bottom',
      id: 'pinfooter',
      onEnter: function onEnter(self) {
        self.refresh();
        gsap.set('#top-copyright', {
          display: 'none '
        });
        gsap.set('#footer-copyright', {
          display: 'block '
        });
        gsap.to('.copyright-arrow', {
          rotate: '-180deg',
          duration: 0.3,
          ease: 'power2.out'
        });
        document.body.classList.add('is-scrolled');
        gsap.to('.toggle-darkmode', {
          autoAlpha: 0,
          duration: 0.2,
          ease: 'power1.inOut'
        });
      },
      onLeave: function onLeave(self) {
        self.refresh();
      },
      onToggle: function onToggle(self) {
        self.refresh();
  
        if (self.isActive) {
          gsap.set('#top-copyright', {
            display: 'none '
          });
          gsap.set('#footer-copyright', {
            display: 'block '
          });
          gsap.to('.copyright-arrow', {
            rotate: '-180deg',
            duration: 0.3,
            ease: 'power2.out'
          });
          document.body.classList.add('is-scrolled');
          gsap.to('.toggle-darkmode', {
            autoAlpha: 0,
            duration: 0.2,
            ease: 'power1.inOut'
          });
        } else {
          gsap.set('#top-copyright', {
            display: 'block'
          });
          gsap.set('#footer-copyright', {
            display: 'none'
          });
          gsap.to('.copyright-arrow', {
            rotate: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
          document.body.classList.remove('is-scrolled');
          gsap.to('.toggle-darkmode', {
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power1.inOut'
          });
        }
      }
    });
  } /// REUSABLE TRIGGERS - to unmask intro banner and text
  
  
  function initIntroBannerUnmask() {
    var tl_intro = gsap.timeline({
      delay: 0.6
    });
    tl_intro.addLabel('start');
    tl_intro.to('.intro-banner-to-unmask .mask-item', {
      scaleX: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: -0.09,
      onStart: function onStart() {}
    }, 'start');
    tl_intro.addLabel('mask');
    tl_intro.to('.intro-banner-to-unmask .bt-mask .text-item', {
      x: 0,
      duration: 1.6,
      stagger: 0.4,
      ease: 'power2.inOut'
    }, 'mask-=0.31');
    tl_intro.addLabel('title');
    tl_intro.to('.intro-banner-to-unmask .desc-inner', {
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power1.inOut'
    }, 'title-=0.6');
    tl_intro.addLabel('title2');
  }
  
  function initLNBScrollTrigger() {} /// REUSABLE TRIGGERS - fade in text groups on scrolltrigger
  
  
  function initTextFadeTrigger() {
    gsap.utils.toArray('.content-to-fade').forEach(function (section) {
      if (section.classList.contains('custom-override')) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        once: true,
        onEnter: function onEnter(self) {
          var tf_1 = section.querySelector('.c-tofade-1');
          var tf_2 = section.querySelector('.c-tofade-2');
          var tf_3 = section.querySelector('.c-tofade-3');
          var tf_delay = section.getAttribute('data-delay');
          var tl_tf = gsap.timeline({
            delay: tf_delay
          });
          tl_tf.addLabel('start');
  
          if (tf_1) {
            tl_tf.fromTo(tf_1, {
              opacity: 0
            }, {
              opacity: 1,
              duration: 0.6,
              ease: 'power1.inOut'
            }, 'start');
          }
  
          if (tf_2) {
            tl_tf.fromTo(tf_2, {
              opacity: 0
            }, {
              opacity: 1,
              duration: 0.6,
              ease: 'power1.inOut'
            }, '>-=0.3');
          }
  
          if (tf_3) {
            tl_tf.fromTo(tf_3, {
              opacity: 0
            }, {
              opacity: 1,
              duration: 0.6,
              ease: 'power1.inOut'
            }, '>-=0.4');
          }
        }
      });
    });
  }
  
  function mobileScrollText() {
    var scrolllText = document.querySelector('.mobile-scroll');
    gsap.to(scrolllText, {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.inOut',
      onStart: function onStart() {
        scrolllText.classList.add('is-show');
      }
    });
  } /// REUSABLE TRIGGERS - to squeeze intro banner on scroll
  
  
  function initSqueezeIntroBanner() {
    ScrollTrigger.matchMedia({
      // large
      '(min-width: 769px)': function minWidth769px() {
        var tl_squeeze_intro = gsap.timeline({
          scrollTrigger: {
            trigger: '.to-squeeze-onscroll',
            pin: true,
            // pin the trigger element while active
            pinSpacing: false,
            start: 'top top',
            // when the top of the trigger hits the top of the viewport
            end: '+=3000px',
            // end after scrolling 500px beyond the start
            scrub: 0.3,
            invalidateOnRefresh: false
          }
        }); // add animations and labels to the timeline
  
        tl_squeeze_intro.addLabel('start');
  
        if (!isMobile) {
          tl_squeeze_intro.to('.to-squeeze-onscroll .banner', {
            width: window.innerWidth / 10 * 4,
            ease: 'power2.inOut',
            duration: 1,
            onComplete: function onComplete() {}
          }, 'start');
        }
  
        tl_squeeze_intro.to('.to-squeeze-onscroll .banner', {
          height: window.innerHeight / 2,
          ease: 'power2.inOut',
          duration: 1
        }, 'start');
        tl_squeeze_intro.to('.to-squeeze-onscroll .big-text', {
          opacity: 0,
          ease: 'power2.inOut'
        }, 'start');
  
        if (document.querySelector('.to-squeeze-onscroll .main-text-group .text-desc')) {
          tl_squeeze_intro.addLabel('text');
          gsap.set(document.querySelector('.to-squeeze-onscroll .main-desc'), {
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut'
          }, 'start');
          tl_squeeze_intro.fromTo('.to-squeeze-onscroll .main-desc', {
            opacity: 1
          }, {
            opacity: 0,
            ease: 'power1.inOut'
          }, 'start');
        }
  
        if (document.querySelector('.squeeze-text')) {
          tl_squeeze_intro.fromTo('.squeeze-text ', {
            top: '100%'
          }, {
            top: '50%',
            ease: 'power2.inOut',
            duration: 1
          }, 'start');
          tl_squeeze_intro.to('.squeeze-text .squeeze-title', {
            autoAlpha: 1,
            ease: 'power1.inOut',
            duration: 0.3,
            delay: 0.4,
            stagger: 0.1
          }, 'start');
          tl_squeeze_intro.to('.squeeze-text .squeeze-desc', {
            autoAlpha: 1,
            ease: 'power1.inOut',
            duration: 0.3,
            delay: 0.55
          }, 'start');
  
          if (document.querySelector('.squeeze-text .tr-item')) {
            tl_squeeze_intro.to('.squeeze-text .tr-item', {
              autoAlpha: 1,
              ease: 'power1.inOut',
              duration: 0.3,
              delay: 0.7
            }, 'start');
          }
        }
      }
    });
  } // REUSABLE functions
  // REUSABLE functions
  
  
  function controlAccordion(parent, state) {
    var accordion_content = parent.querySelector('.accordion-to-expand');
  
    if (state) {
      parent.classList.add('open'); // open accordion
  
      gsap.to(accordion_content, {
        height: 'auto',
        opacity: 1,
        duration: 0.3
      });
  
      if (parent.classList.contains('content-list')) {
        var title = parent.querySelector('.content-title');
        gsap.to(title, {
          fontWeight: 800,
          duration: 0.3
        });
      }
    } else {
      // close accordion
      parent.classList.remove('open');
      gsap.to(accordion_content, {
        height: 0,
        opacity: 0,
        duration: 0.3
      });
  
      if (parent.classList.contains('content-list')) {
        var _title = parent.querySelector('.content-title');
  
        gsap.to(_title, {
          fontWeight: 400,
          duration: 0.3
        });
      }
    }
  }
  
  function initAccordion() {
    var accordion_triggers = document.querySelectorAll('.accordion-trigger');
  
    if (accordion_triggers) {
      var _loop2 = function _loop2(_i3) {
        var trigger = accordion_triggers[_i3];
  
        trigger.onclick = function () {
          var parent = trigger.closest('.accordion-parent');
  
          if (!parent.classList.contains('open')) {
            if (document.querySelector('.ir-corporate')) {
              if (document.querySelector('.accordion-parent.open')) {
                controlAccordion(document.querySelector('.accordion-parent.open'), false);
              }
            }
  
            controlAccordion(parent, true);
          } else {
            controlAccordion(parent, false);
          }
        };
      };
  
      for (var _i3 = 0; _i3 < accordion_triggers.length; _i3++) {
        _loop2(_i3);
      }
    }
  }
  
  initAccordion();
  
  function visibleGNBOnScroll(state) {
    var height = document.querySelector('nav').clientHeight;
    if (!document.querySelector('.fixed-lnb')) return;
    var lnb = document.querySelector('.fixed-lnb');
  
    if (state == 'hide') {
      // hide
      console.log('adadad');
      lnb.classList.remove('is-sticky');
    } else if (state == 'show') {
      console.log('adadad11'); // show
  
      lnb.classList.add('is-sticky');
    }
  }
  
  function hideScrollbarOnScroll() {
    var lastScrollTop;
    console.log('dddd');
  
    if (bodyScrollBar) {
      bodyScrollBar.addListener(function (e) {
        var scrollTop = e.offset.y;
  
        if (scrollTop > lastScrollTop && scrollTop > 0) {
          if (!nav.classList.contains('infocus')) {
            nav.classList.add('hide');
            visibleGNBOnScroll('hide');
          }
        } else {
          nav.classList.remove('hide');
          visibleGNBOnScroll('show');
        }
  
        if (scrollTop > document.querySelector('nav').clientHeight) {
          if (!nav.classList.contains('is-bg-filled')) {
            nav.classList.add('is-bg-filled');
  
            if (window.innerWidth < 769) {
              gsap.killTweensOf('.fixed-lnb', 'all');
              gsap.set('.fixed-lnb', {
                top: 0
              });
            }
          }
        } else {
          nav.classList.remove('is-bg-filled');
  
          if (document.querySelector('.fixed-lnb')) {
            if (window.innerWidth < 769) {
              gsap.killTweensOf('.fixed-lnb', 'all');
              gsap.set('.fixed-lnb', {
                top: 85
              });
            }
          }
        }
  
        lastScrollTop = scrollTop;
      });
    } else {
      window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop && scrollTop > 0) {
          if (!nav.classList.contains('infocus')) {
            nav.classList.add('hide');
            visibleGNBOnScroll('hide');
          }
        } else {
          nav.classList.remove('hide');
          visibleGNBOnScroll('show');
        }
  
        if (scrollTop > document.querySelector('nav').clientHeight) {
          if (!nav.classList.contains('is-bg-filled')) {
            nav.classList.add('is-bg-filled');
          }
        } else {
          nav.classList.remove('is-bg-filled');
        }
  
        lastScrollTop = scrollTop;
      });
    }
  }
  
  function smoothScrollControler(val) {
    if (!bodyScrollBar) return;
    bodyScrollBar.updatePluginOptions('modal', {
      open: val
    });
  } // common init scripts
  
  
  if (!document.querySelector('.index.page-wrap') && !document.querySelector('.policy-wrap.page-wrap')) {
    document.querySelectorAll('.dropdown-toplevel .toplevel-li')[Number(document.querySelector('.page-wrap').getAttribute('data-navactive-1'))].classList.add('active');
  }
  
  updateActiveSubnav();
  updateLangMenu(); // common - history, ir
  
  function countEvent(target, start, end, duration) {
    var year = target;
    year["var"] = Number(start);
    gsap.to(year, {
      "var": end,
      duration: duration ? duration : 0.6,
      ease: 'power2.inOut',
      onUpdate: function onUpdate() {
        if (document.querySelector('.sustainability-contribution')) {
          year.innerText = Number(year["var"]).toFixed();
        } else {
          year.innerText = start == 0 ? numberWithCommas(Number(year["var"]).toFixed()) : Number(year["var"]).toFixed();
        }
  
        year.setAttribute('data-value', end);
      }
    });
  }
  
  function initLNBActive(lnb) {
    var bar = lnb.querySelector('.bar');
    gsap.killTweensOf(bar, 'all');
    gsap.killTweensOf(lnb, 'all');
  
    if (isMobile) {
      gsap.set(bar, {
        scaleX: 0,
        scaleY: 1,
        transformOrigin: '0% 100%'
      });
      gsap.to(bar, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.1
      });
    } else {
      gsap.set(bar, {
        scaleY: 0,
        scaleX: 1
      });
      gsap.fromTo(bar, {
        scaleY: 0
      }, {
        scaleY: 1,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.1
      });
    }
  
    gsap.to(lnb, {
      color: isDarkMode ? '#fff' : '#000',
      duration: 0.3,
      ease: 'power1.inOut'
    });
    gsap.set(lnb, {
      fontWeight: 800
    });
  }
  
  function initLNBMotion() {
    if (document.querySelector('.fixed-lnb')) {
      if (document.querySelector('.fixed-lnb').classList.contains('custom-override')) return;
      var lnb = document.querySelector('.fixed-lnb .is-active');
      gsap.delayedCall(0.3, initLNBActive, [lnb]);
    }
  }
  
  initLNBMotion();
  
  function comleteLoadModalData(res) {
    // established_date - 제정
    // amend_date - 전면개정
    // contente - 내용
    var date;
  
    if (res.data.amend_date !== undefined) {
      date = "<span>".concat(lang == 'en' ? 'Enacted' : '제정', " ").concat(changeDateWithDot(res.data.established_date), "</span><span>").concat(lang == 'en' ? 'Wholly amended' : '전면개정', " ").concat(changeDateWithDot(res.data.amend_date), "</span>");
    } else {
      date = "<span>".concat(lang == 'en' ? 'Enacted' : '제정', " ").concat(changeDateWithDot(res.data.established_date), "</span>");
    }
  
    document.querySelector('.modal-date').innerHTML = date;
    document.querySelector('#modal .modal-content-inner').innerHTML = lang === 'ko' ? res.data.content : res.data.content_en;
  }
  
  function requestLoadModalData(api) {
    var connect = new ConnectManager(api, comleteLoadModalData);
    connect.serverData();
  } // Modal Event
  
  
  var scrollY;
  
  function scrollDisable() {
    document.body.classList.add('fixed-scroll');
  }
  
  function scrollEnable() {
    document.body.classList.remove('fixed-scroll');
  }
  
  function appHeight() {
    var doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
    vh = window.innerHeight;
  }
  
  appHeight();
  
  if (document.querySelector('.button-modal')) {
    var openModal = function openModal() {
      smoothScrollControler(true);
      var modal = document.querySelector('#modal');
      var modalDim = modal.querySelector('.dim');
      var modalHeader = modal.querySelector('.modal-title__container');
      var modalContainer = modal.querySelector('.modal-container');
      var modalBody = modal.querySelector('.modal-body__container');
      var modalTl = gsap.timeline();
      scrollDisable();
      modalTl.set(modal, {
        display: 'block'
      }).addLabel('start').addLabel('dimStart', 'start').addLabel('containerStart', 'dimStart+=.0').addLabel('bodyStart', 'containerStart+=.1').to(modalDim, {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 0.3
      }, 'dimStart').to(modalContainer, {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 0.2
      }, 'containerStart').to(modalBody, {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 0.2
      }, 'bodyStart').to(modalHeader, {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 0.2
      }, 'bodyStart');
    };
  
    var closeModal = function closeModal(e) {
      if (e.target.classList.contains('close-btn') || e.target.classList.contains('modal-container')) {
        smoothScrollControler(false);
  
        var _modal2 = document.querySelector('#modal');
  
        var _modalDim = _modal2.querySelector('.dim');
  
        var _modalHeader = _modal2.querySelector('.modal-title__container');
  
        var _modalContainer = _modal2.querySelector('.modal-container');
  
        var _modalBody = _modal2.querySelector('.modal-body__container');
  
        var modalTl = gsap.timeline();
        modalTl.addLabel('start').addLabel('containerStart', 'start').addLabel('dimStart', 'containerStart+=.2').to(_modalDim, {
          opacity: 0,
          ease: 'Power1.inOut',
          duration: 0.3
        }, 'dimStart').to(_modalContainer, {
          opacity: 0,
          ease: 'Power1.inOut',
          duration: 0.3,
          onComplete: function onComplete() {
            _modalBody.scrollTop = 0;
            scrollEnable();
          }
        }, 'containerStart').set(_modal2, {
          display: 'none'
        }).set(_modalBody, {
          opacity: 0
        });
      }
    };
  
    var modalButton = document.querySelector('.button-modal'); // investment/governance/council/regulation
  
    var requestAPI = modalButton.getAttribute('data-modal');
  
    if (requestAPI == 'regulation') {
      requestLoadModalData('investment/governance/council/regulation');
    } else if (requestAPI == 'auditcommitee') {
      requestLoadModalData('investment/governance/auditcommittee/regulation');
    }
  
    var _modal = document.querySelector('#modal');
  
    modalButton.addEventListener('click', function () {
      openModal();
    });
    _modal === null || _modal === void 0 ? void 0 : _modal.addEventListener('click', closeModal);
  }
  
  var modal = document.querySelector('#footer-modal');
  var modalDim = modal.querySelector('.dim');
  var modalHeader = modal.querySelector('.modal-title__container');
  var modalContainer = modal.querySelector('.modal-container');
  var modalBody = modal.querySelector('.modal-body__container');
  
  function openFooterModal() {
    var modalTl = gsap.timeline();
    smoothScrollControler(true);
    scrollDisable();
    modalTl.set(modal, {
      display: 'block'
    }).addLabel('start').addLabel('dimStart', 'start').addLabel('containerStart', 'dimStart+=.0').addLabel('bodyStart', 'containerStart+=.1').to(modalDim, {
      opacity: 1,
      ease: 'Power1.inOut',
      duration: 0.3
    }, 'dimStart').to(modalContainer, {
      opacity: 1,
      ease: 'Power1.inOut',
      duration: 0.2
    }, 'containerStart').to(modalBody, {
      opacity: 1,
      ease: 'Power1.inOut',
      duration: 0.2
    }, 'bodyStart').to(modalHeader, {
      opacity: 1,
      ease: 'Power1.inOut',
      duration: 0.2
    }, 'bodyStart');
  }
  
  function closeFooterModal(e) {
    if (e.target.classList.contains('close-btn') || e.target.classList.contains('modal-container')) {
      smoothScrollControler(false);
      var modalTl = gsap.timeline();
      modalTl.addLabel('start').addLabel('containerStart', 'start').addLabel('dimStart', 'containerStart+=.2').to(modalDim, {
        opacity: 0,
        ease: 'Power1.inOut',
        duration: 0.3
      }, 'dimStart').to(modalContainer, {
        opacity: 0,
        ease: 'Power1.inOut',
        duration: 0.3,
        onComplete: function onComplete() {
          modalBody.scrollTop = 0;
          scrollEnable();
        }
      }, 'containerStart').set(modal, {
        display: 'none'
      }).set(modalBody, {
        opacity: 0
      });
    }
  }
  
  modal.addEventListener('click', closeFooterModal);
  
  function setFooterModal(title, content, isEmail) {
    document.querySelector('#footer-modal').classList.remove('email');
  
    if (isEmail) {
      document.querySelector('#footer-modal').classList.add('email');
    }
  
    var titleElem = document.querySelector('#footer-modal .modal-title');
    var contentElem = document.querySelector('#footer-modal .modal-content-inner');
    titleElem.innerHTML = title;
    contentElem.innerHTML = content;
  }
  
  function emailModal(target) {
    if (target && target.classList.contains('email-modal')) {
      setFooterModal('이메일주소 무단수집 거부', '본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 <b>"정보통신망 이용 촉진 및 정보보호 등에 관련 법률"</b>에 의해 형사 처벌받을 수 있습니다.', true);
      openFooterModal();
    }
  }
  
  function manageRuleModal(target) {
    if (target && target.classList.contains('manage-modal')) {
      setFooterModal('영상정보처리기기 운영·관리 방침', "\n            <div class='text-inform'>\n                <span class='small'>(\uC8FC)</span>NICE\uD640\uB529\uC2A4(\uC774\uD558 '\uD68C\uC0AC'\uB77C \uD568)\uB294 \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30 \uC6B4\uC601\xB7\uAD00\uB9AC \uBC29\uCE68\uC744 \uD1B5\uD574 \uD68C\uC0AC\uC5D0\uC11C \uCC98\uB9AC\uD558\uB294 \uC601\uC0C1\uC815\uBCF4\uAC00 \uC5B4\uB5A0\uD55C \uC6A9\uB3C4\uC640 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\xB7\uAD00\uB9AC\uB418\uACE0 \uC788\uB294\uC9C0 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\n            </div>\n            <div class='rule rule-1'>\n                <div class='rule-title'>1. \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30\uC758 \uC124\uCE58 \uADFC\uAC70 \uBC0F \uC124\uCE58 \uBAA9\uC801</div>\n                <div class='rule-desc'>\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C25\uC870 \uC81C1\uD56D\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC740 \uBAA9\uC801\uC73C\uB85C \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30\uB97C \uC124\uCE58\xB7\uC6B4\uC601\uD569\uB2C8\uB2E4.</div>\n                <div class='rule-list'>\n                    <li class='rule-list--item'>- \uC2DC\uC124\uACFC \uC548\uC804 \uBC0F \uD654\uC7AC \uC608\uBC29</li>\n                    <li class='rule-list--item'>- \uACE0\uAC1D\uACFC \uC784\uC9C1\uC6D0\uC758 \uC548\uC804 \uBC0F \uC7AC\uC0B0\uBCF4\uD638\uB97C \uC704\uD55C \uBC94\uC8C4 \uC608\uBC29</li>\n                    <li class='rule-list--item'>- \uD68C\uC0AC\uC758 \uC720\xB7\uBB34\uD615 \uC790\uC0B0 \uBCF4\uD638 \uBC0F \uC815\uBCF4\uC720\uCD9C \uC0AC\uACE0 \uC608\uBC29</li>\n                </div>\n            </div>\n            <div class='rule rule-2'>\n                <div class='rule-title'>2. \uC124\uCE58 \uB300\uC218, \uC124\uCE58 \uC704\uCE58 \uBC0F \uCD2C\uC601 \uBC94\uC704</div>\n                <div class='rule-desc'>\uD68C\uC0AC\uB294 \uC601\uC0C1\uCC98\uB9AC\uAE30\uAE30\uAC00 \uC124\uCE58\uB41C \uC7A5\uC18C\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uC27D\uAC8C \uC54C\uC544\uBCFC \uC218 \uC788\uB3C4\uB85D \uC548\uB0B4\uD310\uC744 \uC124\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</div>\n                <div class='rule-table'>\n                    <table cellspacing='0' cellpadding='0'>\n                        <thead>\n                            <th>\uC124\uCE58 \uB300\uC218</th>\n                            <th>\uC124\uCE58 \uC704\uCE58 \uBC0F \uCD2C\uC601 \uBC94\uC704</th>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>84\uB300</td>\n                                <td>\uBCF8\uC0AC / \uB85C\uBE44, \uC0AC\uC625 \uC8FC\uBCC0, \uC8FC\uCC28\uC7A5, 1\uCE35 \uCE74\uD398\uD14C\uB9AC\uC544 \uB4F1</td>\n                            </tr>\n                                                      <tr>\n                                <td>80\uB300</td>\n                                <td>IDC / \uB85C\uBE44, \uC8FC\uCC28\uC7A5, \uAC74\uBB3C\uB0B4\uBD80 \uB4F1</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class='rule rule-3'>\n                <div class='rule-title'>3. \uAD00\uB9AC\uCC45\uC784\uC790 \uBC0F \uC811\uADFC\uAD8C\uD55C\uC790</div>\n                <div class='rule-desc'>\uC601\uC0C1\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0 \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC640 \uAD00\uB828\uD55C \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uB450\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</div>\n                <div class='rule-table'>\n                    <table cellspacing='0' cellpadding='0'>\n                        <thead>\n                            <th>\uAD6C\uBD84</th>\n                            <th>\uC18C\uC18D</th>\n                            <th>\uC774\uB984 / \uC9C1\uC704</th>\n                            <th>\uC5F0\uB77D\uCC98</th>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\uAD00\uB9AC\uCC45\uC784\uC790(\uC0AC\uC625)</td>\n                                <td>\uACBD\uC601\uAE30\uD68D\uC2E4</td>\n                                <td>\uC7A5\uD638\uC900 / \uC2E4\uC7A5</td>\n                                <td>02-2122-4000</td>\n                            </tr>\n                            <tr>\n                                <td>\uAD00\uB9AC\uCC45\uC784\uC790(IDC)</td>\n                                <td>IS\uD601\uC2E0\uC2E4</td>\n                                <td>\uBC31\uC11D\uC8FC / \uC2E4\uC7A5</td>\n                                <td>02-2122-4000</td>\n                            </tr>\n                            <tr>\n                                <td>\uC811\uADFC\uAD8C\uD55C\uC790</td>\n                                <td>\uBC29\uC7AC\uC2E4</td>\n                                <td>\uAC01 \uC0AC\uC625\uBCC4 \uAD00\uB9AC\uC18C\uC7A5</td>\n                                <td></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class='rule rule-4'>\n                <div class='rule-title'>4. \uC601\uC0C1\uC815\uBCF4\uC758 \uCD2C\uC601\uC2DC\uAC04, \uBCF4\uAD00\uAE30\uAC04, \uBCF4\uAD00\uC7A5\uC18C \uBC0F \uCC98\uB9AC\uBC29\uBC95</div>\n                <div class='rule-table'>\n                    <table cellspacing='0' cellpadding='0'>\n                        <thead>\n                            <th>\uCD2C\uC601\uC2DC\uAC04</th>\n                            <th>\uBCF4\uAD00\uAE30\uAC04</th>\n                            <th>\uBCF4\uAD00\uC7A5\uC18C</th>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>24\uC2DC\uAC04</td>\n                                <td>3\uAC1C\uC6D4 \uC774\uD558</td>\n                                <td>\uC548\uC804\uAD6C\uC5ED \uB0B4 \uBCC4\uB3C4\uBCF4\uAD00</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class='rule-desc'>\n                    - \uCC98\uB9AC\uBC29\uBC95: \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC758 \uBAA9\uC801 \uC678 \uC774\uC6A9, \uC81C 3\uC790 \uC81C\uACF5, \uD30C\uAE30, \uC5F4\uB78C \uB4F1 \uC694\uAD6C\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAE30\uB85D\xB7\uAD00\uB9AC\uD558\uACE0, \uBCF4\uAD00\uAE30\uAC04 \uB9CC\uB8CC \uC2DC \uBCF5\uC6D0\uC774 \uBD88\uAC00\uB2A5\uD55C \uBC29\uBC95\uC73C\uB85C \uC601\uAD6C \uC0AD\uC81C(\uCD9C\uB825\uBB3C\uC758 \uACBD\uC6B0 \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01)\uD569\uB2C8\uB2E4.\n                </div>\n            </div>\n            <div class='rule rule-5'>\n                <div class='rule-title'>5. \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC758 \uD655\uC778 \uBC29\uBC95 \uBC0F \uC7A5\uC18C\uC5D0 \uAD00\uD55C \uC0AC\uD56D</div>\n                <div class='rule-list'>\n                    <li class='rule-list--item'>- \uD655\uC778 \uBC29\uBC95: \uC601\uC0C1\uC815\uBCF4 \uAD00\uB9AC\uCC45\uC784\uC790\uC5D0\uAC8C \uBBF8\uB9AC \uC5F0\uB77D\uD558\uACE0 \uD68C\uC0AC\uC5D0 \uBC29\uBB38\uD558\uC2DC\uBA74 \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</li>\n                    <li class='rule-list--item'>- \uD655\uC778 \uC7A5\uC18C: (\uC8FC)NICE\uD640\uB529\uC2A4 \uACBD\uC601\uAE30\uD68D\uC2E4 \uBC0F IS\uD601\uC2E0\uC2E4</li>\n                </div>\n            </div>\n            <div class='rule rule-6'>\n                <div class='rule-title'>6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC601\uC0C1\uC815\uBCF4 \uC5F4\uB78C \uB4F1 \uC694\uAD6C\uC5D0 \uB300\uD55C \uC870\uCE58</div>\n                <div class='rule-desc'>\n                    \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C \uB610\uB294 \uC874\uC7AC\uD655\uC778\xB7\uC0AD\uC81C\uB97C \uC6D0\uD558\uB294 \uACBD\uC6B0 \uC5B8\uC81C\uB4E0\uC9C0 \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30 \uC6B4\uC601\uC790\uC5D0\uAC8C \uC694\uAD6C\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uADC0\uD558\uAC00 \uCD2C\uC601\uB41C \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4 \uBC0F \uBA85\uBC31\uD788 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAE09\uBC15\uD55C \uC0DD\uBA85, \uC2E0\uCCB4, \uC7AC\uC0B0\uC758 \uC774\uC775\uC744 \uC704\uD558\uC5EC \uD544\uC694\uD55C \uAC1C\uC778\uC815\uBCF4\uC5D0 \uD55C\uC815\uB429\uB2C8\uB2E4.\n                    <br />\n                    \uD68C\uC0AC\uB294 \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C \uB610\uB294 \uC874\uC7AC\uD655\uC778\xB7\uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0 \uC9C0\uCCB4 \uC5C6\uC774 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uD558\uACA0\uC2B5\uB2C8\uB2E4.\n                </div>\n            </div>\n            <div class='rule rule-7'>\n                <div class='rule-title'>7. \uC601\uC0C1\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4\uC870\uCE58</div>\n                <div class='rule-desc'>\n                    \uD68C\uC0AC\uB294 \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uAE30 \uC704\uD558\uC5EC \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC5D0 \uB300\uD55C \uC811\uADFC \uAD8C\uD55C\uC744 \uCC28\uB4F1\uBD80\uC5EC\uD558\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC758 \uC704\xB7\uBCC0\uC870 \uBC29\uC9C0\uB97C \uC704\uD558\uC5EC \n                    \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC758 \uC774\uC6A9\xB7\uC81C\uACF5\xB7\uC5F4\uB78C\xB7\uD30C\uAE30\uC5D0 \uB300\uD558\uC5EC \uAE30\uB85D\uD558\uC5EC \uAD00\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC678\uC5D0\uB3C4 \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uC758 \uC548\uC804\uD55C \uBB3C\uB9AC\uC801 \uBCF4\uAD00\uC744 \uC704\uD558\uC5EC \n                    \uAC1C\uC778\uC601\uC0C1\uC815\uBCF4\uAC00 \uBCF4\uAD00\uB41C \uC7A5\uC18C\uC5D0 \uC7A0\uAE08 \uC7A5\uCE58\uB97C \uC124\uC815\uD558\uACE0 \uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uB294 \uC778\uC6D0\uC5D0 \uB300\uD574\uC11C\uB294 \uC811\uADFC\uC744 \uCC28\uB2E8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n                </div>\n            </div>\n            <div class='rule rule-8'>\n                <div class='rule-title'>8. \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30 \uC6B4\uC601\xB7\uAD00\uB9AC \uBC29\uCE68 \uBCC0\uACBD\uC5D0 \uAD00\uD55C \uC0AC\uD56D</div>\n                <div class='rule-desc'>\n                    \uC774 \uC601\uC0C1\uC815\uBCF4\uCC98\uB9AC\uAE30\uAE30 \uC6B4\uC601\xB7\uAD00\uB9AC\uBC29\uCE68\uC740 2014\uB144 5\uC6D4 1\uC77C\uC5D0 \uC81C\uC815\uB418\uC5C8\uC73C\uBA70 \uBC95\uB839\xB7\uB0B4\uADDC \uB610\uB294 \uBCF4\uC548\uAE30\uC220\uC758 \uBCC0\uACBD\uC5D0 \uB530\uB77C \uB0B4\uC6A9\uC758 \uCD94\uAC00\xB7\uC0AD\uC81C \uBC0F \uC218\uC815\uC774 \uC788\uC744 \uC2DC\uC5D0\uB294 \uBCF8\uC0AC \uC778\uD130\uB137 \uD648\uD398\uC774\uC9C0\uC5D0 \uC9C0\uC18D\uC801\uC73C\uB85C \uAC8C\uC7AC\uD558\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.\n                </div>\n                <div class='rule-date'>\n                    <li class='rule-date--item'>- \uACF5\uACE0\uC77C\uC790: 2014\uB144 5\uC6D4 1\uC77C / \uC2DC\uD589\uC77C\uC790 : 2014\uB144 5\uC6D4 2\uC77C</li>\n                    <li class='rule-date--item'>- 1\uCC28 \uAC1C\uC815\uC77C\uC790: 2018\uB144 7\uC6D4 1\uC77C</li>\n                    <li class='rule-date--item'>- 2\uCC28 \uAC1C\uC815\uC77C\uC790: 2019\uB144 4\uC6D4 29\uC77C</li>\n                </div>\n            </div>\n            \n            \n            ");
      openFooterModal();
    }
  }
  
  function openFamsites() {
    var famSiteContent = document.querySelector('.famsites-container');
    var famsitesTrigger = document.querySelector('.famsites-trigger');
    famsitesTrigger.classList.add('open');
    gsap.to(famSiteContent, {
      height: 'auto',
      autoAlpha: 1,
      duration: 0.3,
      onComplete: function onComplete() {
        if (bodyScrollBar) {
          Scrollbar.init(famSiteContent, {
            damping: 1,
            delegateTo: famSiteContent,
            alwaysShowTracks: true,
            continuousScrolling: false
          });
        }
      }
    });
  }
  
  function closeFamsites() {
    var famSiteContent = document.querySelector('.famsites-container');
    var famsitesTrigger = document.querySelector('.famsites-trigger');
    famsitesTrigger.classList.remove('open');
    gsap.to(famSiteContent, {
      height: 0,
      autoAlpha: 0,
      duration: 0.3,
      onComplete: function onComplete() {
        famSiteContent.scrollTo(0, 0);
      }
    });
  } // Footer Event
  
  
  function initFooterEvent() {
    var footer = document.querySelector('footer .footer-pc');
    footer.addEventListener('click', function (e) {
      emailModal(e.target);
      manageRuleModal(e.target);
  
      if (e.target.classList.contains('famsites-trigger')) {
        if (e.target.classList.contains('open')) {
          closeFamsites();
        } else {
          openFamsites();
        }
      }
  
      if (!e.target.classList.contains('famsites-trigger') && !e.target.classList.contains('famsites-container') && !e.target.classList.contains('famsites-link')) {
        closeFamsites();
      }
    });
  }
  
  initFooterEvent(); // Footer Event for mobile
  
  function initFooterEventMobile() {
    var footer = document.querySelector('footer .footer-mobile');
    footer.addEventListener('click', function (e) {
      emailModal(e.target);
      manageRuleModal(e.target);
    });
  }
  
  initFooterEventMobile();
  
  function introVisualTrigger() {
    ScrollTrigger.matchMedia({
      // large
      '(min-width: 769px)': function minWidth769px() {
        gsap.utils.toArray('.intro-wrap').forEach(function (intro) {
          if (intro.querySelector('.banner')) {
            var banner = intro.querySelector('.banner');
            gsap.killTweensOf(banner, 'all');
            gsap.set(banner, {
              paddingBottom: 0
            });
          }
        });
      },
      // small
      '(max-width: 768px)': function maxWidth768px() {
        gsap.utils.toArray('.intro-wrap').forEach(function (intro) {
          var banner = intro.querySelector('.banner');
          gsap.set(banner, {
            paddingBottom: '105%'
          });
          gsap.to(banner, {
            scrollTrigger: {
              trigger: intro,
              start: 'top-=20% top',
              end: 'bottom 0%',
              scrub: 0.5
            },
            paddingBottom: '63%'
          });
        });
      }
    });
  }
  
  function initIntroWithLNB() {
    var lnb = document.querySelector('.fixed-lnb');
    var offsetY = lnb.clientHeight;
    ScrollTrigger.matchMedia({
      // small
      '(min-width: 769px)': function minWidth769px() {
        if (lnb.classList.contains('is-sticky')) {
          gsap.set(lnb, {
            y: 245
          });
        }
      },
      '(max-width: 768px)': function maxWidth768px() {
        if (document.querySelector('.lnb-center')) {
          ScrollTrigger.create({
            trigger: '.intro-with-lnb',
            start: "bottom top+=2px",
            endTrigger: 'footer',
            end: "100% 30%",
            scrub: 0.5,
            invalidateOnRefresh: true,
            onToggle: function onToggle(self) {
              if (self.isActive) {
                if (lnb.hasAttribute('data-value')) {
                  gsap.set(lnb, {
                    top: 0
                  });
                }
  
                lnb.classList.add('is-fixed');
              } else {
                if (lnb.hasAttribute('data-value')) {
                  gsap.set(lnb, {
                    top: lnb.getAttribute('data-value')
                  });
                }
  
                if (lnb.classList.contains('is-sticky')) {
                  gsap.set(lnb, {
                    y: '-100%'
                  });
                }
  
                gsap.set(lnb, {
                  y: 0,
                  onComplete: function onComplete() {
                    lnb.classList.remove('is-fixed');
                    gsap.set(lnb, {
                      opacity: 1
                    });
                  }
                });
              }
            }
          });
          ScrollTrigger.create({
            trigger: '.intro-with-lnb',
            start: "bottom top+=70",
            scrub: 0.5,
            onToggle: function onToggle(self) {
              if (self.isActive) {
                if (lnb.hasAttribute('data-value')) {
                  gsap.set(lnb, {
                    top: lnb.getAttribute('data-value')
                  });
                }
  
                gsap.set(lnb, {
                  y: 0,
                  onComplete: function onComplete() {
                    lnb.classList.remove('is-fixed');
                    gsap.set(lnb, {
                      opacity: 1
                    });
                  }
                });
              } else {}
            }
          });
        } else {
          ScrollTrigger.create({
            trigger: '.intro-wrap',
            start: "bottom top+=2px",
            endTrigger: 'footer',
            end: "top 160px",
            invalidateOnRefresh: true,
            onToggle: function onToggle(self) {
              if (self.isActive) {
                if (lnb.hasAttribute('data-value')) {
                  gsap.set(lnb, {
                    top: 0
                  });
                }
  
                lnb.classList.add('is-fixed');
              } else {
                if (lnb.hasAttribute('data-value')) {
                  gsap.set(lnb, {
                    top: lnb.getAttribute('data-value')
                  });
                }
  
                if (lnb.classList.contains('is-sticky')) {
                  gsap.set(lnb, {
                    y: '-100%'
                  });
                }
  
                gsap.set(lnb, {
                  y: 0,
                  onComplete: function onComplete() {
                    lnb.classList.remove('is-fixed');
                    gsap.set(lnb, {
                      opacity: 1
                    });
                  }
                });
              }
            }
          });
        }
      }
    });
    gsap.to(lnb, {
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power1.inOut',
      delay: 0.4
    });
  } // select option event
  
  
  function optionActiveFunc(val, button) {
    var optionList = button.parentElement.querySelector('.option-list');
    gsap.killTweensOf(optionList, 'all');
  
    if (val == 0) {
      // hide
      button.classList.remove('is-selected');
      optionList.classList.remove('is-option-active');
      gsap.to(optionList, {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.inOut'
      });
      gsap.to(optionList, {
        height: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: function onComplete() {
          gsap.set(optionList, {
            display: 'none'
          });
        }
      });
    } else {
      // open
      button.classList.add('is-selected');
      optionList.classList.add('is-option-active');
      gsap.set(optionList, {
        display: 'block',
        onComplete: function onComplete() {
          gsap.set(optionList, {
            height: optionList.clientHeight
          });
        }
      });
      gsap.to(optionList, {
        height: 'auto',
        duration: 0.3,
        delay: 0.1,
        ease: 'power2.out',
        onComplete: function onComplete() {},
        onStart: function onStart() {
          if (bodyScrollBar) {
            var p = optionList.getAttribute('data-scroll-idx');
  
            var _scroller = document.querySelector("[data-scroll=\"".concat(p, "\""));
  
            gsap.set(_scroller, {
              maxHeight: "".concat(_scroller.offsetHeight, "px"),
              alignItems: 'flex-start'
            });
            gsap.set(optionList, {
              width: "".concat(button.offsetWidth, "px")
            });
            Scrollbar.init(optionList, {
              damping: 1,
              delegateTo: optionList,
              alwaysShowTracks: true,
              continuousScrolling: false
            });
          }
        }
      });
      gsap.to(optionList, {
        opacity: 1,
        duration: 0.4,
        ease: 'power1.inOut'
      });
    }
  }
  
  function selectOptionFunc(button, type) {
    var select;
  
    if (bodyScrollBar) {
      select = button.parentElement.parentElement.parentElement.parentElement;
    } else {
      select = button.parentElement.parentElement.parentElement;
    }
  
    var selectedValue = button.innerText;
    select.querySelector('span').innerHTML = selectedValue;
  
    if (type == 'form') {
      var selectButton = select.querySelector('.select-option');
      selectButton.classList.add('is-complete');
      var input = select.querySelector('input');
  
      if (button.hasAttribute('data-input')) {
        input.removeAttribute('disabled');
        input.classList.add('is-error');
        input.classList.remove('is-complete');
        input.value = '';
      } else {
        input.setAttribute('disabled', true);
        input.classList.add('is-complete');
        input.classList.remove('is-error');
        input.value = selectedValue;
      }
    }
  }
  
  function optionSelectFunc(button) {
    if (!button.classList.contains('is-selected')) {
      // open
      optionActiveFunc(1, button);
    } else {
      // close
      optionActiveFunc(0, button);
    }
  }
  
  function bindSelectEvent() {
    var buttonSelect = document.querySelectorAll('.select-option');
    buttonSelect.forEach(function (button) {
      button.addEventListener('click', function () {
        optionSelectFunc(button);
      }, false);
    });
  }
  
  function searchEvent(e) {
    var input = document.querySelector('.input-search input');
  
    if (e.type === 'click') {
      if (input.value.trim() === '') {
        alert('검색어를 입력해주세요.');
        input.focus();
      }
    }
  
    if (e.type == 'keydown') {
      if (input.value.length > 0) {
        if (!input.classList.contains('is-keydown')) {
          input.classList.add('is-keydown');
        }
      } else {
        input.classList.remove('is-keydown');
  
        if (e.keyCode == 13) {
          alert('검색어를 입력해주세요.');
          input.focus();
        }
      }
  
      if (!input.classList.contains('is-keydown')) return;
  
      if (e.keyCode == 13) {
        searchList(input.value);
      }
    } else {
      if (!input.classList.contains('is-keydown')) return;
  
      if (input.value.length > 0) {
        searchList(input.value);
        input.classList.remove('is-keydown');
      }
    }
  }
  
  if (document.querySelector('.input-search')) {
    var input = document.querySelector('.input-search input');
    input.addEventListener('keydown', function (e) {
      searchEvent(e);
    });
    input.addEventListener('blur', function (e) {
      if (e.target.value == '') {
        e.target.classList.remove('is-keydown');
      }
    });
    var button = document.querySelector('.button-search');
    button.addEventListener('click', searchEvent);
  }
  
  if (document.querySelector('.fixed-lnb')) {
    initIntroWithLNB();
  }
  
  function setLNBPosition() {
    if (!isMobile) return;
    var heightValue = document.querySelector('.intro-wrap').clientHeight;
    var lnb = document.querySelector('.fixed-lnb');
    gsap.set(lnb, {
      top: heightValue
    });
    lnb.setAttribute('data-value', heightValue);
  
    if (lnb.classList.contains('lnb-center')) {
      var _height = document.querySelector('.intro-with-lnb').clientHeight;
      gsap.set(lnb, {
        top: _height
      });
      lnb.setAttribute('data-value', _height);
    }
  
    gsap.set('.page-wrap', {
      overflowY: 'hidden'
    });
  
    if (isMobile == false) {
      gsap.to(lnb, {
        opacity: 1
      });
    }
  }
  
  if (document.querySelector('.intro-wrap')) {
    introVisualTrigger();
  }
  
  if (document.querySelector('.intro-grid') && document.querySelector('.fixed-lnb')) {
    var target = document.querySelector('.intro-section');
    setLNBPosition();
  
    if (target.classList.contains('with-text')) {} else {
      gsap.set('.fixed-lnb', {
        opacity: 1
      });
    }
  
    initIntroWithLNB();
  }
  /******* MOBILE MENU *********/
  //// toggle mobile menu
  
  
  function resetElement() {
    var elements = ['.mobile-menu', '.toggle-darkmode', '.mobile-menu .inner', '.mobile-menu .mask-item'];
    gsap.utils.toArray(elements).forEach(function (el) {
      return gsap.killTweensOf(el, 'all');
    });
  }
  
  document.querySelector('.mobile-menu-trigger').onclick = function () {
    resetElement();
  
    if (document.body.classList.contains('mob-menu-open')) {
      // close mobile menu
      document.body.classList.remove('mob-menu-open');
      gsap.to('.mobile-menu', {
        opacity: 0,
        display: 'none',
        duration: 0.3,
        delay: 0.2,
        ease: 'power1.inOut'
      });
      gsap.to('.toggle-darkmode', {
        autoAlpha: 0,
        duration: 0.2,
        delay: 0,
        ease: 'power1.inOut',
        onComplete: function onComplete() {
          gsap.set('.toggle-darkmode', {
            display: 'none'
          });
        }
      });
      gsap.to('.mobile-menu .inner', {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.inOut'
      });
      gsap.to('.mobile-menu .mask-item', {
        scaleX: 0,
        duration: 0.2,
        stagger: -0.1,
        onComplete: function onComplete() {
          smoothScrollControler(false);
  
          for (var _i4 = 0; _i4 < document.querySelectorAll('.mob-toplevel-li').length; _i4++) {
            var mob_dropdown = document.querySelectorAll('.mob-toplevel-li')[_i4];
  
            if (mob_dropdown.classList.contains('open')) {
              toggleMobileDropdown(mob_dropdown);
            }
          }
        }
      });
    } else {
      // open mobile menu
      smoothScrollControler(true);
      document.body.classList.add('mob-menu-open');
      gsap.to('.mobile-menu', {
        opacity: 1,
        display: 'block',
        duration: 0.3,
        ease: 'power1.inOut'
      });
      gsap.to('.toggle-darkmode', {
        autoAlpha: 1,
        display: 'block',
        duration: 0.3,
        delay: 0.35,
        ease: 'power2.out'
      });
      gsap.to('.mobile-menu .inner', {
        opacity: 1,
        delay: 0.4,
        duration: 0.3,
        ease: 'power1.inOut'
      });
      gsap.to('.mobile-menu .mask-item', {
        scaleX: 1,
        duration: 0.2,
        stagger: 0.1
      }); // reset mobile menu scroll position on menu open
  
      setTimeout(function () {
        document.querySelector('.mobile-menu').scrollTop = 0;
      }, 30);
    }
  }; ///// open close mobile menu accordion dropdown
  
  
  function toggleMobileDropdown(e) {
    var dropdown_ul = e.closest('.mob-toplevel-li').querySelector('.mob-single-submenu');
  
    if (e.closest('.mob-toplevel-li').classList.contains('open')) {
      // close dropdown
      e.closest('.mob-toplevel-li').classList.remove('open');
      gsap.to(dropdown_ul, {
        height: 1,
        marginBottom: 0,
        duration: 0.3,
        ease: 'power1.inOut'
      });
    } else {
      // open dropdown
      e.closest('.mob-toplevel-li').classList.add('open');
      gsap.to(dropdown_ul, {
        height: 'auto',
        marginBottom: 20,
        duration: 0.3,
        ease: 'power1.inOut'
      });
    }
  }
  
  for (var _i5 = 0; _i5 < document.querySelectorAll('.mob-toplevel-a').length; _i5++) {
    var mob_dropdown = document.querySelectorAll('.mob-toplevel-a')[_i5];
  
    mob_dropdown.onclick = function (e) {
      toggleMobileDropdown(e.target);
    };
  }
  
  function lnbScrollUnselect(val) {
    var buttons = document.querySelectorAll('[data-index]');
    gsap.utils.toArray(buttons).forEach(function (button) {
      var id = button.getAttribute('data-index');
      if (id == val) return;
  
      if (button.classList.contains('is-active')) {
        var bar = button.querySelector('.bar');
        button.classList.remove('is-active');
        gsap.killTweensOf(bar, 'all');
        gsap.killTweensOf(button, 'all');
        gsap.to(button, {
          color: isDarkMode ? '#e2e2e2' : '#585858',
          duration: 0.4,
          ease: 'power1.inOut'
        });
        gsap.to(button, {
          fontWeight: 700,
          duration: 0.4
        });
  
        if (isMobile) {
          gsap.to(bar, {
            scaleX: 0,
            scaleY: 1,
            duration: 0.3,
            ease: 'power1.inOut'
          });
        } else {
          gsap.to(bar, {
            scaleY: 0,
            scaleX: 1,
            duration: 0.3,
            ease: 'power1.inOut'
          });
        }
      }
    });
  
    if (val !== undefined) {
      lnbScrollSelect(val);
    }
  }
  
  function lnbScrollSelect(val) {
    if (document.querySelectorAll('[data-index]')[val]) {
      var _button = document.querySelectorAll('[data-index]')[val];
      if (_button.classList.contains('is-active')) return;
  
      _button.classList.add('is-active');
  
      initLNBActive(_button);
  
      if (window.innerWidth <= 768) {
        gsap.to('.fixed-lnb', {
          scrollTo: {
            x: _button,
            offsetX: 20
          },
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    }
  }
  
  function clickDelayTrigger() {
    clickEventTrigger = false;
  } //// hoverstate arrows
  
  
  function init_hoverarrows() {
    var tl_buttoncolor = [];
    var tl_arrow = [];
  
    var _loop3 = function _loop3(_i6) {
      var single_button = document.querySelectorAll('.hover-arrow')[_i6];
  
      arrow_width = single_button.getAttribute('data-type') == 'board' ? '26' : single_button.getAttribute('data-type') == 'diagonal' ? 11 : '16'; /// 'ENTER' mouseover anim
  
      tl_buttoncolor[_i6] = gsap.timeline({
        paused: true
      });
  
      tl_buttoncolor[_i6].addLabel('start');
  
      if (single_button.getAttribute('data-type') == 'box') {
        tl_buttoncolor[_i6].fromTo(single_button.querySelector('.bg-wipe'), {
          x: '-101%'
        }, {
          delay: 0,
          x: '0%',
          duration: 0.35,
          ease: 'power2.inOut'
        }, 'start');
  
        tl_buttoncolor[_i6].to(single_button, {
          color: setColor,
          duration: 0.35,
          delay: 0,
          ease: 'power2.inOut'
        }, 'start');
  
        tl_buttoncolor[_i6].to(single_button.querySelector('.button-arrow'), {
          borderColor: setColor,
          duration: 0.35,
          delay: 0,
          ease: 'power2.inOut'
        }, 'start');
  
        tl_buttoncolor[_i6].to(single_button.querySelector('svg'), {
          fill: setColor,
          duration: 0.25,
          ease: 'power2.Out',
          delay: 0.2
        }, 'start');
  
        tl_buttoncolor[_i6].to(single_button.querySelector('svg path'), {
          fill: setColor,
          duration: 0.25,
          ease: 'power2.Out',
          delay: 0.2
        }, 'start');
      }
  
      tl_arrow[_i6] = gsap.timeline({
        paused: true,
        onStart: function onStart() {
          single_button.classList.add('playing');
        },
        onComplete: function onComplete() {
          single_button.classList.remove('playing');
        }
      });
  
      tl_arrow[_i6].addLabel('startarrow');
  
      single_button.onmouseenter = function () {
        if (single_button.getAttribute('data-type') == 'box') {
          tl_buttoncolor[_i6].play();
        }
      };
  
      if (single_button.getAttribute('data-type') != 'board') {
        single_button.onmouseleave = function () {
          if (single_button.getAttribute('data-type') == 'box') {
            tl_buttoncolor[_i6].reverse();
  
            if (!single_button.classList.contains('playing') && single_button.getAttribute('data-type') != 'diagonal') {} else {
              tl_arrow[_i6].reverse();
            }
          }
        };
      } // reset on load
  
  
      gsap.set(single_button.querySelector('.arrow-mask .inner'), {
        clearProps: 'all'
      });
    };
  
    for (var _i6 = 0; _i6 < document.querySelectorAll('.hover-arrow').length; _i6++) {
      var arrow_width;
  
      _loop3(_i6);
    }
  }
  
  if (document.querySelector('.button-hover')) {
    gsap.utils.toArray('.button-hover').forEach(function (button) {
      initButtonHoverEvent(button);
    });
  }
  
  if (document.querySelector('.hover-arrow')) {
    gsap.utils.toArray('.hover-arrow').forEach(function (button) {
      initButtonHoverEventWithArrow(button);
    });
  }
  
  function initButtonHoverEventWithArrow(button) {
    var bg = button.querySelector('.bg-wipe');
    button.addEventListener('mouseenter', function () {
      if (isMobile == true) return;
      gsap.killTweensOf(bg, 'all');
      gsap.set(bg, {
        x: '-101%',
        backgroundColor: isDarkMode ? '#fff' : '#000'
      });
      var tl = gsap.timeline();
      tl.addLabel('x');
      tl.to(bg, {
        x: '0%',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button, {
        color: isDarkMode ? '#000' : '#fff',
        borderColor: isDarkMode ? '#000' : '#fff',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button.querySelector('svg'), {
        fill: isDarkMode ? '#000' : '#fff',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button.querySelector('svg path'), {
        fill: isDarkMode ? '#000' : '#fff',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button.querySelector('.button-arrow'), {
        borderColor: isDarkMode ? '#000' : '#fff',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
    });
    button.addEventListener('mouseleave', function () {
      if (isMobile == true) return;
      var tl = gsap.timeline();
      gsap.killTweensOf(bg, 'all');
      tl.addLabel('x');
      tl.to(bg, {
        x: '101%',
        duration: 0.35,
        ease: 'power2.inOut'
      });
      tl.to(button, {
        color: isDarkMode ? '#fff' : '#000',
        borderColor: isDarkMode ? '#fff' : '#000',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button.querySelector('svg'), {
        fill: isDarkMode ? '#fff' : '#000',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button.querySelector('svg path'), {
        fill: isDarkMode ? '#fff' : '#000',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button.querySelector('.button-arrow'), {
        borderColor: isDarkMode ? '#fff' : '#000',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
    });
  }
  
  function initButtonHoverEvent(button) {
    var bg = button.querySelector('.button-bg');
    button.addEventListener('mouseenter', function () {
      if (isMobile == true) return;
      gsap.killTweensOf(bg, 'all');
      gsap.killTweensOf(button, 'all');
      gsap.set(bg, {
        x: '-100%',
        backgroundColor: isDarkMode ? '#fff' : '#000'
      });
      var tl = gsap.timeline();
      tl.addLabel('x');
      tl.to(bg, {
        x: '0%',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
      tl.to(button, {
        color: isDarkMode ? '#000' : '#fff',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
  
      if (button.classList.contains('button-download')) {
        var icon = button.querySelector('.button-icon path');
        gsap.killTweensOf(icon, 'all');
        tl.to(icon, {
          fill: isDarkMode ? '#000' : '#fff',
          duration: 0.35,
          ease: 'power1.inOut'
        }, 'x');
      }
    });
    button.addEventListener('mouseleave', function () {
      if (isMobile == true) return;
      gsap.killTweensOf(bg, 'all');
      gsap.killTweensOf(button, 'all');
      var tl = gsap.timeline();
      tl.addLabel('x');
      tl.to(bg, {
        x: '101%',
        duration: 0.35,
        ease: 'power2.inOut'
      });
      tl.to(button, {
        color: isDarkMode ? '#fff' : '#000',
        duration: 0.35,
        ease: 'power2.inOut'
      }, 'x');
  
      if (button.classList.contains('button-download')) {
        var icon = button.querySelector('.button-icon path');
        gsap.killTweensOf(icon, 'all');
        tl.to(icon, {
          fill: isDarkMode ? '#fff' : '#000',
          duration: 0.35,
          ease: 'power2.inOut'
        }, 'x');
      }
    });
  }
  
  function initIRButton(file) {
    var element = "\n        <a class=\"button-download\" href=\"".concat(file, "\" target=\"_blank\" download>\n        <span class=\"button-text\">").concat(lang == 'ko' ? '다운로드' : 'Download', "</span>\n        <span class=\"button-bg\"></span>\n        <span class=\"button-icon\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n                <path d=\"M2,15V14H14v1Zm5.66-2.63-5.5-5,.67-.74L7.5,10.87V1h1v9.87l4.66-4.24.67.74L8,12.68Z\" />\n            </svg>\n        </span>\n    </a>");
    return element;
  }
  
  function initYearOption(years) {
    initYear = true;
    var container = document.querySelector('.option-list');
    years.map(function (year) {
      var button = document.createElement('button');
      button.setAttribute('role', 'option');
      button.innerText = year;
      container.append(button);
    });
  }
  
  function initSelectOptionEvent() {
    window.addEventListener('click', function (e) {
      if (e.target.tagName == 'BUTTON' && e.target.hasAttribute('role')) {
        if (e.target.hasAttribute('data-id')) return;
  
        if (e.target.getAttribute('role') !== 'button') {
          selectOptionFunc(e.target);
          pagination = undefined;
          year = e.target.innerText;
  
          if (e.target.hasAttribute('data-year')) {
            year = '';
          }
  
          var _target = document.querySelector('.is-selected');
  
          gsap.delayedCall(0.1, optionActiveFunc, [0, _target]);
          var table = document.querySelector('.section-table tbody');
          gsap.to(table, {
            opacity: 1,
            duration: 0.4,
            ease: 'power1.inOut',
            onComplete: function onComplete() {
              requestLoadData(1);
            }
          });
          return;
        }
      } else {
        if (document.querySelector('.is-selected')) {
          var _target2 = document.querySelector('.is-selected');
  
          optionActiveFunc(0, _target2);
        }
      }
    });
  }
  
  function enrollTableCaption(captions) {
    var tables = document.querySelectorAll('table');
  
    for (var _i7 = 0; _i7 < tables.length; _i7++) {
      var caption = document.createElement('caption');
      caption.innerHTML = captions[_i7] || '';
  
      tables[_i7].prepend(caption);
    }
  }
  
  gsap.utils.toArray('.skip-nav button').forEach(function (button) {
    return button.addEventListener('click', skipNavScroll);
  });
  
  function skipNavScroll(e) {
    e.target.blur();
    var lnbOffset = 245;
    if (document.body.classList.contains('is-mobile')) return;
    var target = e.target.getAttribute('data-menu');
  
    if (target == 'header') {
      document.querySelector('#tab-1').focus();
    }
  
    if (target == 'content') {
      var offsetTop = 0;
      var tabContainers = document.querySelectorAll('[data-tabCont]');
      var tabTo = document.querySelector('[data-tabTo]');
  
      if (tabTo) {
        tabTo.focus();
  
        if (tabTo.getAttribute('data-lnbSpace') !== null) {
          offsetTop -= lnbOffset;
        }
  
        if (tabTo.getAttribute('data-pinInitial') !== null) {
          offsetTop += 2450;
        }
      }
  
      var _iterator = _createForOfIteratorHelper(tabContainers),
          _step;
  
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tabContainer = _step.value;
          offsetTop += tabContainer.offsetTop;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
  
      bodyScrollBar.setPosition(0, offsetTop);
    }
  
    if (target == 'sitemap') {
      bodyScrollBar.setPosition(0, document.querySelector('footer').offsetTop);
      document.querySelector('.famsites-trigger').focus();
    }
  }
  
  function formatBytes(bytes) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    if (bytes === 0) return '0 Bytes';
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  
  document.querySelectorAll('.button-lang').forEach(function (button) {
    var buttonlang = button.getAttribute('data-lang');
    var url = '/' + buttonlang;
    button.href = url;
  });
  
  function checkTheme() {
    if (document.body.classList.contains('isIE11')) return;
  
    if (localStorage.getItem('theme')) {
      var theme = localStorage.getItem('theme');
      setThemeMode(theme);
    } else {
      setThemeMode('dark');
    }
  
    gsap.to(document.body, {
      opacity: 1,
      duration: 0.05,
      ease: 'power1.inOut'
    });
  }
  
  checkTheme();
  
  function setThemeMode(mode) {
    if (mode == 'dark') {
      isDarkMode = true;
      document.body.classList.add('is-dark');
      document.body.classList.remove('is-light');
      document.querySelector('.toggle-darkmode').classList.add('is-darkmode');
      gsap.to('.to-dark', {
        opacity: 1
      });
    } else if (mode == 'light') {
      document.body.classList.add('is-light');
      isDarkMode = false;
      document.body.classList.remove('is-dark');
      document.querySelector('.toggle-darkmode').classList.remove('is-darkmode');
      gsap.to('.to-light', {
        opacity: 1
      });
    }
  
    setColor = isDarkMode ? '#000' : '#fff';
    changeButtonTheme(mode);
  }
  
  document.querySelector('.toggle-darkmode').onclick = function () {
    if (document.body.classList.contains('isIE11')) return;
  
    if (!isDarkMode) {
      localStorage.setItem('theme', 'dark');
      setThemeMode('dark');
      gsap.to('.to-light', {
        opacity: 0
      });
      var tl = gsap.timeline();
      tl.fromTo('.to-dark', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0
      });
      tl.fromTo('.to-dark span', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.3,
        ease: 'pow1.inOut'
      }, '<');
      tl.fromTo('.to-dark svg', {
        scale: 0
      }, {
        scale: 1,
        duration: 0.4,
        ease: 'pow2.Out'
      }, '-=0.2');
      gsap.to('.to-dark svg', {
        rotate: '+=90',
        duration: 0.6,
        delay: 0.7,
        ease: 'pow2.Out'
      });
    } else {
      localStorage.setItem('theme', 'light');
      setThemeMode('light');
      gsap.to('.to-dark', {
        opacity: 0
      });
  
      var _tl = gsap.timeline();
  
      _tl.fromTo('.to-light span', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.3,
        ease: 'pow1.inOut'
      }, '<');
  
      _tl.fromTo('.to-light .circle', {
        scale: 0
      }, {
        scale: 1,
        duration: 0.4,
        ease: 'pow2.Out'
      }, '-=0.2');
  
      _tl.fromTo('.to-light svg', {
        x: '100%',
        y: '100%'
      }, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'pow2.Out'
      }, '-=0.3');
    }
  };
  
  function changeButtonTheme(mode) {
    if (document.querySelector('.button-hover')) {
      if (mode == 'dark') {
        gsap.to('.button-hover', {
          color: '#fff'
        });
        gsap.to('.button-hover svg', {
          fill: '#fff'
        });
        gsap.to('.button-hover svg path', {
          fill: '#fff'
        });
      } else if (mode == 'light') {
        gsap.to('.button-hover', {
          color: '#000'
        });
        gsap.to('.button-hover svg', {
          fill: '#000'
        });
        gsap.to('.button-hover svg path', {
          fill: '#000'
        });
      }
    }
  
    if (document.querySelector('.button-download')) {
      if (mode == 'dark') {
        gsap.to('.button-download', {
          color: '#fff'
        });
        gsap.to('.button-download svg', {
          fill: '#fff'
        });
        gsap.to('.button-download svg path', {
          fill: '#fff'
        });
      } else if (mode == 'light') {
        gsap.to('.button-download', {
          color: '#000'
        });
        gsap.to('.button-download svg', {
          fill: '#000'
        });
        gsap.to('.button-download svg path', {
          fill: '#000'
        });
      }
    }
  
    if (document.querySelector('.hover-arrow')) {
      if (mode == 'dark') {
        gsap.set('.hover-arrow', {
          borderColor: '#fff',
          color: '#fff'
        });
        gsap.set('.hover-arrow svg', {
          fill: '#fff'
        });
        gsap.set('.hover-arrow svg path', {
          fill: '#fff'
        });
        gsap.set('.button-arrow', {
          borderColor: '#fff'
        });
      } else if (mode == 'light') {
        gsap.set('.hover-arrow', {
          borderColor: '#000',
          color: '#000'
        });
        gsap.set('.hover-arrow svg', {
          fill: '#000'
        });
        gsap.set('.hover-arrow svg path', {
          fill: '#000'
        });
        gsap.set('.button-arrow', {
          borderColor: '#000'
        });
      }
    }
  
    if (document.querySelector('.tab-container')) {
      var buttons = document.querySelectorAll('.tab-container button');
  
      if (mode == 'dark') {
        gsap.utils.toArray(buttons).forEach(function (button) {
          if (button.classList.contains('is-active')) {
            gsap.set(button, {
              backgroundColor: '#fff',
              color: '#171C22'
            });
          } else {
            gsap.set(button, {
              backgroundColor: '#232931',
              color: '#999'
            });
          }
        });
      } else {
        gsap.utils.toArray(buttons).forEach(function (button) {
          if (button.classList.contains('is-active')) {
            gsap.set(button, {
              backgroundColor: '#000',
              color: '#ffff'
            });
          } else {
            gsap.set(button, {
              backgroundColor: '#f8f8f8',
              color: '#000'
            });
          }
        });
      }
    }
  
    if (document.querySelector('.about-history')) {
      gsap.utils.toArray('.history-container .content').forEach(function (content) {
        if (content.classList.contains('is-active')) {
          gsap.set(content, {
            color: isDarkMode ? '#fff' : '#000'
          });
        } else {
          gsap.set(content, {
            color: isDarkMode ? '#999' : '#585858'
          });
        }
      });
    }
  
    if (document.querySelector('.cover-element h4')) {
      var title = document.querySelector('.cover-element h4');
      gsap.killTweensOf(title, 'color');
      if (title.classList.contains('is-inverted')) return;
  
      if (mode == 'dark') {
        gsap.to(title, {
          color: '#fff',
          duration: 0
        });
      } else if (mode == 'light') {
        gsap.to(title, {
          color: '#000',
          duration: 0
        });
      }
    }
  }
  
  function arrowTranstion(el) {
    if (isMobile) return;
    if (document.body.classList.contains('isIE11')) return;
    var arr = el.querySelectorAll('.arr-list');
    var tl = gsap.timeline({
      paused: true
    });
    tl.addLabel('start');
  
    if (el.classList.contains('arr-small')) {
      tl.to(arr[0], {
        x: '100%',
        duration: 0.65,
        ease: 'power2.out'
      }, 'start');
      tl.to(arr[1], {
        x: '0%',
        duration: 0.45,
        ease: 'power2.inOut'
      }, 'start+=0.08');
    } else {
      tl.to(arr[0], {
        x: '100%',
        duration: 0.7,
        ease: 'power2.out'
      }, 'start');
      tl.to(arr[1], {
        x: '0%',
        duration: 0.4,
        ease: 'power2.inOut'
      }, 'start+=0.07');
    }
  
    el.addEventListener('mouseenter', function () {
      return tl.restart();
    });
  }
  
  function controlTabTable(val) {
    var tables = document.querySelectorAll('[data-tab-index]');
    var buttons = document.querySelectorAll('.tab-container button');
    tables.forEach(function (table, i) {
      if (i == val) {
        table.classList.add('is-active');
        gsap.set(table, {
          display: 'block'
        });
        gsap.to(table, {
          opacity: 1,
          duration: 0.3,
          delay: 0.35,
          ease: 'power2.out'
        });
      } else {
        table.classList.remove('is-active');
        gsap.to(table, {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.inOut',
          onComplete: function onComplete() {
            gsap.set(table, {
              display: 'none'
            });
          }
        });
      }
    });
    buttons.forEach(function (button, i) {
      if (i == val) {
        button.classList.add('is-active');
        gsap.to(button, {
          backgroundColor: isDarkMode ? '#fff' : '#000',
          color: isDarkMode ? '#171C22' : '#fff',
          fontWeight: 800,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      } else {
        button.classList.remove('is-active');
        gsap.to(button, {
          backgroundColor: isDarkMode ? '#232931' : '#f8f8f8',
          color: isDarkMode ? '#999' : '#000',
          fontWeight: 400,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      }
    });
  }
  
  function tableTabEvent() {
    var buttonTab = document.querySelectorAll('.tab-container button');
    buttonTab.forEach(function (button, i) {
      button.addEventListener('click', function () {
        controlTabTable(i);
      });
    });
  } // tab event
  
  
  if (document.querySelector('.tab-container button')) {
    tableTabEvent();
    var buttons = document.querySelectorAll('.tab-container button');
    buttons.forEach(function (button, idx) {
      if (button.classList.contains('is-active')) {
        controlTabTable(idx);
      }
    });
  }