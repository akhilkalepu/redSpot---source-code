USE c9n5dm4k480lmqew;

SELECT * FROM rMusicData;
SELECT * FROM rMusicHotData;

SELECT * FROM rListenToThisData;
SELECT * FROM rListenToThisHotData;

SELECT * FROM rElectronicMusicData;
SELECT * FROM rElectronicMusicHotData;

SELECT * FROM rHipHopHeadsData;
SELECT * FROM rHipHopHeadsHotData;

SELECT * FROM rRockData;
SELECT * FROM rRockHotData;

SELECT * FROM rMetalData;
SELECT * FROM rMetalHotData;

SELECT * FROM rJazzData;
SELECT * FROM rJazzHotData;

SELECT * FROM rClassicalMusicData;
SELECT * FROM rClassicalMusicHotData;

SELECT * FROM rExperimentalMusicData;
SELECT * FROM rExperimentalMusicHotData;

-- TRUNCATE TABLE rMusicData;

-- -- =================================
-- DROP TABLE IF EXISTS rClassicalMusicHotData;
-- CREATE TABLE rClassicalMusicHotData (
--   id INTEGER (11) AUTO_INCREMENT NOT NULL,
--   reddit_post VARCHAR(300) NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS rClassicalMusicHot;
-- CREATE TABLE rClassicalMusicHot (
--   id INTEGER (11) AUTO_INCREMENT NOT NULL,
--   song VARCHAR(100) NULL,
--   artist VARCHAR(100) NULL,
--   album VARCHAR(100) NULL,
--   preview_link VARCHAR(100) NULL,
--   track_id VARCHAR(100) NULL,
--   PRIMARY KEY (id)
-- );