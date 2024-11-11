const audio = document.body.querySelector('audio');

audio.addEventListener('play', () => {
    document.body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
    document.body.classList.remove('play-music');
});
