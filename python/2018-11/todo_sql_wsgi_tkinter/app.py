import db_interface

from urllib.parse import parse_qs


def get_response_headers_for_plain_text(response_body):
    return [
        ("Content-Length", str(len(response_body))),
        ("Content-Type", "text/plain; charset=utf-8"),
    ]


def get_response_headers_for_html_text(response_body):
    return [
        ("Content-Length", str(len(response_body))),
        ("Content-Type", "text/html; charset=utf-8"),
    ]


def application(environ, start_response):
    if environ["PATH_INFO"] == "/todolist":
        # stelle eine HTML-Seite dar, auf der alle todos aufgelistet sind
        response_status = "200 OK"
        todos = db_interface.get_all_todos()
        todos_html_str_todo = ""
        todos_html_str_done = ""
        for todo in todos:
            if todo[2] == 0:
                todos_html_str_todo += f"""<div>
                    <form method="POST" action="/toggle" style="display:inline">
                        TODO: {todo[1]}
                        <button>toggle</button>
                        <input name="id" value="{todo[0]}" type="hidden">
                    </form>
                </div>"""
            else:
                todos_html_str_done += f"""
                    <div style="text-decoration: line-through; color: green">
                        <form method="POST" action="/toggle">
                            DONE: {todo[1]}
                            <button>toggle</button>
                            <input name="id" value="{todo[0]}" type="hidden">
                        </form>
                    </div>"""

        response_body_text = f"""
        <html>
        <body>
          <h1>Todos</h1>
          {todos_html_str_todo}
          {todos_html_str_done}
          <form method="post" action="/add-todo">
            <input name="new-todo">
            <button>Add</button>
          </form>
          <form method="post" action"/clear-completed">
            <button>Clear Completed</button>
          </form>
        </body>
        </html>
        """
        response_body = response_body_text.encode("utf-8")
        response_headers = get_response_headers_for_html_text(response_body)
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"] == "/add-todo":
        response_status = "303 See Other"
        # parameter new-todo auslesen
        request_body_size = int(environ.get("CONTENT_LENGTH", 0))
        request_body = environ["wsgi.input"].read(request_body_size).decode("utf-8")
        parameters = parse_qs(request_body)
        new_todo = parameters.get("new-todo")[0]
        new_todo = new_todo.replace("<", "&lt;")

        db_interface.add_todo(new_todo)

        response_body = b""
        response_headers = get_response_headers_for_html_text(response_body)
        response_headers.append(("Location", "/todolist"))
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"] == "/toggle":
        response_status = "303 See Other"
        # parameter id auslesen
        request_body_size = int(environ.get("CONTENT_LENGTH", 0))
        request_body = environ["wsgi.input"].read(request_body_size).decode("utf-8")
        parameters = parse_qs(request_body)
        id = parameters.get("id")[0]

        db_interface.toggle_todo(id)

        response_body = b""
        response_headers = get_response_headers_for_html_text(response_body)
        response_headers.append(("Location", "/todolist"))
        start_response(response_status, response_headers)
        return [response_body]
    else:
        response_status = "404 Not Found"
        response_body_text = "Could not find page"
        response_body = response_body_text.encode("utf-8")
        # HTTP-Header
        response_headers = get_response_headers_for_plain_text(response_body)
        start_response(response_status, response_headers)
        return [response_body]
