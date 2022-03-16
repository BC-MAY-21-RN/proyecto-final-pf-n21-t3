export const FormatTime = secs => {
  let minutes = Math.floor(secs / 60);
  let seconds = Math.ceil(secs - minutes * 60);
  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
};
