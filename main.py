from flask import Flask, Response, render_template

app = Flask(__name__)


@app.route("/")
def me() -> Response:
  return render_template("me.html")

