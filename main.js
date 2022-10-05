const main = document.getElementById('main');
const startTesting = document.getElementById('start-testing');
const fullscreen = document.getElementById('fullscreen');
const element = document.documentElement;

const colors = ['white', 'black', 'red', 'green', 'blue'];

function detectDoubleTapClosure() {
  let lastTap = 0;
  let timeout;

  return function detectDoubleTap(event) {
    const curTime = new Date().getTime();
    const tapLen = curTime - lastTap;
    if (tapLen < 500 && tapLen > 0) {
      if (callback) {
        callback();
      }
      event.preventDefault();
    } else {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
      }, 500);
    }
    lastTap = curTime;
  };
}

startTesting.addEventListener('click', () => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    return true;
  }
  
  if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
    return true;
  }
  
  if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
    return true;
  }

  return false;
});

fullscreen.addEventListener('click', () => {
  
});
