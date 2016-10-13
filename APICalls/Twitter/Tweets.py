import os
import requests
from Tweet import Tweet

class Tweets:
    header = {"Authorization" : os.environ["TWITTER_KEY"]}

    def __init__(self, timeline):
        self.timeline = timeline
        self.tweets = []
        self.fetchTimeline()

    def fetchTimeline(self):
        r = requests.get("https://api.twitter.com/1.1/statuses/user_timeline.json", headers = Tweets.header, params = {"screen_name" : self.timeline})
        for tweet in r.json():
            self.tweets.append(Tweet(tweet))
