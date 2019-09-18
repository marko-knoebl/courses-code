import xml.etree.ElementTree as et

field_data = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]

field = et.Element('field')

for row_data in field_data:
    print(row_data)
    row = et.SubElement(field, "row")
    for cell_data in row_data:
        cell = et.SubElement(row, "cell")
        cell.text = cell_data

print(field)
print(et.tostring(field))


tree = et.ElementTree(field)
tree.write("tictactoe.xml", encoding="utf-8")

# load from the file

import xml.etree.ElementTree as et

with open("tictactoe.xml", encoding="utf-8") as tttfile:
    xmlstring = tttfile.read()

field = et.fromstring(xmlstring)

# round-tripped field data
field_data_rt = []

for row in field:
    row_data = []
    for cell in row:
        print(cell.text)
        row_data.append(cell.text)
    field_data_rt.append(row_data)

print(field_data_rt)

print(field_data == field_data_rt)
