function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);

    if(!audio) {
        return;
    }

    audio.currentTime = 0;

    key.classList.toggle("playing");
    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform'){
        return;
    }

    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));