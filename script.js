document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song != '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
})


/*============================EVENTO DE CLICK MOUSE==============================*/

const BTNQ = document.getElementById("btnq")
const BTNW = document.getElementById("btnw")
const BTNE = document.getElementById("btne")
const BTNA = document.getElementById("btna")
const BTNS = document.getElementById("btns")
const BTND = document.getElementById("btnd")
const BTNZ = document.getElementById("btnz")
const BTNX = document.getElementById("btnx")
const BTNC = document.getElementById("btnc")

BTNQ.addEventListener('click', () => {
    let tecla = document.querySelector('#keyq')

    if (tecla != '') {
        let tecla = 'keyq';
        playSound(tecla);
    };
})

BTNW.addEventListener('click', () => {
    let tecla = document.querySelector('#keyw')
    if (tecla != '') {
        let tecla = 'keyw';
        playSound(tecla);
    };
})

BTNE.addEventListener('click', () => {
    let tecla = document.querySelector('#keye')
    if (tecla != '') {
        let tecla = 'keye';
        playSound(tecla);
    };
})
BTNA.addEventListener('click', () => {
    let tecla = document.querySelector('#keya')
    if (tecla != '') {
        let tecla = 'keya';
        playSound(tecla);
    };
})
BTNS.addEventListener('click', () => {
    let tecla = document.querySelector('#keys')
    if (tecla != '') {
        let tecla = 'keys';
        playSound(tecla);
    };
})
BTND.addEventListener('click', () => {
    let tecla = document.querySelector('#keyd')
    if (tecla != '') {
        let tecla = 'keyd';
        playSound(tecla);
    };
})
BTNZ.addEventListener('click', () => {
    let tecla = document.querySelector('#keyz')
    if (tecla != '') {
        let tecla = 'keyz';
        playSound(tecla);
    };
})
BTNX.addEventListener('click', () => {
    let tecla = document.querySelector('#keyx')
    if (tecla != '') {
        let tecla = 'keyx';
        playSound(tecla);
    };
})
BTNC.addEventListener('click', () => {
    let tecla = document.querySelector('#keyc')
    if (tecla != '') {
        let tecla = 'keyc';
        playSound(tecla);
    };
})



/*============================FUNÇÕES==============================*/

const playSound = (sound) => {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }

}

const playComposition = (songArray) => {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait)

        wait += 250;


    }
}