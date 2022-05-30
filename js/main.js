try {
  var parallaxElement = document.getElementById('parallax-bg')
  var parallaxElement_height = parallaxElement.offsetHeight
  
} catch (error) {
  
}

function parallax(params) {
    var scroll_pos = window.scrollY
    var transfor_value = scroll_pos / 40
    var opacity_value = 1.0 - (scroll_pos / 2000)
    var blur_value = Math.min(scroll_pos / 100, 3)
    if (scroll_pos < parallaxElement_height) {
        parallaxElement.style.transform = `translate3d(0, -${transfor_value} %, 0)`
        parallaxElement.style.opacity = opacity_value
        parallaxElement.style.filter = `blur(${blur_value}+px)`
        // console.log(scroll_pos, transfor_value, opacity_value, blur_value)
    }
    else {
    }
}

document.body.onscroll = () => {
    parallax()
    // document.querySelector('.content1').scrollIntoView()
}

function check_input(event) {
    if (event.target.checked) {
        disableScroll()
    }
    else{
        enableScroll()
    }
}


// variables and functions for disabeling functions

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}