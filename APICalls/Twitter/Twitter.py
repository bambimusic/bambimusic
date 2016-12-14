import os
import requests
from Tweet import Tweet

TIMELINE_URL = "https://api.twitter.com/1.1/statuses/user_timeline.json"

class Timeline:
    header = {"Authorization" : os.environ["TWITTER_KEY"]}

    def __init__(self, timeline):
        self.timeline = timeline
        self.tweets = []
        self.fetchTimeline()

    def fetchTimeline(self):
        r = requests.get(TIMELINE_URL, headers = Timeline.header, params = {"screen_name" : self.timeline})
        tweets = r.json()
        if not tweets:
            for tweet in tweets:
                self.tweets.append(Tweet(tweet))
