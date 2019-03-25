from flask import Flask, render_template, request, redirect
from flask_sslify import SSLify
import os

app = Flask(__name__)

if 'DYNO' in os.environ: # only trigger SSLify if the app is running on Heroku
    sslify = SSLify(app)

@app.route('/')
def index():
    return render_template('particles-card.html')

@app.route('/base')
def base():
	return render_template('base.html', title="base template")

@app.route('/article')
def article():
	return render_template('article.html', title='"Technical Work" and Broadly Defined Jobs', date="25 March, 2019")

if __name__ == "__main__":
    app.run()
