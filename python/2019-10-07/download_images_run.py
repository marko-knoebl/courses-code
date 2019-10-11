from download_images import download_images, download_images_threaded
from time import time

print("Download sequentially")

start_time = time()
download_images()
end_time = time()

print(end_time - start_time)

print("Download in parallel")


start_time = time()
download_images_threaded()
end_time = time()

print(end_time - start_time)
