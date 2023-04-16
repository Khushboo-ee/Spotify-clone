let audioElement = new Audio('/songs/10.mp3');
audioElement.play()
// var playedPromise = audioElement.play();

// if (playedPromise) {
//     playedPromise.catch((e) => {
//         console.log(e)
//         if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
//             console.log(e.name);
//         }
//     }).then(() => {

//     });
// }

// let play1 = document.getElementsByClassName('songInfo');
// play1.play();