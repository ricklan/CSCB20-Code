from flask import (
    Flask,
    redirect,
    render_template,
    request,
    url_for,
    session,
    abort,
    flash,
)
import sqlite3

app = Flask(__name__, template_folder="./templates")
conn = sqlite3.connect("database.db")

# Creates the User table
conn.execute(
    """
    CREATE TABLE IF NOT EXISTS User 
    (
        username TEXT PRIMARY KEY, 
        password TEXT, 
        firstName TEXT, 
        lastName TEXT
    )
    """
)


@app.route("/")
def index():
    return render_template("index.html", firstname="Firstname", lastname="Lastname")


if __name__ == "__main__":
    app.secret_key = b"secretkey"
    app.run(debug=True)
