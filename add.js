// Dependencies
// =============================================================
require("dotenv").config();
var mysql = require("mysql");
var SpotifyWebApi = require('spotify-web-api-node');

// Setup MySQL
// =============================================================
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  removeMusic();
});

// Spotify-Web-Api-Node
// =============================================================

var credentials = {
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.REDIRECT_URI
};

var spotifyApi = new SpotifyWebApi(credentials);

var refreshToken = 'AQAgFBXoOgCyvuQXVQdDCLG0vvGyC8n_Uv5bZJIdYYtZbhHasiKMfIDIriKNqbNL_WMoYQFN3yjt4bAifjMhDlRU92dtsyB3iZ2mDa4y_e-f5Zhvx7M3lrxDygqB4pvcbPGYaQ';

spotifyApi.setRefreshToken(refreshToken);

// clientId, clientSecret and refreshToken has been set on the api object previous to this call.
spotifyApi.refreshAccessToken().then(
  function (data) {
    console.log('The access token has been refreshed!');

    // Save the access token so that it's used in future calls, then add music
    spotifyApi.setAccessToken(data.body['access_token']);

  },
  function (err) {
    console.log('Could not refresh access token', err);
  }
);


// Add Tracks to Playlist
// =============================================================

function rMusicAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rMusic", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('1ctiKUkDhyPrm3LAMdi9NT', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    listenToThisPause();
  });
};

function rListenToThisAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rListenToThis", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('4iv3jv8PYdV7LAx8Zmbv5E', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    electronicMusicPause();
  });
};

function rElectronicMusicAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rElectronicMusic", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('0Vg6ScmYGDS8vHiv7U9yYc', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    hipHopHeadsPause();
  });
};

function rHipHopHeadsAdd() {  
  var addArray = [];

  connection.query("SELECT * FROM rHipHopHeads", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('1PRL9w9rQi8wbRpsWlV8qI', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    rockPause();
  });
};

function rRockAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rRock", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('6c4V9Wjlkldy0hi2iQQtsg', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    metalPause();
  });
};

function rMetalAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rMetal", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('09aV5syDUOrGJE2mVc00rJ', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    jazzPause();
  });
};

function rJazzAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rJazz", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('73YbPDOPU5ic4bTy1a6CU6', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    classicalMusicPause();
  });
};

function rClassicalMusicAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rClassicalMusic", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('24ZulCPkNIqD2Ocog8EjKu', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    experimentalMusicPause();
  });
};

function rExperimentalMusicAdd() {
  var addArray = [];

  connection.query("SELECT * FROM rExperimentalMusic", function (err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      var addTrack = "spotify:track:" + res[i].track_id;
      addArray.push(addTrack);
    }

    spotifyApi.addTracksToPlaylist('4RD8FzRk00ScOpfXM4qoDJ', addArray)
      .then(function (data) {
        console.log('Added tracks to playlist!');
      }, function (err) {
        console.log('Something went wrong!', err);
      });

    exitPause();
  });
};


// Remove Tracks Function
// =============================================================
function removeMusic() {
  // /r/music remove
  spotifyApi.getPlaylist('1ctiKUkDhyPrm3LAMdi9NT')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('1ctiKUkDhyPrm3LAMdi9NT', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rMusicAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rMusicAdd();
        });
      
    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeListenToThis() {
  // /r/listentothis remove
  spotifyApi.getPlaylist('4iv3jv8PYdV7LAx8Zmbv5E')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('4iv3jv8PYdV7LAx8Zmbv5E', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rListenToThisAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rListenToThisAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeElectronicMusic() {
  // /r/electronicmusic remove
  spotifyApi.getPlaylist('0Vg6ScmYGDS8vHiv7U9yYc')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('0Vg6ScmYGDS8vHiv7U9yYc', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rElectronicMusicAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rElectronicMusicAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeHipHopHeads() {
  // /r/hiphopheads remove
  spotifyApi.getPlaylist('1PRL9w9rQi8wbRpsWlV8qI')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('1PRL9w9rQi8wbRpsWlV8qI', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rHipHopHeadsAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rHipHopHeadsAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeRock() {
  // /r/rock remove
  spotifyApi.getPlaylist('6c4V9Wjlkldy0hi2iQQtsg')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('6c4V9Wjlkldy0hi2iQQtsg', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rRockAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rRockAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeMetal() {
  // /r/metal remove
  spotifyApi.getPlaylist('09aV5syDUOrGJE2mVc00rJ')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('09aV5syDUOrGJE2mVc00rJ', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rMetalAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rMetalAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeJazz() {
  // /r/jazz remove
  spotifyApi.getPlaylist('73YbPDOPU5ic4bTy1a6CU6')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('73YbPDOPU5ic4bTy1a6CU6', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rJazzAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rJazzAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeClassicalMusic() {
  // /r/classicalmusic remove
  spotifyApi.getPlaylist('24ZulCPkNIqD2Ocog8EjKu')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('24ZulCPkNIqD2Ocog8EjKu', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rClassicalMusicAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rClassicalMusicAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};

function removeExperimentalMusic() {
  // /r/experimentalmusic remove
  spotifyApi.getPlaylist('4RD8FzRk00ScOpfXM4qoDJ')
    .then(function (data) {
      console.log('Got playlist');
      var snapshotID = data.body.snapshot_id;
      var playlistPositions = [];

      for (i = 0; i < data.body.tracks.total; i++) {
        playlistPositions.push(i);
      }

      spotifyApi.removeTracksFromPlaylistByPosition('4RD8FzRk00ScOpfXM4qoDJ', playlistPositions, snapshotID)
        .then(function (data) {
          console.log('Tracks removed from playlist!');
          rExperimentalMusicAdd();
        }, function (err) {
          console.log('Could not remove tracks!', err);
          rExperimentalMusicAdd();
        });

    }, function (err) {
      console.log('Could not get playlist!', err);
    });
};


// Pause and Exit Functions
// =============================================================
function listenToThisPause() {
  var t = setTimeout(function () {
    removeListenToThis();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function electronicMusicPause() {
  var t = setTimeout(function () {
    removeElectronicMusic();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function hipHopHeadsPause() {
  var t = setTimeout(function () {
    removeHipHopHeads();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function rockPause() {
  var t = setTimeout(function () {
    removeRock();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function metalPause() {
  var t = setTimeout(function () {
    removeMetal();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function jazzPause() {
  var t = setTimeout(function () {
    removeJazz();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function classicalMusicPause() {
  var t = setTimeout(function () {
    removeClassicalMusic();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function experimentalMusicPause() {
  var t = setTimeout(function () {
    removeExperimentalMusic();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function exitPause() {
  var t = setTimeout(function () {
    exit();
  }, 20000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};

function exit() {
  var t = setTimeout(function () {
    process.exit(1);
  }, 30000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
};