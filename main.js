const main = document.getElementById('main');
const startTesting = document.getElementById('start-testing');
const fullscreen = document.getElementById('fullscreen');
const element = document.documentElement;

const colors = ['white', 'black', 'red', 'green', 'blue'];

startTesting.addEventListener('click', () => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    return;
  }
  
  if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
    return;
  }
  
  if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
    return;
  }

  return;
});

let tick = 0;
fullscreen.addEventListener('click', () => {
  fullscreen.classList.replace(`__${colors[tick % 5]}`, `__${colors[(tick + 1) % 5]}`);
  tick += 1;
  document.body.focus();
});

document.body.addEventListener('keydown', (event) => {
  const { key } = event;

  if (key === ' ') {
    fullscreen.click();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (fullscreen.className.includes('__')) {
    fullscreen.className = fullscreen.className.replace(new RegExp(`__(${colors.join('|')})`, 'g'), '');
    return;
  }

  fullscreen.classList.add('__white');
  return;
});

document.addEventListener('fullscreenerror', () => {
  alert('The fullscreen is not supported!');
});
