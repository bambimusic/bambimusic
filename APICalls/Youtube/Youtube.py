import os
import requests
from YTube import YTube

PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlistItems"

class Playlist:

    def __init__(self, playlistID):
        self.playlistID = playlistID
        self.videos = []
        self.fetchPlaylist()

    def fetchPlaylist(self):
        r = requests.get(PLAYLIST_URL, params = {"part" : "snippet", "playlistId" : self.playlistID, "key" : os.environ["YOUTUBE_KEY"]})
        playlist = r.json()
        # print playlist
        if not playlist.get("error"):
            items = playlist["items"]
            for video in items:
                self.videos.append(YTube(video))
