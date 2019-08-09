from urllib import request
import os
import shutil
import time
from threading import Thread

base_url = "https://picsum.photos/id/{id}/400/300"


def download_photos_threaded(n):
    start_time = time.time()
    threads = []
    for i in range(n):
        # neuen thread starten
        thread = Thread(target=download_photo, args=(i,))
        thread.start()
        threads.append(thread)

    # alle threads laufen

    # warten auf beendigung aller threads
    for thread in threads:
        thread.join()
    end_time = time.time()
    print(end_time - start_time)


def download_photos(n):
    start_time = time.time()
    for i in range(n):
        download_photo(i)
    end_time = time.time()
    print(end_time - start_time)


def download_photo(id):
    url = base_url.format(id=id)
    content = request.urlopen(url).read()
    with open(f"downloads/photo{id}.jpg", "wb") as file:
        file.write(content)


def empty_folder():
    """make sure there's an empty folder called 'downloads'"""
    try:
        shutil.rmtree("downloads")
    except FileNotFoundError:
        pass
    os.mkdir("downloads")


empty_folder()
download_photos(20)
empty_folder()
download_photos_threaded(20)
