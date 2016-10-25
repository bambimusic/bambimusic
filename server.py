#-*- coding: utf-8 -*-
import json

from flask import Flask, render_template
app = Flask(__name__)

with open('mockupdata.json') as json_data:
    objekti = json.load(json_data)


@app.route('/')
def root_route():
    return render_template('artist.html', artist = objekti)
