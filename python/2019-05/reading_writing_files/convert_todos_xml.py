import json
import pprint
import xml.etree.ElementTree as et

import todos_to_xml

"""
<todos>
  <todo completed="false" id="1">delectus aut autem</todo>
  <todo completed="false" id="2">delectus aut autem</todo>
  <todo completed="true" id="3">delectus aut autem</todo>
</todos>
"""

# load data from json

with open('reading_writing_files/todos.json', encoding='utf-8') as todofile:
    todostring = todofile.read()
tododata = json.loads(todostring)
pprint.pprint(tododata)

# write data to xml

tree = todos_to_xml.todos_to_xml(tododata)

tree.write("reading_writing_files/todos.xml", encoding="utf-8")
