import requests
import bs4

START_URL = "https://xkcd.com"

IMAGE_DIR = "scrape_xkcd/images"


def save_image_from_comic(comicurl, index):
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

    prev_element = soup.select('a[rel="prev"]')[0]
    prev_url = START_URL + prev_element.get("href")
    print(img_url)
    print(prev_url)
    if index > 0:
        save_image_from_comic(prev_url, index - 1)


save_image_from_comic(START_URL, 10)
