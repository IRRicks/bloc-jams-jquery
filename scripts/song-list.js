song.element.on('click', event => {
        player.playPause(song);
       $('button#play-pause').attr('playState', player.playState);
      });
