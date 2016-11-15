import os
import requests

PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlistItems"

class Playlist:

    def __init__(self, playlistID):
        self.playlistID = timeline
        self.videos = []
        self.fetchPlaylist()

    def fetchPlaylist(self):
        r = requests.get(PLAYLIST_URL, params = {"part" = "snippet", "playlistID" : playlistID, "key" = os.environ["YOUTUBUE_KEY"],})
