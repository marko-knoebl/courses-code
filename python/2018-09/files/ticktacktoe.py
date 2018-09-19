import json
import pickle
import itertools
import xml.etree.ElementTree as et

class TickTackToe:
    def __init__(self):
        self.field = [[None, None, None], [None, None, None], [None, None, None]]

    def save_as_json(self, path):
        field_json = json.dumps(self.field)
        with open(path, mode="w", encoding="utf-8") as jsonfile:
            jsonfile.write(field_json)

    def load_from_json(self, path):
        with open(path, encoding="utf-8") as jsonfile:
            text_content = jsonfile.read()
        content = json.loads(text_content)
        self.field = content

    def save_as_pickle(self, path):
        field_pickle = pickle.dumps(self.field)
        with open(path, mode="wb") as picklefile:
            picklefile.write(field_pickle)

    def load_from_pickle(self, path):
        with open(path, "rb") as picklefile:
            pickled_content = picklefile.read()
        content = pickle.loads(pickled_content)
        self.field = content

    def save_as_binary(self, path):
        field_binary = field_to_binary(self.field)
        with open(path, mode="wb") as binfile:
            binfile.write(field_binary)

    def save_as_xml(self, path):
        field_xml = field_to_xml(self.field)
        with open(path, mode="w", encoding="utf-8") as xmlfile:
            xmlfile.write(field_xml)

def field_to_xml(field):
    xml_field = et.Element("field")
    for row in field:
        xml_row = et.SubElement(xml_field, "row")
        for cell in row:
            xml_cell = et.SubElement(xml_row, "cell")

    xmlstring = et.tostring(xml_field, encoding="unicode")
    return xmlstring

def field_to_binary(field):
    flat_list = list(itertools.chain(*field))
    # flat_list = [*field[0], *field[1], *field[2]]
    val_string = ""
    trans_dict = {None: "0", "X": "1", "O": "2"}
    for char in flat_list:
        val_string += trans_dict[char]
    val_int = int(val_string, base=3)
    binary_string = "{0:0>16b}".format(val_int)
    binary_string_1 = binary_string[0:8]
    binary_string_2 = binary_string[8:]
    byte_1 = int(binary_string_1, base=2)
    byte_2 = int(binary_string_2, base=2)
    print(byte_1)
    print(byte_2)
    binary_field = bytes([byte_1, byte_2])
    return binary_field
