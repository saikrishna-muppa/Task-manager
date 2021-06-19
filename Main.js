var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function remove() {
    var elem = document.getElementById("progress");
     elem.style.display="none";
}
function addtask(){
    var task=document.querySelector(".inner-container")
    
}