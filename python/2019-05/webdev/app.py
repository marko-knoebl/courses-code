import datetime

def application(environ, start_response):

    # display the time
    current_time = str(datetime.datetime.now().time())

    response_status = "200 OK"
    response_body_text = f"<h1>Current time: {current_time}</h1>"
    response_body = response_body_text.encode("utf-8")
    response_headers = [
        ("Content-Type", "text/html; charset=utf-8"),
        ("Content-Length", str(len(response_body))),
    ]
    start_response(response_status, response_headers)
    return [response_body]
