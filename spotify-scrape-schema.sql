USE c9n5dm4k480lmqew;

SELECT * FROM rMusic;
SELECT * FROM rListenToThis;
SELECT * FROM rElectronicMusic;
SELECT * FROM rHipHopHeads;
SELECT * FROM rRock;
SELECT * FROM rMetal;
SELECT * FROM rJazz;
SELECT * FROM rClassicalMusic;
SELECT * FROM rExperimentalMusic;

-- TRUNCATE TABLE rMusic;

-- -- =================================
DROP TABLE IF EXISTS rListenToThisData;
CREATE TABLE rListenToThisData (
  id INTEGER (11) AUTO_INCREMENT NOT NULL,
  reddit_post VARCHAR(300) NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rListenToThis;
CREATE TABLE rListenToThis (
  id INTEGER (11) AUTO_INCREMENT NOT NULL,
  song VARCHAR(100) NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  preview_link VARCHAR(100) NULL,
  track_id VARCHAR(100) NULL,
  PRIMARY KEY (id)
);