from flask import Flask
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory 

app = Flask(__name__, static_folder='huco1/.next')

CORS(app)

@app.route('/api', methods = ['GET'] )
@cross_origin()
def index():
     return "hii"

@app.route('/')
@cross_origin()
def serve():
     return send_from_directory(app.static_folder, 'hii.html')

@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == 'main':
     app.run()