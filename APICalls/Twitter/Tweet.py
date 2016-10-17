
class Tweet:

    def __init__(self, tweet):
        self.text = tweet["text"]
        self.id = tweet['id_str']
        self.date = tweet["created_at"]
        self.urls = URL.parseURLs(tweet["entities"]["urls"])
        self.user = User(tweet["user"])
        self.mentions = User.parseMentions(tweet["entities"]["user_mentions"])
        self.hashtags = tweet['entities']['hashtags']
        self.media = Media.parseMedias(tweet["entities"].get("media"))

class User:

    def __init__(self, user):
        self.name = user["name"]
        self.screen = user["screen_name"]
        self.id = user["id_str"]
        self.image = user.get("profile_image_url")

    @staticmethod
    def parseMentions(mentions):
        listed = []
        for mention in mentions:
            listed.append(User(mention))

        return listed


class Media:


    def __init__(self, media):
        self.id = media["id_str"]
        self.mediaUrl = media["media_url"]
        self.url = URL({
            "url" : media["url"],
            "display_url" : media["display_url"],
            "expanded_url" : media["expanded_url"]})
        self.type = media["type"]


    @staticmethod
    def parseMedias(medias):
        listed = []
        if medias:
            for media in medias:
                listed.append(Media(media))

        return listed

class URL:


    def __init__(self, url):
        self.short = url["url"]
        self.display = url["display_url"]
        self.expanded = url["expanded_url"]

    @staticmethod
    def parseURLs(urls):
        listed = []
        for url in urls:
            listed.append(URL(url))

        return listed
