from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

app = Flask(__name__)

data = {"A": 1, "B": 2, "C": 3}


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/api/getData", methods=["GET", "OPTIONS"])
def solveSudoku():
    if request.method == "OPTIONS":
        return _build_cors_preflight_response()
    return _corsify_actual_response(jsonify(data)), 200


if __name__ == "__main__":
    app.secret_key = b"secretkey"
    app.run(debug=True)

