// Dependencies
// =============================================================
require("dotenv").config();
var mysql = require("mysql");
var SpotifyWebApi = require('spotify-web-api-node');


// Setup MySQL and Spotify-Web-Api-Node
// =============================================================

var credentials = {
    clientId: process.env.SPOTIFY_ID,
    clientSecret: process.env.SPOTIFY_SECRET,
    redirectUri: process.env.REDIRECT_URI
};

var spotifyApi = new SpotifyWebApi(credentials);

var refreshToken = 'AQAgFBXoOgCyvuQXVQdDCLG0vvGyC8n_Uv5bZJIdYYtZbhHasiKMfIDIriKNqbNL_WMoYQFN3yjt4bAifjMhDlRU92dtsyB3iZ2mDa4y_e-f5Zhvx7M3lrxDygqB4pvcbPGYaQ';

spotifyApi.setRefreshToken(refreshToken);

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
    // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
    spotifyApi.refreshAccessToken().then(
        function (data) {
            console.log('The access token has been refreshed!');

            // Save the access token so that it's used in future calls, then add music
            spotifyApi.setAccessToken(data.body['access_token']);
            removeMusic();
        },
        function (err) {
            console.log('Could not refresh access token', err);
        }
    );
});


// Add Tracks to Playlist
// =============================================================

function rMusicAdd() {

    connection.query("DELETE FROM rMusicHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rMusicHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('2CZPohRQxO2NErQsGEBT8h', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        listenToThisPause();
    });
};

function rListenToThisAdd() {

    connection.query("DELETE FROM rListenToThisHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rListenToThisHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('1QPGtNjYnO3d7hg962PwnI', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        electronicMusicPause();
    });
};

function rElectronicMusicAdd() {

    connection.query("DELETE FROM rElectronicMusicHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rElectronicMusicHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('02dkYME8MMPtK31opR06NL', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        hipHopHeadsPause();
    });
};

function rHipHopHeadsAdd() {

    connection.query("DELETE FROM rHipHopHeadsHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rHipHopHeadsHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('2wPi9ieieZEcVjA1BOgt9N', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        rockPause();
    });
};

function rRockAdd() {

    connection.query("DELETE FROM rRockHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rRockHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('2vqqqT3oQLks3LBQFWJHGd', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        metalPause();
    });
};

function rMetalAdd() {

    connection.query("DELETE FROM rMetalHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rMetalHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('2tdTssiHYS6kV1oQQKHwbl', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        jazzPause();
    });
};

function rJazzAdd() {

    connection.query("DELETE FROM rJazzHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rJazzHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('2dWDfrB9f3SPDYxeJCid6E', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        classicalMusicPause();
    });
};

function rClassicalMusicAdd() {

    connection.query("DELETE FROM rClassicalMusicHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rClassicalMusicHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('0lYSkAWgAGmMHcNLQJHz6A', addArray)
            .then(function (data) {
                console.log('Added tracks to playlist!');
            }, function (err) {
                console.log('Something went wrong!', err);
            });

        experimentalMusicPause();
    });
};

function rExperimentalMusicAdd() {

    connection.query("DELETE FROM rExperimentalMusicHot WHERE track_id = ' '", function (err, res) {
        if (err) throw err;
    });

    var addArray = [];

    connection.query("SELECT * FROM rExperimentalMusicHot", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            var addTrack = "spotify:track:" + res[i].track_id;
            addArray.push(addTrack);
        }

        spotifyApi.addTracksToPlaylist('7CFfm9CwJwcP1ezeg6m96a', addArray)
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
    spotifyApi.getPlaylist('2CZPohRQxO2NErQsGEBT8h')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('2CZPohRQxO2NErQsGEBT8h', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('1QPGtNjYnO3d7hg962PwnI')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('1QPGtNjYnO3d7hg962PwnI', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('02dkYME8MMPtK31opR06NL')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('02dkYME8MMPtK31opR06NL', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('2wPi9ieieZEcVjA1BOgt9N')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('2wPi9ieieZEcVjA1BOgt9N', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('2vqqqT3oQLks3LBQFWJHGd')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('2vqqqT3oQLks3LBQFWJHGd', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('2tdTssiHYS6kV1oQQKHwbl')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('2tdTssiHYS6kV1oQQKHwbl', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('2dWDfrB9f3SPDYxeJCid6E')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('2dWDfrB9f3SPDYxeJCid6E', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('0lYSkAWgAGmMHcNLQJHz6A')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('0lYSkAWgAGmMHcNLQJHz6A', playlistPositions, snapshotID)
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
    spotifyApi.getPlaylist('7CFfm9CwJwcP1ezeg6m96a')
        .then(function (data) {
            console.log('Got playlist');
            var snapshotID = data.body.snapshot_id;
            var playlistPositions = [];

            for (i = 0; i < data.body.tracks.total; i++) {
                playlistPositions.push(i);
            }

            spotifyApi.removeTracksFromPlaylistByPosition('7CFfm9CwJwcP1ezeg6m96a', playlistPositions, snapshotID)
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