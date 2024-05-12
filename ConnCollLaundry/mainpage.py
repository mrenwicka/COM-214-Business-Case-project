import requests 
from bs4 import BeautifulSoup 
import json 
from natsort import natsorted

# Making a GET request 
r = requests.get('https://laundryconnect.net/conncollege/cc.html') 

# check status code for response received 
# success code - 200 
print(r) 

soup = BeautifulSoup(r.content, 'html.parser')

def get_all_links():
  table=soup.find_all("table")[1]
  for link in table.find_all('a'):
      print(link.get('href'))

def get_all_dorm_names():
  table=soup.find_all("table")[1]
  for link in table.find_all('a'):
      print(link.text)

def get_dorm_names_links():
  dorm_dict = {}
  table=soup.find_all("table")[1]
  for link in table.find_all('a'):
      dorm_dict[link.text] = link.get('href')
  return dorm_dict


dorm_dict = get_dorm_names_links()
dorm_dict = dict(natsorted(dorm_dict.items()))

json_object = json.dumps(dorm_dict, indent=4)
with open("dorms.json", "w") as outfile:
    outfile.write(json_object)
