# redSpot
A series of scripts that updates Spotify playlists with the top voted songs on Reddit.

The playlists update at 4:30 AM EST. As of now, they are randomly ordered, currently working on getting them ordered by upvotes.

If you want a playlist for a particular subreddit, let me know at [akhilkalepu@protonmail.com](akhilkalepu@protonmail.com).

[**/r/music : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/1ctiKUkDhyPrm3LAMdi9NT?si=hFRdcb_3Ty-k3MNqjHncrQ) - [www.reddit.com/r/music](https://www.reddit.com/r/music)

[**/r/listentothis : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/4iv3jv8PYdV7LAx8Zmbv5E?si=Af3HSaNrQMWXZU8SS7i4kQ) - [www.reddit.com/r/listentothis](https://www.reddit.com/r/listentothis)

[**/r/electronicmusic : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/0Vg6ScmYGDS8vHiv7U9yYc?si=2qyNnSy6R9ybn-2FNAaNjg) - [www.reddit.com/r/electronicmusic](https://www.reddit.com/r/electronicmusic)

[**/r/hiphopheads : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/1PRL9w9rQi8wbRpsWlV8qI?si=mq8YhOQIR3WkECs9UPgSnA) - [www.reddit.com/r/hiphopheads](https://www.reddit.com/r/hiphopheads)

[**/r/rock : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/6c4V9Wjlkldy0hi2iQQtsg?si=G6hav6QYSiem3-EJf7_F4g) - [www.reddit.com/r/rock](https://www.reddit.com/r/rock)

[**/r/metal : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/09aV5syDUOrGJE2mVc00rJ?si=LtLFDo-ZQfensdt-8EVYrg) - [www.reddit.com/r/metal](https://www.reddit.com/r/metal)

[**/r/jazz : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/73YbPDOPU5ic4bTy1a6CU6?si=qSuFj0zRRj-or461KDoLSQ) - [www.reddit.com/r/jazz](https://www.reddit.com/r/jazz)

[**/r/classicalmusic : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/24ZulCPkNIqD2Ocog8EjKu?si=h-YOBYWRSNyFg9aJpC5Ybg) - [www.reddit.com/r/classicalmusic](https://www.reddit.com/r/classicalmusic)

[**/r/experimentalmusic : top : week {redSpot}**](https://open.spotify.com/user/21mqglmqxuj67hqwceyrxf6ti/playlist/4RD8FzRk00ScOpfXM4qoDJ?si=cPt5WA2pS-mRiYChBRdspQ) - [www.reddit.com/r/experimentalmusic](https://www.reddit.com/r/experimentalmusic)

![Imgur](https://i.imgur.com/BC0zqsn.png)

**Technologies used:**
- Python
    - PRAW Python Reddit API Wrapper
- Node.js
    - [Node Spotify API](https://www.npmjs.com/package/node-spotify-api)
    - [Spotify Web API Node](https://www.npmjs.com/package/spotify-web-api-node) 
- MySQL
    - JawsDB
- Heroku Scheduler

![Imgur](https://i.imgur.com/5Cm30cA.png)

My scripts run on Heroku using the Scheduler add-on. I use Python Reddit API Wrapper to scrape the subreddits for the top posts from the last week. The post titles are sent to a MySQL/JawsDB database every night at 3:30 AM EST. The /r/music script is also able to filter posts by the "music streaming" or "video" flair, ensuring I only scrape songs instead of news articles and self posts. Find the code in redditScrape.py.

![Imgur](https://i.imgur.com/UaDcznz.png)

My initial idea was just to retreive a list of Spotify links for the Reddit posts, so I used the simple Node Spotify API to find the matching tracks. This NPM package can only read Spotify's API, so it doesn't need any authorization.

![Imgur](https://i.imgur.com/RpaPDML.png)

At 4:00 AM the script connects the MySQL database and goes through the list of post titles in each subreddit's table. Each title is formatted to remove unnecessary characters, strings stored in [square brackets] and year tags stored in (parantheses) while allowing strings stored in (parantheses) to remain. This is so tags for remixes, live performances and secondary titles are not removed.

![Imgur](https://i.imgur.com/tCVOA75.png)

The resulting string is used to search Node Spotify API for the track that best matches the post title. Searches that don't return a track are skipped. The API will occasionally return a false match. Once a track is found, it's metadata including song ID are sent to another MySQL table specifically for Spotify information. Find the code in spotify.js.

![Imgur](https://i.imgur.com/iCP44Ps.png)

In order automate the playlist scripts, I need to get a new access token for Spotify's API every hour using a refresh token first obtained on localhost. Spotify's API requires you to manually obtain the initial access and refresh tokens, but the re-authorization process can be automated after that, as long as it's refreshed within one hour. The refresh.js script runs every 60 minutes to ensure the server can access my playlists ever night at 4:30 AM EST.

![Imgur](https://i.imgur.com/W0TSGDV.png)

The last step is to go through this table and add the tracks to a playlist using the song IDs. In order to do this, I use Spotify Web API Node to refresh my access token one more time before deleting all the tracks in a specified playlist, collecting the song IDs into a JavaScript array and using the API to add the respective tracks into said playlist. There is a short pause before each subreddit's script runs to ensure I don't overload the API with too many requests. Find the code in add.js.

![Imgur](https://i.imgur.com/X5NluK4.png)

The final product is a self-updating playlist of the weekly top songs on Reddit! If you have any questions, requests or suggestions, please feel free to contact me at [akhilkalepu@protonmail.com](akhilkalepu@protonmail.com).