pupils = [
    {"name": "Beth", "age": 10},
    {"name": "Chris", "age": 9},
    {"name": "Andy", "age": 12},
    {"name": "Andy", "age": 11}
]

def get_name(pupil):
    return pupil["name"]

def get_key(pupil):
    return (pupil["name"], pupil["age"])

s = sorted(pupils, key=get_key)

print(s)
