var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerContainer").style.top = "0";
  } else {
    document.getElementById("headerContainer").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

function sidebarSwap() {
    
    if($('#sidebar').css('left') == '0px'){
        document.getElementById("sidebar").style.left = "-500px";
        document.getElementById("sidebarContainer").style.left = "-5000px";
        document.getElementById("sidebarContainer").onclick = 'sidebarSwap()';
    }
    else{
        document.getElementById("sidebar").style.left = "0px";
        document.getElementById("sidebarContainer").style.left = "0px";
        document.getElementById("sidebarContainer").onclick = '';
    }
};