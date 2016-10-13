

class User:

    def __init__(self, user):
        self.name = user["name"]
        self.screen = user["screen_name"]
        self.id = user["id"]
        self.image = user.get("profile_image_url")

    @staticmethod
    def parseMentions(mentions):
        listed = []
        for mention in mentions:
            listed.append(User(mention))

        return listed
