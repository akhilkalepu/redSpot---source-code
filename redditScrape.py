import mysql.connector
import re
import praw
import config

mydb = mysql.connector.connect(
    auth_plugin=config.auth_plugin,
    host=config.host,
    database=config.database,
    user=config.user,
    password=config.passwd
)

myre = re.compile(u'('
                  u'\ud83c[\udf00-\udfff]|'
                  u'\ud83d[\udc00-\ude4f]|'
                  u'\uD83D[\uDE80-\uDEFF]|'
                  u"(\ud83d[\ude00-\ude4f])|"  # emoticon
                  u'[\u2600-\u2B55]|'
                  u'[\u23cf]|'
                  u'[\u1f918]|'
                  u'[\u23e9]|'
                  u'[\u231a]|'
                  u'[\u3030]|'
                  u'[\ufe0f]|'
                  u'\uD83D[\uDE00-\uDE4F]|'
                  u'\uD83C[\uDDE0-\uDDFF]|'
                  u'[\u2702-\u27B0]|'
                  u'\uD83D[\uDC00-\uDDFF])+',
                  re.UNICODE)


reddit = praw.Reddit(
    client_id=config.client_id,
    client_secret=config.client_secret,
    user_agent=config.user_agent
)


# /r/music scrape
# ---------------------------------------------------------

rMusic = []

for submission in reddit.subreddit('music').top('week'):
    if submission.link_flair_text == 'music streaming' or submission.link_flair_text == 'video':
        rMusic.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rMusicData")
query = "INSERT INTO rMusicData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rMusic])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/listentothis scrape
# ---------------------------------------------------------

rListenToThis = []

for submission in reddit.subreddit('listentothis').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rListenToThis.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rListenToThisData")
query = "INSERT INTO rListenToThisData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rListenToThis])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/electronicmusic scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rElectronicMusic = []

for submission in reddit.subreddit('electronicmusic').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rElectronicMusic.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rElectronicMusicData")
query = "INSERT INTO rElectronicMusicData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rElectronicMusic])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/hiphopheads scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rHipHopHeads = []

for submission in reddit.subreddit('hiphopheads').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rHipHopHeads.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rHipHopHeadsData")
query = "INSERT INTO rHipHopHeadsData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rHipHopHeads])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/rock scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rRock = []

for submission in reddit.subreddit('rock').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rRock.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rRockData")
query = "INSERT INTO rRockData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rRock])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/metal scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rMetal = []

for submission in reddit.subreddit('metal').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rMetal.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rMetalData")
query = "INSERT INTO rMetalData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rMetal])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/jazz scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rJazz = []

for submission in reddit.subreddit('jazz').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rJazz.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rJazzData")
query = "INSERT INTO rJazzData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rJazz])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/classical scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rClassicalMusic = []

for submission in reddit.subreddit('classicalmusic').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rClassicalMusic.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rClassicalMusicData")
query = "INSERT INTO rClassicalMusicData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rClassicalMusic])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------

# /r/experimental scrape NEEDS FILTERING NO POST FLAIR?
# ---------------------------------------------------------

rExperimentalMusic = []

for submission in reddit.subreddit('experimentalmusic').top('week'):
    # if submission.link_flair_text == 'music streaming':
    rExperimentalMusic.append(myre.sub(' ', submission.title))

mycursor = mydb.cursor()
mycursor.execute("TRUNCATE TABLE rExperimentalMusicData")
query = "INSERT INTO rExperimentalMusicData (reddit_post) VALUES (%s)"
mycursor.executemany(query, [(r,) for r in rExperimentalMusic])
mydb.commit()
print(mycursor.rowcount, "records inserted.")

# ---------------------------------------------------------
