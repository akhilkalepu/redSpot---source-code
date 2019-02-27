USE c9n5dm4k480lmqew;

SELECT * FROM rMusic;
SELECT * FROM rMusicHot;

SELECT * FROM rListenToThis;
SELECT * FROM rListenToThisHot;

SELECT * FROM rElectronicMusic;
SELECT * FROM rElectronicMusicHot;

SELECT * FROM rHipHopHeads;
SELECT * FROM rHipHopHeadsHot;

SELECT * FROM rRock;
SELECT * FROM rRockHot;

SELECT * FROM rMetal;
SELECT * FROM rMetalHot;

SELECT * FROM rJazz;
SELECT * FROM rJazzHot;

SELECT * FROM rClassicalMusic;
SELECT * FROM rClassicalMusicHot;

SELECT * FROM rExperimentalMusic;
SELECT * FROM rExperimentalMusicHot;

-- TRUNCATE TABLE rMusic;

-- -- =================================
-- DROP TABLE IF EXISTS rListenToThisData;
-- CREATE TABLE rListenToThisData (
--   id INTEGER (11) AUTO_INCREMENT NOT NULL,
--   reddit_post VARCHAR(300) NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS rListenToThis;
-- CREATE TABLE rListenToThis (
--   id INTEGER (11) AUTO_INCREMENT NOT NULL,
--   song VARCHAR(100) NULL,
--   artist VARCHAR(100) NULL,
--   album VARCHAR(100) NULL,
--   preview_link VARCHAR(100) NULL,
--   track_id VARCHAR(100) NULL,
--   PRIMARY KEY (id)
-- );