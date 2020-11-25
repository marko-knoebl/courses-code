import urllib.request
from concurrent.futures import ThreadPoolExecutor

basepath = "https://docs.python.org/3/library/" # + topic + .html

def download_python_docs(topic):
    reply = urllib.request.urlopen(basepath + topic + ".html")
    content: bytes = reply.read()

    with open("downloads/" + topic + ".html", "wb") as file:
        file.write(content)
    print(f"downloaded {topic}")

topics = ["os", "sys", "urllib", "pprint", "math", "time"]


with ThreadPoolExecutor() as executor:
    for topic in topics:
        executor.submit(download_python_docs, topic)


print("completed")
