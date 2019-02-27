// Dependencies
// =============================================================
require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var mysql = require("mysql");

// Setup MySql
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
});

// Scrape Functions
// =============================================================
rMusicScrape();

// ---------/r/music scrape---------
function rMusicScrape() {

    connection.query("TRUNCATE TABLE rMusic", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rMusicData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rMusic (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    listenToThisPause();
};


// ---------/r/listentothis scrape---------
function rListenToThisScrape() {

    connection.query("TRUNCATE TABLE rListenToThis", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rListenToThisData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rListenToThis (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    electronicMusicPause();
};


// ---------/r/electronicmusic scrape---------
function rElectronicMusicScrape() {

    connection.query("TRUNCATE TABLE rElectronicMusic", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rElectronicMusicData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rElectronicMusic (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    hipHopHeadsPause();
};


// ---------/r/hiphopheads scrape---------
function rHipHopHeadsScrape() {

    connection.query("TRUNCATE TABLE rHipHopHeads", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rHipHopHeadsData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rHipHopHeads (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    rockPause();
};


// ---------/r/rock scrape---------
function rRockScrape() {

    connection.query("TRUNCATE TABLE rRock", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rRockData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rRock (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    metalPause();
};


// ---------/r/metal scrape---------
function rMetalScrape() {

    connection.query("TRUNCATE TABLE rMetal", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rMetalData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rMetal (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    jazzPause();
};


// ---------/r/jazz scrape---------
function rJazzScrape() {

    connection.query("TRUNCATE TABLE rJazz", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rJazzData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rJazz (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    classicalMusicPause();
};


// ---------/r/classicalmusic scrape---------
function rClassicalMusicScrape() {

    connection.query("TRUNCATE TABLE rClassicalMusic", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rClassicalMusicData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rClassicalMusic (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    experimentalMusicPause();
};


// ---------/r/experimentalmusic scrape---------
function rExperimentalMusicScrape() {

    connection.query("TRUNCATE TABLE rExperimentalMusic", function (err, res) {
        if (err) throw err;
    });

    connection.query("SELECT * FROM rExperimentalMusicData", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {

            var query = "'" + res[i].reddit_post + "'";
            console.log(query);
            var noSquareQuery = query.replace(/\s*\[.*?\]\s*/g, '');
            console.log(noSquareQuery)
            var noYearQuery = noSquareQuery.replace(/\(\d+\)/g, '');
            console.log(noYearQuery);
            var noDashQuery = noYearQuery.replace(" - ", " ");
            console.log(noDashQuery);
            var spotifyQuery = noDashQuery.replace(/'/g, '');
            console.log(spotifyQuery);

            var spotify = new Spotify(keys.spotify);

            spotify.search({
                type: "track",
                query: spotifyQuery,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Track ID: " + data.tracks.items[0].id);
                    console.log("-------------------------");

                    var sql = "INSERT INTO rExperimentalMusic (track_id) VALUES " + "('" +
                        data.tracks.items[0].id +
                        "')";
                    console.log(sql);
                    connection.query(sql, function (err) {
                        if (err) {
                            console.log("Error occurred: " + err);
                            return;
                        } else {
                            console.log("1 record inserted");
                        };
                    });
                }
            });
        }
    });
    exitPause();
};


// ---------Pause and Exit Functions---------

function listenToThisPause() {
    var t = setTimeout(function () {
        rListenToThisScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function electronicMusicPause() {
    var t = setTimeout(function () {
        rElectronicMusicScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function hipHopHeadsPause() {
    var t = setTimeout(function () {
        rHipHopHeadsScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function rockPause() {
    var t = setTimeout(function () {
        rRockScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function metalPause() {
    var t = setTimeout(function () {
        rMetalScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function jazzPause() {
    var t = setTimeout(function () {
        rJazzScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function classicalMusicPause() {
    var t = setTimeout(function () {
        rClassicalMusicScrape();
    }, 20000);
    // allow process to exist naturally before the timer if it is ready to
    t.unref();
};

function experimentalMusicPause() {
    var t = setTimeout(function () {
        rExperimentalMusicScrape();
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