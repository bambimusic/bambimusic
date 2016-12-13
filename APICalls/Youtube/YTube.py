class YTube:

    def __init__(self, tube):
        self.title = tube["snippet"]["title"]
        self.id = tube['id']
	self.description = tube["snippet"]['description']
	self.videoId = tube["snippet"]["resourceId"]['videoId']
