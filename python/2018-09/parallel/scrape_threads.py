import requests
import bs4

START_URL = "https://xkcd.com"
IMAGE_DIR = "parallel/images"


def save_image_from_comic(index):
    comicurl = f"https://xkcd.com/{index}/"
    page_content = requests.get(comicurl).text
    assert type(page_content) == str
    soup = bs4.BeautifulSoup(page_content, "html.parser")
    img_element = soup.select("#comic img")[0]
    img_url = "https:" + img_element.get("src")

    # save image
    response = requests.get(img_url)
    save_name = f"{IMAGE_DIR}/{index}.png"
    with open(save_name, mode="bw") as file:
        for chunk in response.iter_content(100000):
            file.write(chunk)

from threading import Thread

for i in range(1100, 1200):
    t = Thread(target=save_image_from_comic, args=(i, ))
    t.start()
