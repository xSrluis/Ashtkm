let i = 0;
let txt = 'CLICK AQUI';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("clickToUnlock").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

$('#clickToUnlock').ready( function() {
    typeWriter();
});

let video = document.getElementById('mainVid')

function handleVideo () {
    video.muted = true;
}

handleVideo() 

document.addEventListener('click', () => {
    $('#fade').fadeOut('slow')

    video.play();
    video.muted = false; 
    video.volume = 0.5;
});


function handleTitle() {
    let i = 0;
    setInterval(function(){
        let titles=['TE QUIERO 🤍 ', 'GRACIAS','POR SER','MI','AMIGA','Y POR TODOS','LOS','CONSEJOS','Y LINDO MOMENTOS',];
        if (i === titles.length) i=0;

        document.title = titles[i];

        i++;
    }, 900);
}

handleTitle();