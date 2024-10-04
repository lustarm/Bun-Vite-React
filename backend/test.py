import requests

data = {
    # dont need id it will increment in DB
    # "id": "1",
    "username": "jacob",
    "password": "jacob123",
    "invite_code": "lel"
}

r = requests.post("http://127.0.0.1:8000/v1/register", json=data)
print(r.text)
