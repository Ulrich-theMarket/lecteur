let video = document.querySelector('.video')
let bar = document.querySelector('.bar')
let bar1 = document.querySelector('.bar1')
let btn = document.getElementById('play-pause')
let span = document.getElementById('play1')
let mutebtn = document.getElementById('mute')
let volume = document.getElementById('volume')
let control = document.querySelector('.control')

function one(){
  if(video.paused){
      btn.className = 'pause'
      video.play()
      span.style.display = 'none'
      control.classList.add('control1')
      
  } else {
      btn.className = 'play'
      video.pause()
      control.classList.remove('control1')
      
  }
}

span.onclick = function(){
    one()
}

video.onclick = function(){
    one()
}

btn.onclick = function(){
    one()
}

video.addEventListener('timeupdate', function(){
    let progress = video.currentTime/video.duration
    bar1.style.width = progress * 100 + '%'
    bar1.style.background = 'blue'
    
    if(video.ended){
        btn.className = 'play'
        span.style.display = 'block'
        bar1.style.width = 0 + '%'
        control.classList.remove('control1')
    }
})

mutebtn.addEventListener('click', function(){
    if(video.muted){
        video.muted = false
        mutebtn.innerHTML = 'Mute'
    } else {
        video.muted = true
        mutebtn.innerHTML = 'unMute'
    }
})

volume.addEventListener('change', function(){
    video.volume = volume.value / 100
})

let rect = bar.getBoundingClientRect()

let largeur = rect.width

bar.addEventListener('click', function(e){
    let x = e.clientX - rect.left
    let percent = ((x*100)/largeur)
    let time = (percent * 231)/100

    video.currentTime = time
    bar1.style.width = percent + '%'
})