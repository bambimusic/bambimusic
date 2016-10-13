from user import User


class Tweet:


    def __init__(self, tweet):
        self.tweet = tweet
        self.user = User(tweet["user"])
        self.mentions = User.parseMentions(tweet["entities"]["user_mentions"])

    def mentions(self):
        return self.tweet["entities"]["user_mentions"]

    def text(self):
        return self.tweet["text"]
