# Aufgabe:

# Herunterladen von 30 Bildern von z.B.
# https://picsum.photos/id/0/300/200
# https://picsum.photos/id/1/300/200
# ...
# (mittels urllib.request.urlopen(...) - erzeugt ein file-like object)

# Speichern unter z.B. images/image0.jpg, ...
# (mittels open() und .write())

# Stoppen der Gesamtdauer
# (mittels time.time() - gibt die Anzahl der Sekunden seit 1970-01-01, 00:00:00 zurück)

# Neu: Paralleles Herunterladen mittels Threads

from urllib.request import urlopen
from threading import Thread

from urllib.error import HTTPError
from http.client import IncompleteRead


def download_images():
    for i in range(500, 700):
        download_image(i)


def download_images_threaded():
    # 30 threads starten
    threads = []
    for i in range(500, 700):
        thread = Thread(target=download_image, args=(i,))
        threads.append(thread)
        thread.start()
    # alle threads wieder stoppen (mit join)
    for thread in threads:
        thread.join()


def download_image(i):
    try:
        image = urlopen(f"https://picsum.photos/id/{i}/300/200").read()
    except HTTPError:
        return
    except IncompleteRead:
        return
    with open(f"images/image{i}.jpg", "wb") as imagefile:
        imagefile.write(image)
        print(f"image {i} written.")
