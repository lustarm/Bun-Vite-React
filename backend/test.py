import requests

data = {
    # dont need id it will increment in DB
    # "id": "1",
    "username": "jacob",
    "password": "jacob123",
    "email": "jacob@gmail.com"
}

r = requests.post("http://127.0.0.1:8000/v1/register", json=data)
print(r.text)
