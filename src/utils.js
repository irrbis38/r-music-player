export const playAudio = (isPlay, audioRef) => {
  // autoplay if isPlay true
  if (isPlay) {
    const playPromise = audioRef.current.play();
    if (playPromise) {
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  }
};
