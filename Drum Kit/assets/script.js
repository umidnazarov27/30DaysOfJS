let btns = document.querySelectorAll('.btn');
const keyCode = {
  65: 'clap',
  83: 'boom',
  68: 'kick',
  70: 'openhat',
  71: 'ride',
  72: 'snare',
  74: 'tink',
  75: 'tom'
};

btns.forEach((elem) => {
  elem.addEventListener('click', () => {
    playSound(elem.id);
  });
});

window.addEventListener('keydown', function (event) {
  for (const key in keyCode) {
    if (event.keyCode != key) continue;
    playSound(keyCode[key])
  }
});


function playSound(e) {
  let sound = new Audio('assets/sounds/' + e + '.wav').play();
}
