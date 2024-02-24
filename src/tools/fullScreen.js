
function launchFullScreen(element) {
  if(!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
    openFullscreen();
  } else  {
    closeFullscreen();
  }
}


function openFullscreen() {
  let elem = document.documentElement;
  let btnIMG = document.querySelector('#expand-btn img');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  let btnIMG = document.querySelector('#expand-btn img');
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}




if (document.addEventListener)
{
  document.addEventListener('fullscreenchange', exitHandler, false);
  document.addEventListener('mozfullscreenchange', exitHandler, false);
  document.addEventListener('MSFullscreenChange', exitHandler, false);
  document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
  let btnExpand = document.querySelector('#expand-btn');
  let btnShrink = document.querySelector('#shrink-btn');
  if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
  { 
  btnExpand.style.display = "block";
  btnShrink.style.display = 'none';
  } else {
  btnExpand.style.display = "none";
  btnShrink.style.display = 'block';
  }
}