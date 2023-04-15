
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(event => {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));


const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

if (currentTime) {
    player.setCurrentTime(currentTime)
}