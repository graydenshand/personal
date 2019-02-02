from flask import Flask, render_template, request, redirect
from flask_sslify import SSLify
import os

app = Flask(__name__)

if 'DYNO' in os.environ: # only trigger SSLify if the app is running on Heroku
    sslify = SSLify(app)

@app.route('/')
def index():
    return render_template('index.html')



if __name__ == "__main__":
    app.run()
