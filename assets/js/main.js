var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerContainer").style.top = "0";
  } else {
    document.getElementById("headerContainer").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function sidebarSwap() {
    
    if($('#sidebar').css('opacity') == '1'){
        document.getElementById("sidebar").style.opacity = "0";
        document.getElementById("sidebarContainer").style.pointerEvents = 'none';
        document.getElementById("body").style.overflow = '';

        document.getElementById("sidebarContainer").onclick = 'sidebarSwap()';

    }
    else{
        document.getElementById("sidebar").style.opacity = "1";
        document.getElementById("sidebarContainer").style.pointerEvents = '';
        document.getElementById("sidebarContainer").onclick = '';
        document.getElementById("body").style.overflow = 'hidden';

    }
};