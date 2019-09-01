# Aufgabe: 30 Photos von z.B.
# https://picsum.photos/id/10/300/200
# herunterladen (parellel)

from urllib import request
import threading
import time

def download_image(id):
    """Download an image to disk.

    Download an image from https://picsum.photos/id/{imageid}/300/200
    and save it as downloads/{imageid}.jpg
    """
    image_content = request.urlopen(f"https://picsum.photos/id/{id}/300/200").read()
    with open(f"downloads/{id}.jpg", mode="wb") as imagefile:
        imagefile.write(image_content)

def download_30_images():
    for i in range(30):
        download_image(i)

def download_30_images_threaded():
    threads = []

    for i in range(30):
        thread = threading.Thread(target=download_image, args=(i, ))
        thread.start()
        threads.append(thread)
    for thread in threads:
        thread.join()

start_time = time.time()
download_30_images()
print("done sequential")
print(time.time() - start_time)

start_time = time.time()
download_30_images_threaded()
print("done threaded")
print(time.time() - start_time)
