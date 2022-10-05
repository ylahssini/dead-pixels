const main = document.getElementById('main');
const startTesting = document.getElementById('start-testing');
const fullscreen = document.getElementById('fullscreen');
const element = document.documentElement;

const colors = ['white', 'black', 'red', 'green', 'blue'];

startTesting.addEventListener('click', () => {
  fullscreen.classList.add('__white');
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
  for (let i = 0; i < colors.length; i += 1) {
    const color = `__${colors[i]}`;
    
    if (i === colors.length - 1) {
      fullscreen.classList.replace(color, `__${colors[0]}`);
      break;
    }
    
    if (fullscreen.className.includes(color)) {
      fullscreen.classList.replace(color, `__${colors[i + 1]}`);
      break;
    }
  }
});

document.addEventListener('fullscreenerror', () => {
  alert('The fullscreen is not supported!');
});
