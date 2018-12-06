import urllib.request
from threading import Thread


def download_photo(index):
    photo_url = f"https://picsum.photos/100?image={index}"

    # frage das bild von der website ab

    content: bytes = urllib.request.urlopen(photo_url).read()

    # speichere das bild auf die festplatte

    with open(f"image_downloads/pic{index}.jpg", "wb") as file:
        file.write(content)


threads = []


for i in range(0, 30):
    thread = Thread(target=download_photo, args=(i,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print('download complete')

for i in range(30, 60):
    download_photo(i)
