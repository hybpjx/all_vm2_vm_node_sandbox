import requests

from urllib.parse import urlparse
import json
def get_location(url):
    location = {}
    x = urlparse(url)
    location['href'] = url
    location['host'] = x.hostname
    location['hostname'] = x.hostname
    location['origin'] = x.scheme + '://' + x.hostname
    location['protocol'] = x.scheme + ':'
    location['pathname'] = x.path
    location['search'] = '?' + x.query
    location['port'] = x.port or ''
    location['hash'] = ''
    return location

session = requests.Session()
with open("url.txt", 'r', encoding="utf-8") as f:
    url = f.read()
location = get_location(url)
with open("./config_mode.js", 'r', encoding='utf-8') as f:
    config = f.read().replace("__LOCATION", json.dumps(location))


with open("./config.js", 'w', encoding='utf-8') as f:
    f.write(config)


headers = {
    'authority': 'www.python-spider.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': location['origin'],
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}

response = session.get(url, headers=headers)
# 将html 放到框架里

with open("./work/work.html", "w") as f:
    f.write(response.content.decode())

import subprocess

result = subprocess.check_output(['node', 'main.js'])
_cookie = result.decode('utf-8').split(";")[0]
print(_cookie)
_cookie_key = _cookie.split("=")[0]
_cookie_value = _cookie.split("=")[1].split(",")[0]
cookies = {_cookie_key: _cookie_value}
response = session.get(url, cookies=cookies, headers=headers)
print(response.text)
print(response.status_code)

# 我们要动态， location内容，href