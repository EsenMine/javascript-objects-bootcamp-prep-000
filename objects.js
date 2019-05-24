playlist = new Object({jlo:"baby"});
function updatePlaylist(playlist,artist,song){
  playlist[artist] = song;
  return playlist;
}