from flask import Flask, render_template, request, redirect, url_for
from APICalls.Twitter import Twitter
from APICalls.Youtube import Youtube
from Tietokannat import Tietokannat
import json

app = Flask(__name__)

with open('mockupdata.json') as json_data:
    objekti = json.load(json_data)


@app.route('/')
def root_route():
    return render_template('index.html')

@app.route('/<string:artist_slug>')
def artist_route(artist_slug):
    artist = Tietokannat.getArtist(artist_slug)
    if not artist:
        return "Artist not Found"
    youtube = Youtube.Playlist(artist["youtube"])
    twitter = Twitter.Timeline(artist["twitter"])
    return render_template('artist.html', artist = artist, tweets = twitter.tweets, videos = youtube.videos)


@app.route('/add', methods=['GET', 'POST'])
def add_artist():
    if request.method == 'GET':
        return render_template('add.html')
    else:
        name = request.form['name']
        twitter = request.form.get('twitter', default=None)
        youtube = request.form.get('youtube', default=None)
        country = request.form.get('country', default=None)
        city = request.form.get('city', default=None)
        genre =request.form.get('genre', default=None)
        year = request.form.get('year', default=None)
        description = request.form.get('description', default=None)
        slug = request.form['slug']

        moreMembers = True
        members = {}
        i = 0
        while moreMembers:
            member = 'member' + str(i)
            instrument = 'instrument' + str(i)
            i = i + 1
            try:
                members[member] = (request.form[member], request.form[instrument])
            except KeyError:
                moreMembers = False

        print(members)

        moreAlbums = True
        albums = {}
        j = 0
        while moreAlbums:
            album = 'album' + str(j)
            albumYear = 'year' + str(j)
            j = j + 1
            try:
                albums[album] = (request.form[album], request.form[albumYear])
            except KeyError:
                moreAlbums = False

        data = { "name" : name, "twitter" : twitter, "youtube" : youtube, "country" : country, "city" : city, "genre" : genre, "year" : year, "members": str(members), "albums" : str(albums), "description" : description, "slug" : slug}

        if Tietokannat.addToDB(data):
            return redirect(url_for('artist_route', artist_slug=data['slug']))
        else:
            return render_template('add.html', error="Slug is in use")
