from flask import (
    Flask,
    render_template,
    request, 
    make_response, 
    jsonify,
    url_for
)
from flask_cors import CORS, cross_origin
import sqlite3

app = Flask(__name__)
app.secret_key = b"secretkey"
conn = sqlite3.connect("database.db")

# Creates the User table
conn.execute(
    """
    CREATE TABLE IF NOT EXISTS User 
    (
        firstname TEXT, 
        lastname TEXT
    )
    """
)

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

def row_to_dict(cursor: sqlite3.Cursor, row: sqlite3.Row) -> dict:
    data = {}
    for idx, col in enumerate(cursor.description):
        data[col[0]] = row[idx]
    return data


@app.route("/api/getUsers", methods=["GET", "OPTIONS"])
def getUser():
    if request.method == "OPTIONS":
        return _build_cors_preflight_response()

    try:
        with sqlite3.connect("database.db") as con:
            con.row_factory = row_to_dict
            rows = con.execute(
                """
                SELECT firstname, lastname FROM User
                """,
                (),
            ).fetchall()
        return jsonify(rows), 200
    except:
        return _corsify_actual_response(jsonify("Error with getting users")), 500

@app.route("/api/addUser", methods=["POST", "OPTIONS"])
def addUser():

    if request.method == "OPTIONS":
        return _build_cors_preflight_response()

    if(not "firstname" in request.json and "lastname" in request.json):
        return _corsify_actual_response(jsonify("You have not submitted all the necessary information")), 400
    
    firstname = request.json["firstname"]
    lastname = request.json["lastname"]

    print(firstname, lastname)
    
    try:
        with sqlite3.connect("database.db") as con:
            cur = con.cursor()
            cur.execute(
                """
                INSERT INTO User 
                (firstname, lastname) 
                values 
                (?,?)
                """,
                (firstname, lastname),
            )
            con.commit()
                
            return _corsify_actual_response(jsonify("User successfully added")), 200
    except:
        return _corsify_actual_response(jsonify("Error with adding user")), 500

@app.route("/api/deleteUser", methods=["DELETE", "OPTIONS"])
def deleteUser():
    if request.method == "OPTIONS":
        return _build_cors_preflight_response()
    
    if(not "firstname" in request.args and "lastname" in request.args):
        return _corsify_actual_response(jsonify("You have not submitted all the necessary information")), 400
    
    firstname = request.args["firstname"]
    lastname = request.args["lastname"]
    
    try:
        with sqlite3.connect("database.db") as con:
            cur = con.cursor()
            cur.execute(
                """
                DELETE FROM User WHERE
                firstname = (?) and lastname = (?)
                """,
                (firstname, lastname),
            )
            con.commit()
                
            return _corsify_actual_response(jsonify("User successfully deleted")), 200
    except:
        return _corsify_actual_response(jsonify("Error with deleting user")), 500

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)





