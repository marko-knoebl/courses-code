import datetime

with open("wsgi/template.html", encoding="utf-8") as templatefile:
    template = templatefile.read()

def application(environ, start_response):

    if environ["PATH_INFO"] == "/time":
        title = "time"
        body = str(datetime.datetime.now())
    else:
        title = "hello"
        body = "hello"

    response_text = template.format(title=title, body=body)

    response_body = response_text.encode("utf-8")
    response_headers = [
        ("Content-Type", "text/html"),
        ("Content-Length", str(len(response_body))),
    ]
    start_response("200 OK", response_headers)
    return [response_body]
