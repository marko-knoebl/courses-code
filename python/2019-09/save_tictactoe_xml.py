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
