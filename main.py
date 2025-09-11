from flask import Flask, request, jsonify
from flask_cors import CORS
from handler.h_reports import ReportsHandler  # Make sure this exists and is correctly implemented

app = Flask(__name__)
CORS(app)

@app.route("/report", methods=["POST"])
def handleReport():
    handler = ReportsHandler()
    return handler.insertReport(request.json)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)