const vid = document.getElementById('myVideo');
let button = document.getElementById('sound');
let mute = true;

button.addEventListener('click', fmute)
vid.volume=0;
function getVolume() {
  alert(vid.volume);

}

function fmute(){
  mute= !mute;
  console.log(mute);
  if(mute==false){
    vid.volume = 1;
  } else vid.volume = 0;
}


