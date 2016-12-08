#-*- coding: utf-8 -*-
import codecs
import dataset
import ast
import os
import psycopg2

db = dataset.connect(os.environ["DATABASE_URL"])
table = db['bandit']

def addToDB(data):
	if not table.find_one(slug = data['slug']):
		table.insert(data)
		return True
	return False

def getArtist(slugArtist):
	artist = table.find_one(slug = slugArtist)
	if artist:
		artist['members'] = ast.literal_eval(artist['members'])
		artist['albums'] = ast.literal_eval(artist['albums'])
		return artist
