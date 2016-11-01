
from flask import Flask, render_template, request
from APICalls.Twitter import Twitter
import json

app = Flask(__name__)

with open('mockupdata.json') as json_data:
    objekti = json.load(json_data)


@app.route('/')
def root_route():
    return render_template('main.html')


@app.route('/<string:artist_slug>')
def artist_route(artist_slug):
    #TODO: artist = db.fetch(artist_slug)
    # twitter = Twitter.Timeline(artist.twitter)
    return render_template('artist.html', artist = objekti)


@app.route('/add', methods=['GET', 'POST'])
def add_artist():
    if request.method == 'GET':
        return render_template('add.html')