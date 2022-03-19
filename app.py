from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder="templates")


@app.route("/")
def index():
    return render_template("index.html", firstname="Firstname", lastname="Lastname")


if __name__ == "__main__":
    app.secret_key = b"secretkey"
    app.run(debug=True)
