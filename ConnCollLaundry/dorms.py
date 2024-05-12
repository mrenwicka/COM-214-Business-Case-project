import requests 
from bs4 import BeautifulSoup 
import json


import time

t0 = time.time()

d = {}

with open('dorms.json') as f:
  d = json.load(f)

# print(d)

for k, v in d.items():
  r = requests.get(f'https://laundryconnect.net/{v}') 
  
  # print(f'https://laundryconnect.net/{v}') 

  soup = BeautifulSoup(r.content, 'html.parser')

  machine_dict = {}
  table=soup.find("table")
  # print(table)
  for machine in table.find_all('tr'):
    print(machine)
    print("===========")
    # dorm_dict[link.text] = link.get('href')
  
    # return dorm_dict



t1 = time.time()

total = t1-t0
print(total)