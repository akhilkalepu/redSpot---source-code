USE c9n5dm4k480lmqew;

SELECT * FROM rMusicData;
SELECT * FROM rElectronicMusicData;
SELECT * FROM rHipHopHeadsData;
SELECT * FROM rRockData;
SELECT * FROM rMetalData;

-- TRUNCATE TABLE rMusicData;

-- -- =================================
-- DROP TABLE IF EXISTS rRockData;
-- CREATE TABLE rRockData (
--   id INTEGER (11) AUTO_INCREMENT NOT NULL,
--   reddit_post VARCHAR(300) NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS rRock;
-- CREATE TABLE rRock (
--   id INTEGER (11) AUTO_INCREMENT NOT NULL,
--   song VARCHAR(100) NULL,
--   artist VARCHAR(100) NULL,
--   album VARCHAR(100) NULL,
--   preview_link VARCHAR(100) NULL,
--   track_id VARCHAR(100) NULL,
--   PRIMARY KEY (id)
-- );