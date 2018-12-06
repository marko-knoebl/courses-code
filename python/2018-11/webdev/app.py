import datetime
import sys
from urllib.parse import parse_qs
from http import cookies

print(sys.path)
# suche auch im kursordner nach modulen
sys.path.append("c:\\docs\\dev\\courses-code\\python\\2018-11")
from tag3.weather import get_weather

i = 0

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
    if environ["PATH_INFO"] == "/":
        # http-statuscode
        response_status = "200 OK"
        # Inhalt der Antwort
        response_body_text = "hello"
        response_body = response_body_text.encode("utf-8")
        # HTTP-Header
        response_headers = get_response_headers_for_plain_text(response_body)
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"] == "/time":
        response_status = "200 OK"
        response_body_text = str(datetime.datetime.now())
        response_body = response_body_text.encode("utf-8")
        response_headers = get_response_headers_for_plain_text(response_body)
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"] == "/now":
        response_status = "308 Parmanent Redirect"
        response_headers = [("Location", "/time"), ("Content-Length", "0")]
        response_body = b""
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"] == "/weather-form":
        response_status = "200 OK"
        response_body_text = """
        <html>
        <body>
          <form method="post" action="/weather-form/submit">
            <input name="city">
            <button>get weather</button>
          </form>
        </body>
        </html>
        """
        response_body = response_body_text.encode("utf-8")
        response_headers = get_response_headers_for_html_text(response_body)
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"] == "/weather-form/submit":
        response_status = "200 OK"
        # city-Parameter "holen"
        request_body_size = int(environ.get("CONTENT_LENGTH", 0))
        request_body = environ["wsgi.input"].read(request_body_size).decode("utf-8")
        parameters = parse_qs(request_body)
        city = parameters.get("city")[0]
        weather = get_weather(city)
        response_body_text = weather
        response_body = response_body_text.encode("utf-8")
        response_headers = [
            ("Content-Lenght", str(len(response_body))),
            ("Content-Type", "text/plain; charset=utf-8"),
        ]
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"].startswith("/weather"):
        location = "Nuremberg"
        if len(environ["PATH_INFO"]) > len("/weather"):
            location = environ["PATH_INFO"][9:]
        response_status = "200 OK"
        weather_description = get_weather(location)
        response_body = weather_description.encode("utf-8")
        response_headers = get_response_headers_for_plain_text(response_body)
        start_response(response_status, response_headers)
        return [response_body]
    elif environ["PATH_INFO"].startswith("/cookies-demo"):
        response_status = "200 OK"

        # sind überhaupt cookies gesetzt?
        if "HTTP_COOKIE" in environ:
            # frage den cookie-string ab
            current_cookies_str = environ["HTTP_COOKIE"]
            # cookies über ein SimpleCookie-Objekt parsen
            current_cookies = cookies.SimpleCookie()
            current_cookies.load(current_cookies_str)
            # ist das visitcount-cookie gesetzt?
            if "visitcount" in current_cookies:
                # erhöhe den wert von visitcount um 1
                print(current_cookies["visitcount"].value)
                visitcount = int(current_cookies["visitcount"].value)
                visitcount += 1
                if visitcount >= 5:
                    response_body = b"please register"
                    response_headers = get_response_headers_for_plain_text(
                        response_body
                    )
                    start_response(response_status, response_headers)
                    return [response_body]
            else:
                # das visitcount-cookie ist noch nicht gesetzt
                # -> erster besuch
                visitcount = 1
        else:
            # es sind noch keine cookies gesetzt
            # -> erster besuch
            visitcount = 1

        # response_body = b"cookie-seite"
        # response_body = "cookie-seite".encode("utf-8")
        response_body = b"cookies"
        response_headers = get_response_headers_for_plain_text(response_body)
        response_headers.append(("Set-Cookie", f"visitcount={visitcount}; Max-Age=300"))
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
