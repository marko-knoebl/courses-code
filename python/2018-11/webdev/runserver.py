from wsgiref.simple_server import make_server

from app import application

server = make_server("localhost", 8000, application)
server.serve_forever()
