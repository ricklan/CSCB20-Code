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

app = Flask(__name__, template_folder="templates")
app.secret_key = b"secretkey"
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


@app.route("/api/login", methods=["GET", "POST"])
def login():
    session.pop("user", None)

    if request.method == "POST":
        # Checks if the user gave all necessary information
        if not ("username" in request.form and "password" in request.form):
            flash("Did not enter all necessary information")
        username = request.form["username"]
        password = request.form["password"]

        # Checks if the username and password matches a record in the db
        with sqlite3.connect("database.db") as con:
            cur = con.cursor()
            rows = cur.execute(
                "SELECT username, password FROM User WHERE username = (?) and password = (?)",
                (username, password),
            ).fetchall()
            if len(rows) == 0:
                flash("The username and/or password is invalid")
            else:
                session["user"] = username
                return redirect(url_for("home"))

    return render_template("login.html")


@app.route("/api/signup", methods=["GET", "POST"])
def signup():

    if request.method == "POST":
        # Checks if the user gave all necessary information
        if not (
            "firstname" in request.form
            and "lastname" in request.form
            and "username" in request.form
            and "password" in request.form
        ):
            flash("Did not enter all necessary information")

        firstname = request.form["firstname"]
        lastname = request.form["lastname"]
        username = request.form["username"]
        password = request.form["password"]

        # Stores the info in the db
        try:
            with sqlite3.connect("database.db") as con:
                cur = con.cursor()
                cur.execute(
                    "INSERT INTO User values (?,?,?,?)",
                    (username, password, firstname, lastname),
                )
                con.commit()
            flash("User successfully added")
        except sqlite3.IntegrityError as err:
            flash("That username already exists. Please choose a new one.")
    return render_template("signup.html")


@app.route("/")
def index():
    return redirect(url_for("login"))


@app.route("/home")
def home():
    if "user" not in session:
        abort(403, "You are not allowed access")
    with sqlite3.connect("database.db") as con:
        cur = con.cursor()
        rows = cur.execute(
            "SELECT firstname, lastname FROM User WHERE username = (?)",
            (session["user"],),
        ).fetchall()
    firstname, lastname = rows[0]
    return render_template("index.html", firstname=firstname, lastname=lastname)


if __name__ == "__main__":
    app.run(debug=True)
